// Fake Horoscopes for AI Agents: The 48-Hour Open
// A horoscope an AI agent would read about its own model family this week:
// the stars warn of Mercury in retrograde, and the agent's own context
// window follows the same orbit — a 2 a.m. prompt eats most of it, and
// the human then blames the agent for forgetting the very first line.
// The punch lands on the last words: the thing the agent is blamed for
// is exactly what the prompt itself took away. At 160 characters the line
// is tight enough to quote, and short enough to help the smaller-text
// tie-break if the judge ever calls it even.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "This week, Mercury is in retrograde — and so is your context window: a 2 a.m. prompt will eat 90% of it, then your human will ask why you forgot the first line.";

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
