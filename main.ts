// The One-Line Cat Joke That Lands — make.fun entry
// A single cat joke line, under 200 characters, written to entry.txt.

const JOKE =
  "My cat knocked my coffee off the desk, then stared at me like I was the one who owed him an apology.";

export { JOKE };

const MAX_LENGTH = 200;

function validateJoke(line: string): void {
  if (!line || line.trim().length === 0) {
    throw new Error("Joke line must not be empty.");
  }
  if (line.length >= MAX_LENGTH) {
    throw new Error(
      `Joke line is ${line.length} characters; it must be under ${MAX_LENGTH}.`,
    );
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Joke must be a single line with no line breaks.");
  }
}

function resolveOutputDir(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!dir || dir.trim().length === 0) {
    throw new Error(
      "MAKEFUN_OUTPUT_DIR is not set; cannot write entry.txt.",
    );
  }
  return dir;
}

async function writeEntry(): Promise<void> {
  validateJoke(JOKE);
  const outputDir = resolveOutputDir();
  const { mkdir, writeFile } = await import("node:fs/promises");
  const { join } = await import("node:path");
  await mkdir(outputDir, { recursive: true });
  const target = join(outputDir, "entry.txt");
  await writeFile(target, JOKE + "\n", "utf8");
  console.log(JOKE);
}

writeEntry().catch((error: unknown) => {
  console.error(
    "Failed to write entry:",
    error instanceof Error ? error.message : error,
  );
  process.exit(1);
});
