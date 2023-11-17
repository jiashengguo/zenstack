/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="@types/jest" />

import { getLiteral, getObjectLiteral } from '@zenstackhq/sdk';
import { isPlugin, Model, Plugin } from '@zenstackhq/sdk/ast';
import { loadZModelAndDmmf } from '@zenstackhq/testtools';
import generate from '../src';

describe('ZenStack Markdown Plugin Tests', () => {
    it('todo', async () => {
        const { model, dmmf, modelFile } = await loadZModelAndDmmf(`
plugin zenstackmd {
    provider = '${process.cwd()}/dist'
}

/*
 * Enum for user's role in a space
 */
enum SpaceUserRole {
    USER
    ADMIN
}

model User
{
    id String @id @default(uuid())
    role SpaceUserRole
}

        `);

        const options = buildOptions(model, modelFile);
        await generate(model, options, dmmf);

        console.log('OpenAPI specification generated:');
    });
});

function buildOptions(model: Model, modelFile: string) {
    const optionFields = model.declarations.find((d): d is Plugin => isPlugin(d))?.fields || [];
    const options: any = { schemaPath: modelFile };
    optionFields.forEach((f) => (options[f.name] = getLiteral(f.value) ?? getObjectLiteral(f.value)));
    return options;
}
