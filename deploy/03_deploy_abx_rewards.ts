import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { loadDeployConfig } from "./utils/config";
import { writeDeploymentOutput } from "./utils/output";

const RELAY_NAME = "ABX Rewards";
const DEPLOYMENT_NAME = "AbxRewardsAutoConverter";
const OUTPUT_FILE_NAME = "abx-rewards-relay.json";
const MANAGED_ESCROW_TYPE = 2n;
const MANAGED_TOKEN_ID = 8813n;
const ADMIN_ADDRESS = "0x4d8971D9932C1c0c16079722b3D93893F16Bb065";

const deployAbxRewards: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  const { deployments, getNamedAccounts, network, ethers } = hre;
  const { log } = deployments;

  const config = loadDeployConfig(network.name);
  const rewardToken = config.v2.ABX;

  const existingDeployment = await deployments.getOrNull(DEPLOYMENT_NAME);
  if (existingDeployment) {
    log(
      `${RELAY_NAME} relay already registered at ${existingDeployment.address}; skipping creation.`
    );
    return;
  }

  const { deployer } = await getNamedAccounts();

  const factoryDeployment = await deployments.get("AutoConverterFactory");
  const factoryAddress = factoryDeployment.address;

  const deployerSigner = await ethers.getSigner(deployer);
  const factory = await ethers.getContractAt(
    "AutoConverterFactory",
    factoryAddress,
    deployerSigner
  );

  const veAddress = await factory.ve();
  const ve = await ethers.getContractAt("IVotingEscrow", veAddress, deployerSigner);

  const escrowType = await ve.escrowType(MANAGED_TOKEN_ID);
  if (escrowType !== MANAGED_ESCROW_TYPE) {
    throw new Error(
      `Managed token id ${MANAGED_TOKEN_ID.toString()} is not a MANAGED veNFT (escrowType=${escrowType}).`
    );
  }

  const tokenOwner = await ve.ownerOf(MANAGED_TOKEN_ID);
  const normalizedTokenOwner = ethers.getAddress(tokenOwner);
  const normalizedDeployer = ethers.getAddress(deployerSigner.address);

  if (normalizedTokenOwner !== normalizedDeployer) {
    throw new Error(
      `Managed token id ${MANAGED_TOKEN_ID.toString()} is owned by ${normalizedTokenOwner}, but deployment is being executed by ${normalizedDeployer}.`
    );
  }

  log(
    `Creating ${RELAY_NAME} relay from AutoConverterFactory ${factoryAddress} using managed token ${MANAGED_TOKEN_ID.toString()}.`
  );

  const abiCoder = ethers.AbiCoder.defaultAbiCoder();
  const relayInitData = abiCoder.encode(["address"], [rewardToken]);

  const tx = await factory.createRelay(
    ADMIN_ADDRESS,
    MANAGED_TOKEN_ID,
    RELAY_NAME,
    relayInitData
  );
  log(`Submitted createRelay transaction ${tx.hash}, waiting for confirmation...`);

  const receipt = await tx.wait();

  const logs = receipt.logs ?? [];
  let relayAddress: string | undefined;
  for (const logEntry of logs) {
    if (ethers.getAddress(logEntry.address) !== ethers.getAddress(factoryAddress)) {
      continue;
    }
    try {
      const parsedLog = factory.interface.parseLog(logEntry);
      if (parsedLog.name === "CreateRelay") {
        relayAddress = ethers.getAddress(parsedLog.args._relay as string);
        break;
      }
    } catch (err) {
      // ignore logs that do not match the factory ABI
    }
  }

  if (!relayAddress) {
    throw new Error(
      `Unable to locate CreateRelay event for transaction ${tx.hash}. Inspect the transaction manually to confirm deployment.`
    );
  }

  const autoConverterArtifact = await hre.artifacts.readArtifact("AutoConverter");
  await deployments.save(DEPLOYMENT_NAME, {
    address: relayAddress,
    abi: autoConverterArtifact.abi,
  });

  const outputPath = await writeDeploymentOutput(network.name, OUTPUT_FILE_NAME, {
    relay: relayAddress,
    txHash: tx.hash,
    managedTokenId: MANAGED_TOKEN_ID.toString(),
    admin: ADMIN_ADDRESS,
    rewardToken,
  });

  log(`${RELAY_NAME} deployed at ${relayAddress}`);
  log(`Deployment details written to ${outputPath}`);
};

export default deployAbxRewards;
deployAbxRewards.tags = ["AbxRewards", "AutoConverterRelay"];
deployAbxRewards.dependencies = ["Core", "AutoConverter"];
