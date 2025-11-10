import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { loadDeployConfig } from "./utils/config";
import { writeDeploymentOutput } from "./utils/output";

async function getFactoryDeps(
  hre: HardhatRuntimeEnvironment,
  contractName: string
): Promise<string[]> {
  const artifact = await hre.artifacts.readArtifact(contractName);
  const deps = artifact.factoryDeps ?? {};
  if (Object.keys(deps).length === 0) {
    return [];
  }

  return Promise.all(
    Object.values(deps).map(async (dependency) => {
      const dependencyArtifact = await hre.artifacts.readArtifact(dependency);
      return dependencyArtifact.bytecode;
    })
  );
}

function buildCustomData(
  factoryDeps: string[]
): { factoryDeps: string[] } | undefined {
  return factoryDeps.length ? { factoryDeps } : undefined;
}

const deployAutoConverter: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy, execute, get, log } = deployments;

  const { deployer } = await getNamedAccounts();
  const config = loadDeployConfig(network.name);

  const relayFactoryRegistry = await get("RelayFactoryRegistry");
  const keeperRegistry = await get("KeeperRegistry");
  const optimizerRegistry = await get("OptimizerRegistry");
  const optimizerDeploymentName = "OptimizerBase";
  const optimizer = await get(optimizerDeploymentName);

  const autoConverterFactoryDeps = await getFactoryDeps(
    hre,
    "AutoConverterFactory"
  );

  const autoConverterFactory = await deploy("AutoConverterFactory", {
    from: deployer,
    contract: "AutoConverterFactory",
    args: [
      config.v2.Voter,
      config.v2.Router,
      keeperRegistry.address,
      optimizerRegistry.address,
      optimizer.address,
      config.highLiquidityTokens,
    ],
    log: true,
    customData: buildCustomData(autoConverterFactoryDeps),
  });

  if (autoConverterFactory.newlyDeployed) {
    await execute(
      "RelayFactoryRegistry",
      { from: deployer, log: true },
      "approve",
      autoConverterFactory.address
    );
    log(
      `Approved AutoConverterFactory ${autoConverterFactory.address} on RelayFactoryRegistry`
    );
  }

  const outputPath = await writeDeploymentOutput(
    network.name,
    "auto-converter.json",
    {
      AutoConverterFactory: autoConverterFactory.address,
    }
  );

  log(`AutoConverter deployment output written to ${outputPath}`);
};

export default deployAutoConverter;
deployAutoConverter.tags = ["AutoConverter"];
deployAutoConverter.dependencies = ["Core"];
