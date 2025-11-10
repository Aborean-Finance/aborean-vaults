import { readFileSync } from "fs";
import { join } from "path";
import { ZeroAddress, getAddress, isAddress } from "ethers";

export interface DeployConfig {
  USDC: string;
  WETH: string;
  OP?: string;
  v2: {
    Router: string;
    ABX: string;
    PoolFactory: string;
    Forwarder?: string;
    Voter: string;
    FactoryRegistry?: string;
  };
  highLiquidityTokens: string[];
}

const NETWORK_FILE_MAP: Record<string, string> = {
  abstract: "abstract-mainnet.json",
  abstractMainnet: "abstract-mainnet.json",
  abstractTestnet: "abstract-testnet.json",
  "abstract-testnet": "abstract-testnet.json",
  hardhat: "abstract-testnet.json",
};

export function loadDeployConfig(network: string): DeployConfig {
  const fileName = NETWORK_FILE_MAP[network];
  if (!fileName) {
    throw new Error(
      `No deployment constants configured for network "${network}". Update NETWORK_FILE_MAP in deploy/utils/config.ts to add support.`
    );
  }

  const filePath = join(__dirname, "..", "config", fileName);
  return loadConfigFromFile(filePath, fileName);
}

function loadConfigFromFile(filePath: string, fileName: string): DeployConfig {
  let raw: string;
  try {
    raw = readFileSync(filePath, "utf8");
  } catch (err) {
    throw new Error(
      `Unable to read deploy config "${fileName}" at ${filePath}. Ensure the file exists and is readable.`
    );
  }

  let parsed: Partial<DeployConfig> & { v2?: Partial<DeployConfig["v2"]> } = {};
  try {
    parsed = JSON.parse(raw);
  } catch (err) {
    throw new Error(`Deploy config "${fileName}" contains invalid JSON.`);
  }

  if (!parsed.v2) {
    throw new Error(
      `Deploy config "${fileName}" is missing the "v2" section required for deployment.`
    );
  }

  const v2 = parsed.v2;

  return {
    USDC: normalizeAddress(parsed.USDC, "USDC", fileName),
    WETH: normalizeAddress(parsed.WETH, "WETH", fileName),
    OP: parsed.OP ? normalizeAddress(parsed.OP, "OP", fileName) : undefined,
    v2: {
      Router: normalizeAddress(v2.Router, "v2.Router", fileName),
      ABX: normalizeAddress(v2.ABX, "v2.ABX", fileName),
      PoolFactory: normalizeAddress(v2.PoolFactory, "v2.PoolFactory", fileName),
      Forwarder: v2.Forwarder
        ? normalizeAddress(v2.Forwarder, "v2.Forwarder", fileName)
        : undefined,
      Voter: normalizeAddress(v2.Voter, "v2.Voter", fileName),
      FactoryRegistry: v2.FactoryRegistry
        ? normalizeAddress(v2.FactoryRegistry, "v2.FactoryRegistry", fileName)
        : undefined,
    },
    highLiquidityTokens: normalizeAddressArray(
      parsed.highLiquidityTokens,
      "highLiquidityTokens",
      fileName
    ),
  };
}

function normalizeAddress(
  value: unknown,
  label: string,
  fileName: string
): string {
  if (typeof value !== "string" || !isAddress(value)) {
    throw new Error(
      `Invalid or missing address for "${label}" in deploy config "${fileName}".`
    );
  }

  const normalized = getAddress(value);
  if (normalized === ZeroAddress) {
    throw new Error(
      `Address for "${label}" in deploy config "${fileName}" cannot be the zero address.`
    );
  }

  return normalized;
}

function normalizeAddressArray(
  value: unknown,
  label: string,
  fileName: string
): string[] {
  if (!Array.isArray(value)) {
    throw new Error(
      `Expected "${label}" to be an array in deploy config "${fileName}".`
    );
  }

  return value.map((item, index) =>
    normalizeAddress(item, `${label}[${index}]`, fileName)
  );
}
