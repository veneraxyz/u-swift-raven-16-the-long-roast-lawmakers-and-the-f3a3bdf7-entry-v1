import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "The senator who authored the bill to regulate artificial intelligence still emails his staff a .docx named FINAL_v7 and begs an intern to turn it into a PDF, because the future, it turns out, is everyone else's problem.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const resolved = outDir.startsWith("/") ? outDir : join(process.cwd(), outDir);
  mkdirSync(resolved, { recursive: true });

  const text = SENTENCE.trim();
  if (text.length < 1 || text.length > 320) {
    console.error(`entry must be 1-320 characters, got ${text.length}`);
    process.exit(1);
  }
  if (text.split("\n").length !== 1) {
    console.error("entry must be exactly one line");
    process.exit(1);
  }

  writeFileSync(join(resolved, "entry.txt"), text + "\n", "utf8");
}

main();
