import type { DMMF } from '@prisma/generator-helper';
import { PluginOptions, resolvePath } from '@zenstackhq/sdk';
import { Model } from '@zenstackhq/sdk/ast';
import { generate } from './generator';
import fs from 'fs';
import { writeFile } from 'fs/promises';
import path from 'path';

export const name = 'ZenStack MarkDown';

export default async function run(model: Model, options: PluginOptions, dmmf: DMMF.Document) {
    const result = await generate(model, options, dmmf);

    let outFile = (options.output as string) ?? 'd:\\branch\\zenstack\\packages\\plugins\\zenstack-md\\zmodel.md';
    outFile = resolvePath(outFile, options);

    if (!fs.existsSync(path.dirname(outFile))) {
        fs.mkdirSync(path.dirname(outFile), { recursive: true });
    }
    await writeFile(outFile, result);
}
