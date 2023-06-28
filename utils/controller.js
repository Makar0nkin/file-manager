import {exitManager} from "./process.js";
import {cd, ls, up} from "../operations/navigation.js";
import {add, cat, rn, cp, mv, rm} from "../operations/files.js";
import {osController} from "../operations/os.js";
import {compress, decompress} from "../operations/zip.js";
import {hash} from "../operations/hash.js";


export const controller = async (args) => {
    switch (args[0]) {
        case '.exit':
            exitManager()
            break
        // Navigation
        case 'up':
            up()
            break
        case 'cd':
            await cd(args[1])
            break
        case 'ls':
            await ls()
            break
        // Files
        case 'cat':
            await cat(args[1])
            break
        case 'add':
            await add(args[1])
            break
        case 'rn':
            await rn(args[1], args[1])
            break
        case 'cp':
            await cp(args[1], args[2])
            break
        case 'mv':
            await mv(args[1], args[2])
            break
        case 'rm':
            await rm(args[1])
            break
        // os
        case 'os':
            await osController(args[1])
            break
        // zip
        case 'compress':
            compress(args[1], args[2])
            break
        case 'decompress':
            decompress(args[1], args[2])
            break
        // Hash
        case 'hash':
            await hash(args[1])
            break
        // Unknown command
        default:
            console.log('Invalid input')
            break
    }
}