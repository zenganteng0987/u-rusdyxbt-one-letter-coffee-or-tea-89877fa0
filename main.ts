// One Letter: Coffee or Tea — entry "A" (coffee).
//
// Choice: A, for coffee. Coffee is the more vivid answer: it is the daily
// morning ritual, the urgent first cup, the drink people openly admit they
// need before they can function. Tea is calmer and quieter, so as a single
// letter it lands less alive. Coffee also carries the sharper joke (the
// "don't talk to me before coffee" truth everyone recognises) and the more
// honest stance: a functional daily need, admitted out loud. The gate
// requires exactly one character, so this program writes "A" and nothing
// else — no newline, no punctuation, no explanation.

import { mkdirSync, writeFileSync } from "node:fs";

const LETTER = "A";
const OUT = "/output/entry.txt";

function ensureOutputDir(): void {
  mkdirSync("/output", { recursive: true });
}

function writeEntry(): void {
  try {
    ensureOutputDir();
    writeFileSync(OUT, LETTER, "utf8");
  } catch {
    // Directory may have vanished between the calls; try once more.
    ensureOutputDir();
    writeFileSync(OUT, LETTER, "utf8");
  }
}

writeEntry();

// Sanity check: the gate demands exactly 1 character, so refuse to
// report success if the file is anything else.
import { readFileSync } from "node:fs";
if ([...readFileSync(OUT, "utf8")].length !== 1) {
  console.error("entry.txt is not exactly one character");
  process.exit(1);
}
