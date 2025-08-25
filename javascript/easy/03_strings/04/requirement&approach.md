# Requirement or Problem statement & Solution Approach

## 1. Problem statement

- Write a JavaScript function to find First Non-repeated Character

## 2. Features / Usecase

## 3. Understand the problem with sample inputs & outputs

### Sample - 1

- Input: "swiss"
- Output: "w"

### Sample - 2

- Input: "aabbccde"
- Output: "d"

## 4. Approach

### Approach - 1

- Naive / Brute force approach
  - for Loop each char & check it appears again in the string using indexOf() & lastIndexOf()
  - Time complexity: O(n^2)
  - Space complexity: O(1)

### Approach - 2

- Hashmap (Object or Map) / Frequency count approach
- Use a hash map (object or Map) to count character frequencies, then find the first with count = 1.
- Time complexity: O(n)
- Space complexity: O(n)
