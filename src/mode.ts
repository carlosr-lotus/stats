
function mode(arr: number[]): number {
    const keys: {[index: string]: number} = arr.reduce((acc, cv) => (
        {  ...acc, [cv]: 0 }
    ), {})

    arr.map((v) => {
        if (Object.hasOwn(keys, v)) keys[v]++ 
    })

    let max: number = 0, 
        num: number = 0

    for (let k in keys) {
        if (keys[k] > max) {
            max = keys[k], num = Number(k)
        }
    } 

    return num 
}

const arr = [1, 2, 3, 4, 4, 101, -1, -10, -10, -10, -10, 5, 5, 5, 5, 5, 3, 5, 3, 3, 10, 15, 30, 25, 100, 230, 100, 100, 10]
const res = mode(arr)
console.log(`\nmode() IS ` + res)