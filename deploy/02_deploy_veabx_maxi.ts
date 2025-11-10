import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { loadDeployConfig } from "./utils/config";
import { writeDeploymentOutput } from "./utils/output";

const RELAY_NAME = "veABX Maxi";
const DEPLOYMENT_NAME = "VeAbxMaxiAutoCompounder";
const OUTPUT_FILE_NAME = "veabx-maxi-relay.json";
// const ENV_MANAGED_TOKEN_ID = "8234";
// const ENV_RELAY_ADMIN = "0x4d8971D9932C1c0c16079722b3D93893F16Bb065";
const MANAGED_ESCROW_TYPE = 2n;

// function requireEnv(name: string): string {
//   const value = process.env[name];
//   if (!value || value.trim().length === 0) {
//     throw new Error(
//       `Environment variable "${name}" is required to deploy ${RELAY_NAME}. Set it before running the script.`
//     );
//   }
//   return value.trim();
// }

// function parseManagedTokenId(rawTokenId: string): bigint {
//   let parsed: bigint;
//   try {
//     parsed = BigInt(rawTokenId);
//   } catch (err) {
//     throw new Error(
//       `Unable to parse ${ENV_MANAGED_TOKEN_ID}="${rawTokenId}" as a bigint. Provide the managed veNFT token id in decimal format.`
//     );
//   }

//   if (parsed <= 0n) {
//     throw new Error(`${ENV_MANAGED_TOKEN_ID} must be a positive integer.`);
//   }

//   return parsed;
// }

const deployVeAbxMaxi: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network, ethers } = hre;
  const { log } = deployments;

  loadDeployConfig(network.name);

  const existingDeployment = await deployments.getOrNull(DEPLOYMENT_NAME);
  if (existingDeployment) {
    log(
      `${RELAY_NAME} relay already registered at ${existingDeployment.address}; skipping creation.`
    );
    return;
  }

  const { deployer } = await getNamedAccounts();

  const adminAddress = "0x4d8971D9932C1c0c16079722b3D93893F16Bb065";


  const managedTokenId = 8241n

  const factoryDeployment = await deployments.get("AutoCompounderFactory");
  const factoryAddress = factoryDeployment.address;

  const deployerSigner = await ethers.getSigner(deployer);
  const factory = await ethers.getContractAt(
    "AutoCompounderFactory",
    factoryAddress,
    deployerSigner
  );

  const veAddress = await factory.ve();
  const ve = await ethers.getContractAt("IVotingEscrow", veAddress, deployerSigner);

  const escrowType = await ve.escrowType(managedTokenId);
  if (escrowType !== MANAGED_ESCROW_TYPE) {
    throw new Error(
      `Managed token id ${managedTokenId.toString()} is not a MANAGED veNFT (escrowType=${escrowType}).`
    );
  }

  const tokenOwner = await ve.ownerOf(managedTokenId);
  const normalizedTokenOwner = ethers.getAddress(tokenOwner);
  const normalizedDeployer = ethers.getAddress(deployerSigner.address);

  if (normalizedTokenOwner !== normalizedDeployer) {
    throw new Error(
      `Managed token id ${managedTokenId.toString()} is owned by ${normalizedTokenOwner}, but deployment is being executed by ${normalizedDeployer}.`
    );
  }

  log(
    `Creating ${RELAY_NAME} relay from AutoCompounderFactory ${factoryAddress} using managed token ${managedTokenId.toString()}.`
  );

  const tx = await factory.createRelay(adminAddress, managedTokenId, RELAY_NAME, "0x");
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

  const autoCompounderArtifact = await hre.artifacts.readArtifact("AutoCompounder");
  await deployments.save(DEPLOYMENT_NAME, {
    address: relayAddress,
    abi: autoCompounderArtifact.abi,
  });

  const outputPath = await writeDeploymentOutput(network.name, OUTPUT_FILE_NAME, {
    relay: relayAddress,
    txHash: tx.hash,
    managedTokenId: managedTokenId.toString(),
    admin: adminAddress,
  });

  log(`${RELAY_NAME} deployed at ${relayAddress}`);
  log(`Deployment details written to ${outputPath}`);
};

export default deployVeAbxMaxi;
deployVeAbxMaxi.tags = ["VeAbxMaxi", "AutoCompounderRelay"];
deployVeAbxMaxi.dependencies = ["Core"];
