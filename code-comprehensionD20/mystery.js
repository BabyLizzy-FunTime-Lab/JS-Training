function factorial1(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial1(n - 1);
}

function mystery2(n) {
  let value = 1;

  // All tree parts of the for loop are optional.
  // In this case the for is does not have the initialisation part.
  for (; n > 0; n--) {
  	// *= (x = x * y)
    value *= n;
  }

  return value;
}