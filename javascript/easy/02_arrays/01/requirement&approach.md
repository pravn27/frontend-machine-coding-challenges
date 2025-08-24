# Requirement or Problem statement & Solutioning Approach

## 1. Problem statement

- Write a function to remove duplicate element from an Array

## 2. Features / Usecase

## 3. Understand the problem with sample inputs & outputs

### Sample - 1

- Input: [1, 2, 2, 3, 3, 3, 4, 5, 3, 2, 1]
- Output: [1, 2, 3, 4, 5]
  - Should return `Unique Elements` only

### Sample - 2

- Input: [6, 5, 6, 1, 1, 2, 5, 2, 1]
- Output: [1, 2, 5, 6]
  - Should return `Unique Elements` only

## 4. Approach

### Approach - 1

- using Set()
- Time complexity: O(n)
- Space complexity: O(n)

### Approach - 2

- using Object / Hash Map approach (manual tracking)
- Time complexity: O(n)
- Space complexity: O(n)

### Approach (Brute Force Approach) - 3

- using Array filter and indexOf methods
- using for loop & indexOf result array
- Time complexity: O(n^2) - indexOf inside filter is expensive
- Space complexity: O(1)
