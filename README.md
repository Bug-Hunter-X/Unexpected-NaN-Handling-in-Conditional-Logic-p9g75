# Unexpected NaN Handling in Conditional Logic

This code demonstrates a common JavaScript pitfall involving the comparison of NaN using loose equality.  The function `foo` attempts to handle null and negative numbers correctly but fails to explicitly check for NaN, resulting in an unexpected return value.

## Bug Description
The issue stems from the fact that `NaN` is not equal to itself using `==` or `===`.  This means that the `else` block is always executed when passing NaN as an argument, leading to the incorrect return value of 1.

## Solution
The recommended solution is to explicitly check for NaN using `isNaN()` or the stricter `Number.isNaN()`.