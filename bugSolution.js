function foo(x) {
  if (x === null) {
    return 0; 
  } else if (x < 0) {
    return -1; 
  } else if (Number.isNaN(x)) {
    return NaN; // Or throw an error: throw new Error("Invalid input: NaN");
  } else {
    return 1; 
  }
}

console.log(foo(NaN)); // Correct Output: NaN