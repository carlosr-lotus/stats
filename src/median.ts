import { sort } from "./assets/array"

/**
 * Return the median value of an array of numbers. 
 * @param arr - The array of numbers used to calculate the median.
 * @returns The median value.
 */

export function median(arr: number[]): number {
    if (arr.length === 0)
        throw new Error('Cannot return the median from an empty array.')

    if (arr.length === 1)
        return arr[0]

    sort(arr)

    if (arr.length % 2 === 0) {
        const index = arr.length / 2
        const median = (arr[index] + arr[index - 1]) / 2
        return Number(median)
    }  
    
    return Number(arr.at(arr.length / 2)) 
}