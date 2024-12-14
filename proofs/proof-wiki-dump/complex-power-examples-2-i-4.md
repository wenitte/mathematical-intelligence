theorem ComplexPower4() {
  assert(
    (2 + i)^4 = -7 + 24i
  )
}

proof ComplexPower4() {
  // Use property of exponents: (a+bi)^4 = ((a+bi)^2)^2
  assert((2 + i)^4 = ((2 + i)^2)^2) →
  
  // Calculate first square
  let firstSquare = (2 + i)(2 + i) →
  assert(firstSquare = (2 × 2 - 1 × 1) + (2 × 1 + 1 × 2)i) →
  assert(firstSquare = (4 - 1) + (2 + 2)i) →
  assert(firstSquare = 3 + 4i) →
  
  // Calculate second square
  let secondSquare = (3 + 4i)(3 + 4i) →
  assert(secondSquare = (3 × 3 - 4 × 4) + (3 × 4 + 4 × 3)i) →
  assert(secondSquare = (9 - 16) + (12 + 12)i) →
  assert(secondSquare = -7 + 24i) →
  
  // Final result
  assert((2 + i)^4 = -7 + 24i)
}