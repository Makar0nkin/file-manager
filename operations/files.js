import fs from 'node:fs'
import path from 'node:path'
import {currentPath} from "../index.js";

export const cat = async (source) => {
    const rr = fs.createReadStream(path.join(...currentPath, source))
    rr.pipe(process.stdout)
}