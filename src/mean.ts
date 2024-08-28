/**
 * Return the mean of an array of numbers. 
 * @param arr - The array of numbers to calculate mean.
 * @returns The mean value.
 */

export function mean(arr: number[]): number {
    if (arr.length === 0)
        throw new Error('Cannot calculate mean of an empty array.')

    if (arr.length === 1)
        return arr[0]

    const sum = arr.reduce((acc, cv) => acc + cv)
    const mean = sum / arr.length 

    return mean
}