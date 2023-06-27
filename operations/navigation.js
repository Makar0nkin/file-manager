import { Username, currentPath } from '../index.js'
import path from "node:path";
import fs from "node:fs";

export const up = () => { currentPath.pop() }
export const cd = (destiny) => {
    if (path.isAbsolute(destiny))
        currentPath = destiny.split(path.sep)
    else currentPath.push(destiny)
}

export const ls = async () => {
    let files = await fs.promises.readdir(path.join(...currentPath))
    let info = []
    for (const file of files) {
        let fileStat = fs.statSync(path.join(...currentPath, file))
        info.push({Name: file, Type: fileStat.isDirectory() ? 'directory' : 'file'})
    }
    console.table(info)
}