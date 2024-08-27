import { mean } from "../src/mean"

describe('mean', () => {
    it('should return the correct mean for a simple dataset', () => {
      expect(mean([1, 2, 3, 4, 5])).toBe(3);
    });
  
    it('should throw an error for an empty array', () => {
      expect(() => mean([])).toThrow("Cannot calculate mean of an empty array.");
    });
  
    it('should return the single element for an array with one number', () => {
      expect(mean([5])).toBe(5);
    });
  
    it('should handle negative numbers', () => {
      expect(mean([-3, -6, -9])).toBe(-6);
    });
  
    it('should handle mixed positive and negative numbers', () => {
      expect(mean([10, -10, 5, -5])).toBe(0);
    });
  
    it('should handle decimal numbers', () => {
      expect(mean([1.5, 2.5, 3.5])).toBe(2.5);
    });
  
    it('should return the correct mean for repeated numbers', () => {
      expect(mean([4, 4, 4, 4])).toBe(4);
    });
  
    it('should handle large numbers', () => {
      expect(mean([1000000, 2000000, 3000000])).toBe(2000000);
    });
  
    it('should handle an array of zeros', () => {
      expect(mean([0, 0, 0, 0])).toBe(0);
    });
});