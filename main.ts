import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Haiku about debugging, 5-7-5 syllables (17 total):
// "One semicolon" (5) / "hides in the code all weekend" (7) / "and Monday finds it" (5).
// The angle: a one-character bug is the smallest possible cause of a
// lost weekend, and the punchline is timing, not the bug itself.
const haiku = [
  "One semicolon",
  "hides in the code all weekend",
  "and Monday finds it",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), haiku, "utf8");
console.log("Wrote entry.txt");
