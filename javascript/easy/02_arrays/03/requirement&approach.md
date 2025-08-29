# Requirement or Problem statement & (Thought Process) Solution Approach

## 1. Problem statement

- Write a function to find Largest element in an Array

## 2. Features / Use cases

## 3. Understand the problem with sample inputs & outputs

### Sample - 1

- Input: [5, 3, 2, 4, 1]
- Output: 5

### Sample - 2

- Input: [6, 10, 10, 11]
- Output: 11

## 4. Approach

<details>
  <summary><b>Approach - 1 (Brute force)</b></summary>

- Thought Process / Approach

  - Sort Array in ascending order
  - Return last element, Array[size - 1]

- Complexity
  - Time Complexity: O(n \* log n)
  - Space Complexity: O(n)

</details>

<details>
  <summary><b>Approach - 2 (Optimized)</b></summary>

- Thought Process / Approach - one pass solution

  - Define & init max variable with A[0] first element
  - Loop each element & compare with max variable
    - If any element greater than max, update max variable with that element
  - Return max variable

- Complexity
  - Time Complexity: O(n)
  - Space Complexity: O(1)

</details>
