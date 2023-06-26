import {exitManager} from "./process.js";
import {cd, ls, up} from "../operations/navigation.js";
import {currentPath} from "../index.js";


export const controller = (args) => {
    if (args.join(' ') === '.exit') {
        exitManager()
        // Navigation
    } else if (args.join(' ') === 'up' && currentPath.length !== 1) {
        up()
    } else if (args[0] === 'cd') {
        cd(args[1])
    } else if (args.join(' ') === 'ls') {
        ls()
    } else {
        console.log('Invalid input')
    }
}