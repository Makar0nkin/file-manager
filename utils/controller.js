import {exitManager} from "./process.js";
import {cd, ls, up} from "../operations/navigation.js";
import {currentPath} from "../index.js";
import {add, cat, rn, cp, mv, rm} from "../operations/files.js";
import {osController} from "../operations/os.js";


export const controller = async (args) => {
    if (args.join(' ') === '.exit') {
        exitManager()
        // Navigation
    } else if (args.join(' ') === 'up' && currentPath.length !== 1) {
        up()
    } else if (args[0] === 'cd') {
        cd(args[1])
    } else if (args[0] === 'ls') {
        await ls()
        // Files
    } else if (args[0] === 'cat') {
        await cat(args[1])
    } else if (args[0] === 'add') {
        await add(args[1])
    } else if (args[0] === 'rn') {
        await rn(args[1], args[2])
    } else if (args[0] === 'cp') {
        await cp(args[1], args[2])
    } else if (args[0] === 'mv'){
        await mv(args[1], args[2])
    } else if (args[0] === 'rm') {
        await rm(args[1])
    } else if (args[0] === 'os') {
        await osController(args[1])
    }
    else {
        console.log('Invalid input')
    }
}