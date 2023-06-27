import os from "node:os"

export const osController = async (arg) => {
    if (arg.startsWith('--')){
        let clearArg = arg.replace('--', '')
        switch (clearArg) {
            case 'EOL':
                console.log(`System EOL: ${JSON.stringify(os.EOL)}`)
                break
            case 'cpus':
                console.log("-------===== CPU Information =====-------")
                console.log("Number of CPUs:\t", os.cpus().length)
                os.cpus().forEach((cpu, i) => {
                    process.stdout.write(`(index): ${i + 1}\tmodel: ${cpu.model}\t`)
                    process.stdout.write(`clock speed (GHz): ${(cpu.speed / 1000).toFixed(2)}\n`)
                })
                break
            case 'homedir':
                console.log(`Home directory: ${os.homedir()}`)
                break
            case 'username':
                console.log(`System username: ${os.userInfo().username}`)
                break
            case 'architecture':
                console.log(`Node CPU architecture: ${os.arch()}`)
                break
        }
    }
}
