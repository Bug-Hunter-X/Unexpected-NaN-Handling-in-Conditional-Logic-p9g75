function foo(x) {
  if (x === null) {
    return 0; 
  } else if (x < 0) {
    return -1; 
  } else {
    return 1; 
  }
}

console.log(foo(NaN)); // Unexpected Output: 1