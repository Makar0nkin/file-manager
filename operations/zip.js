import fs from 'node:fs'
import zlib from "node:zlib"
import { pipeline } from 'stream'
import {getAbsolutePath, getRelativePath} from "../utils/path.js";
import path from "node:path";

export const compress = (filePath, destiny) => {
    console.log(getAbsolutePath(filePath), getAbsolutePath(destiny))
    fs.createReadStream(getAbsolutePath(filePath))
        .pipe(zlib.createBrotliCompress())
        .pipe(fs.createWriteStream(getAbsolutePath(destiny)))

}

export const decompress = (filePath, destiny) => {
    console.log(getAbsolutePath(filePath), getAbsolutePath(destiny))
    fs.createReadStream(getAbsolutePath(filePath))
        .pipe(zlib.createBrotliDecompress())
        .pipe(fs.createWriteStream(getAbsolutePath(destiny)))
}