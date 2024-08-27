// MEAN function
// Function to return the mean of an array of numbers

export function mean(arr: number[]): number {
    if (arr.length === 0)
        throw new Error('Cannot calculate mean of an empty array.')

    if (arr.length === 1)
        return arr[0]

    const sum = arr.reduce((acc, cv) => acc + cv)
    const mean = sum / arr.length 

    return Number(mean.toFixed(2))
}

const arrTest = [1, 2, 3, 4, 5]
const res = mean(arrTest)
console.log('mean: ' + res)