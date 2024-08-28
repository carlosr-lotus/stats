import { median } from "../src/median"

describe('median', () => {
    it('should return the middle index for a dataset (ODD)', () => {
        expect(median([1, 5, 3, 7, 4, 4, 5])).toBe(4)
    })

    it('should calculate the middle index for a dataset (EVEN)', () => {
        expect(median([10, 20, 30, 40, 50, 60])).toBe(35)
    })

    it('should return the only element in array if its length is just one', () => {
        expect(median([123])).toBe(123)
    })

    it('should handle dataset for two values', () => {
        expect(median([2, 4])).toBe(3)
    })

    it('should handle decimal numbers for a dataset (ODD)', () => {
        expect(median([1.5, 2.5, 3.5])).toBe(2.5)
    })

    it('should handle decimal numbers for a dataset (EVEN)', () => {
        expect(median([1.5, 2.57, 3.543, 4.5])).toBe(3.0564999999999998)
    })

    it('should handle negative numbers for a dataset (ODD)', () => {
        expect(median([-1, -2, -3, -4, -5])).toBe(-3)
    })

    it('should handle negative numbers for a dataset (EVEN)', () => {
        expect(median([-1, -2, -3, -4, -5, -6])).toBe(-3.5)
    })

    it('should handle dataset for repeated numbers (EVEN)', () => {
        expect(median([4, 4, 4, 4])).toBe(4)
    })

    it('should handle dataset for repeated numbers (ODD)', () => {
        expect(median([4, 4, 4, 4, 4])).toBe(4)
    })

    it('should handle dataset for only zeros (EVEN)', () => {
        expect(median([0, 0, 0, 0])).toBe(0)
    })

    it('should handle dataset for only zeros (ODD)', () => {
        expect(median([0, 0, 0, 0, 0])).toBe(0)
    })

    it('should handle large numbers (EVEN)', () => {
        expect(median([13245, 90383, 12304, 53403])).toBe(33324)
    })

    it('should handle large numbers (ODD)', () => {
        expect(median([13245, 90383, 53403])).toBe(53403)
    })
})