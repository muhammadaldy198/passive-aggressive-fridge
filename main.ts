// v2 rebuild: smell-as-revenge, 98c — alarm 11x/3 days, fridge releases the smell, it sleeps in the bed.
import { writeFileSync, mkdirSync, chmodSync } from "node:fs";
const TEXT = "Door alarm rang 11 times in 3 days. I let the smell out every time. Tonight it sleeps in your bed.";
const out = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
const target = `${out}/entry.txt`;
writeFileSync(target, TEXT, "utf8");
chmodSync(target, 0o644);
