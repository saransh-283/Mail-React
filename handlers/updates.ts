import path from "path";
import { promises as fs } from "fs";

export default async function updatesHandler() {
  const jsonDirectory = path.join(process.cwd(), "json");
  const fileContents = await fs.readFile(jsonDirectory + "/updates.json", "utf8");

  return JSON.parse(fileContents)
}
