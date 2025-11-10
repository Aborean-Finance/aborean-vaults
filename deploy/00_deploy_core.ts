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

const deployCore: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy, execute, log } = deployments;

  const { deployer } = await getNamedAccounts();
  const config = loadDeployConfig(network.name);

  log(`Deploying core relay contracts with deployer ${deployer}`);

  const registryFactoryDeps = await getFactoryDeps(hre, "Registry");

  const relayFactoryRegistry = await deploy("RelayFactoryRegistry", {
    from: deployer,
    contract: "Registry",
    args: [[]],
    log: true,
    customData: buildCustomData(registryFactoryDeps),
  });

  const keeperRegistry = await deploy("KeeperRegistry", {
    from: deployer,
    contract: "Registry",
    args: [[]],
    log: true,
    customData: buildCustomData(registryFactoryDeps),
  });

  const optimizerContractName = "OptimizerBase";
  const optimizerArgs = [
    config.USDC,
    config.WETH,
    config.v2.ABX,
    config.v2.PoolFactory,
    config.v2.Router,
  ];

  const optimizerFactoryDeps = await getFactoryDeps(hre, optimizerContractName);

  const optimizer = await deploy(optimizerContractName, {
    from: deployer,
    contract: optimizerContractName,
    args: optimizerArgs,
    log: true,
    customData: buildCustomData(optimizerFactoryDeps),
  });

  const optimizerRegistry = await deploy("OptimizerRegistry", {
    from: deployer,
    contract: "Registry",
    args: [[]],
    log: true,
    customData: buildCustomData(registryFactoryDeps),
  });

  if (optimizerRegistry.newlyDeployed || optimizer.newlyDeployed) {
    await execute(
      "OptimizerRegistry",
      { from: deployer, log: true },
      "approve",
      optimizer.address
    );
    log(`Approved ${optimizer.address} on OptimizerRegistry`);
  }

  const autoCompounderFactoryDeps = await getFactoryDeps(
    hre,
    "AutoCompounderFactory"
  );

  const autoCompounderFactory = await deploy("AutoCompounderFactory", {
    from: deployer,
    contract: "AutoCompounderFactory",
    args: [
      config.v2.Voter,
      config.v2.Router,
      keeperRegistry.address,
      optimizerRegistry.address,
      optimizer.address,
      config.highLiquidityTokens,
    ],
    log: true,
    customData: buildCustomData(autoCompounderFactoryDeps),
  });

  if (autoCompounderFactory.newlyDeployed) {
    await execute(
      "RelayFactoryRegistry",
      { from: deployer, log: true },
      "approve",
      autoCompounderFactory.address
    );
    log(
      `Approved AutoCompounderFactory ${autoCompounderFactory.address} on RelayFactoryRegistry`
    );
  }

  const outputPath = await writeDeploymentOutput(network.name, "core.json", {
    Optimizer: optimizer.address,
    OptimizerRegistry: optimizerRegistry.address,
    AutoCompounderFactory: autoCompounderFactory.address,
    RelayFactoryRegistry: relayFactoryRegistry.address,
    KeeperRegistry: keeperRegistry.address,
  });

  log(`Core deployment output written to ${outputPath}`);
};

export default deployCore;
deployCore.tags = ["Core", "RelayCore"];
