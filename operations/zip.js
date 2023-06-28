import fs from 'node:fs'
import zlib from "node:zlib"
import {getAbsolutePath} from "../utils/path.js";

export const compress = (filePath, destiny) => {
    console.log(getAbsolutePath(filePath), getAbsolutePath(destiny))
    fs.createReadStream(getAbsolutePath(filePath))
        .pipe(zlib.createBrotliCompress())
        .pipe(fs.createWriteStream(getAbsolutePath(destiny)))

}

export const decompress = (filePath, destiny) => {
    fs.createReadStream(getAbsolutePath(filePath))
        .pipe(zlib.createBrotliDecompress())
        .pipe(fs.createWriteStream(getAbsolutePath(destiny)))
}