import fs from "fs"
import { archivesRegistry } from '../src/'

const names: string[] = []
for (const archive of archivesRegistry.archives) { 
    names.push(`"${archive.network}"`)
}

const preamble = `
//
// This file is a autogenerated, DO NOT EDIT. 
// Run npm run gen-types to generate this file from archives.
//
`

const body = `
export type ChainName = ${names.join("|")}
`

fs.writeFileSync(`${__dirname}/../src/chains.ts`, `${preamble}${body}`)
