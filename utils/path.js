import path from "node:path";
import {currentPath} from "../index.js";

export const getAbsolutePath = (destiny) => {
    return path.isAbsolute(destiny) ? destiny : path.join(...currentPath, destiny)
}

export const getRelativePath = (destiny) => {
    return !path.isAbsolute(destiny) ? destiny : path.join(...currentPath, destiny)
}