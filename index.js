import os from 'node:os'
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'
import { parseUsername } from './cli/args.js'
import { exitManager } from "./utils/process.js";
import { up, cd, ls } from './operations/navigation.js'
import {controller} from "./utils/controller.js";

// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

let Username = parseUsername()
let currentPath = os.homedir().split(path.sep)

console.log(`Welcome to the File Manager, ${Username}!`)
console.log(`You are currently in ${path.join(...currentPath)}`)

process.stdin.on('data', async (chunk) => {
    let command = chunk.toString()
    let args = command
        .replace(/[\n\r]/, '')
        .split(/\s+/)
        .filter(el => el !== '')
    try{
        await controller(args)
    }
    catch (e){
        process.stdout.write('Operation failed\n')
    }
    process.stdout.write(`You are currently in ${path.join(...currentPath)}\n`)
})

process.on('SIGINT', exitManager);

export {
    Username,
    currentPath
}