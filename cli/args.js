export const parseUsername = () => {
    return process.argv.slice(2).find((el) => el.startsWith('--username')).split('=')[1]
}
