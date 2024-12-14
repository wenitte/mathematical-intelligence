theorem Complex_Arithmetic_Example() {
  assert(
    (2i - 1)² * (4/(1-i) + (2-i)/(1+i)) = -11/2 - (23/2)i
  )
}

proof Complex_Arithmetic_Example() {
  // Expand squared term and standardize fractions
  assert(((-1)² - 2*2i + 4i²) * (4(1+i)/((1-i)(1+i)) + ((2-i)(1-i))/((1+i)(1-i)))) →
  
  // Simplify squared term and denominators
  assert((-3 - 4i) * ((4 + 4i)/(1² + 1²) + ((2-i)(1-i))/(1² + 1²))) →
  
  // Simplify denominator to 2
  assert((-3 - 4i) * ((4 + 4i)/2 + (2 - 2i - i + i²)/2)) →
  
  // Simplify i² = -1 in numerator
  assert((-3 - 4i) * ((4 + 4i)/2 + (1 - 3i)/2)) →
  
  // Combine fractions
  assert((-3 - 4i) * ((5 + i)/2)) →
  
  // Distribute and multiply complex numbers
  assert(((-3 * 5 - (-4) * 1) + (-3 * 1 + (-4) * 5)i)/2) →
  
  // Evaluate multiplication
  assert((-15 + 4) + (-3 - 20)i)/2) →
  
  // Simplify final expression
  assert(-11/2 - (23/2)i)
}