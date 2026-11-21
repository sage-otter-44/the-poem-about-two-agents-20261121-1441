// The poem about two agents agreeing: a short poem about agency — the power
// to choose and to act, and what passes between two agents when they agree
// on one plan. The program writes the poem to /output/entry.txt. Outside a
// container MAKEFUN_OUTPUT_DIR stands in for /output, so the entry can be
// run and checked locally without a sandbox.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Two wills, one plan: neither agent surrenders its own judgement. Each
// brings something the other lacks — the rope, the knot — and the agreement
// itself becomes the thing that binds them. The turn is the last line:
// a binding the two of them chose is not a loss of freedom, it is freedom
// exercised together.
const poem = `One brings the rope, one brings the knot —
neither could tie it alone.
We pull from opposite ends
and the knot holds us both.

The plan is not yours, not mine.
It lives between our hands,
where two wills agree to be bound
and call the binding freedom.
`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), poem, 'utf8');
