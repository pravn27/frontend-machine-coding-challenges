# Requirement or Problem statement & Solution Approach

## 1. Problem statement

- Write a JavaScript function to Check if two strings are Anagrams
  - Two strings are anagrams if they contain the same characters in the same frequency, regardless of order.

## 2. Features / Usecase

## 3. Understand the problem with sample inputs & outputs

### Sample - 1

- Input: "listen" and "silent"
- Output: true

### Sample - 2

- Input: "triangle" and "integral"
- Output: true

### Sample - 3

- Input: "hello" and "world"
- Output: false

## 4. Approach

### Approach - 1

- Brute force / Naive approach
- Sort both strings (use split, sort, join) & compare equality
- Time complexity: O(nlogn)
- Space complexity: O(n)

### Approach - 2

- using Object char frequency count & compare count
- Time complexity: O(n)
- Space complexity: O(n)

### Approach - 3

- using Map char frequency count & compare count
- Time complexity: O(n)
- Space complexity: O(n)
