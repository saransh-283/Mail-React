import path from "path";
import { promises as fs } from "fs";

export default async function junkHandler() {
  const jsonDirectory = path.join(process.cwd(), "json");
  const fileContents = await fs.readFile(jsonDirectory + "/junk.json", "utf8");

  return JSON.parse(fileContents)
}
