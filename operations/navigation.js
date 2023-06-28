import { Username, currentPath } from '../index.js'
import path from "node:path";
import fs from "node:fs";

export const up = () => { currentPath.pop() }
export const cd = async (destiny) => {
    if (path.isAbsolute(destiny))
        currentPath = destiny.split(path.sep)
    else {
        await fs.promises.access(path.join(...currentPath, destiny))
        await fs.promises.stat(path.join(...currentPath, destiny))
            .then((stats) => {
                if (stats.isDirectory()) currentPath.push(destiny)
                else throw Error('Error: You can`t access file!')
            })
    }
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