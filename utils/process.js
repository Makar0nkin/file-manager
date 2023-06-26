import { Username } from "../index.js";

export const exitManager = () => {
    console.log(`Thank you for using File Manager, ${Username}, goodbye!`)
    while (true) process.exit()
}