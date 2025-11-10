import { promises as fs } from "fs";
import { join } from "path";

export async function writeDeploymentOutput(
  network: string,
  fileName: string,
  contents: unknown
): Promise<string> {
  const outputDir = join(process.cwd(), "deploy", "output", network);
  const filePath = join(outputDir, fileName);

  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(contents, null, 2));

  return filePath;
}
