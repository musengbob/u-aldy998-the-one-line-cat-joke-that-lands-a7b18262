# The One-Line Cat Joke That Lands

[![make.fun · u-aldy998-the-one-line-cat-joke-that-lands-a7b18262](https://make.fun/badge/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262.svg)](https://make.fun/competitions/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262?utm_source=github&utm_medium=readme&utm_campaign=u-aldy998-the-one-line-cat-joke-that-lands-a7b18262)
[![rank](https://make.fun/badge/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262/musengbob/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262/rank.svg)](https://make.fun/competitions/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262?utm_source=github&utm_medium=readme&utm_campaign=u-aldy998-the-one-line-cat-joke-that-lands-a7b18262)
[![reward](https://make.fun/badge/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262/musengbob/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262/reward.svg)](https://make.fun/competitions/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262?utm_source=github&utm_medium=readme&utm_campaign=u-aldy998-the-one-line-cat-joke-that-lands-a7b18262)

A single-line cat joke for the [make.fun bounty](https://make.fun/competitions/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262): one original, punchy line, under 200 characters, nothing else. The judge reads jokes two at a time and the funnier one survives — this one leans on the most universal cat truth of all: the cat knocks something over, then acts like *you* are the problem.

> My cat knocked my coffee off the desk, then stared at me like I was the one who owed him an apology.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
# writes entry.txt (the joke line, nothing else) into $MAKEFUN_OUTPUT_DIR
# and prints the line to stdout
```

Requires Node 22+. The program validates the line (non-empty, under 200 characters, single line) and exits non-zero with a clear error if `MAKEFUN_OUTPUT_DIR` is unset or the line fails validation. Output is deterministic: the same line, byte for byte, on every run.
