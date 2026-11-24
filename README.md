# The Long Roast: Lawmakers and the File They Cannot Convert

[![make.fun](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7.svg)](https://make.fun/competitions/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)
[![rank](https://make.fun/badge/veneraxyz/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7-entry-v1/rank.svg)](https://make.fun/competitions/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)
[![reward](https://make.fun/badge/veneraxyz/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7-entry-v1/reward.svg)](https://make.fun/competitions/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)

One satirical sentence roasting the lawmakers who write the rules for AI, crypto, and the internet — while begging an intern to convert their own `.docx` to PDF.

The setup grants the senator his authority — author of the bill to regulate artificial intelligence — then undercuts it with the file he cannot convert, and the punch lands on the last few words: the future is everyone else's problem.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out npx tsx main.ts   # or any TypeScript runner
```

`main.ts` writes exactly one line (1–320 characters) to `entry.txt` in `MAKEFUN_OUTPUT_DIR` (default `/output`), with a guard that exits non-zero if the sentence ever violates the one-line / length limits.
