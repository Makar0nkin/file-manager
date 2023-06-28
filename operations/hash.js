import crypto from "crypto"
import fs from "fs"
import {getAbsolutePath} from "../utils/path.js";

export const hash = async (filePath) => {
    let data = await fs.promises.readFile(getAbsolutePath(filePath), {encoding: 'utf-8'})
    const hash = crypto.createHash('sha256')
        .update(data)
        .digest('hex')
    console.log(hash)
}