import fs from 'node:fs'
import path from 'node:path'
import { currentPath } from "../index.js";
import { getAbsolutePath, getRelativePath } from "../utils/path.js";

export const cat = async (source) => {
    const rs = await fs.createReadStream(getAbsolutePath(source))
    let data = ''
    for await (const chunk of rs){
        data += chunk
    }
    process.stdout.write(data + '\n')
}

export const add = async (new_fn) => {
    await fs.promises.writeFile(getAbsolutePath(new_fn), '')
}

export const rn = async (oldFilePath, newFn) => {
    await fs.promises.rename(getAbsolutePath(oldFilePath), path.join(...currentPath, newFn))
}

export const cp = async (filePath, dirPath) => {
    await fs.createReadStream(getAbsolutePath(filePath), {encoding: 'utf-8'})
        .pipe(fs.createWriteStream(
            path.join(
                getAbsolutePath(dirPath),
                getRelativePath(filePath)
            )
        ))
}

export const rm = async (filePath) => {
    await fs.promises.unlink(getAbsolutePath(filePath))
}

export const mv = async (filePath, dirPath) => {
    await cp(filePath, dirPath)
    await rm(filePath)
}
