theorem BrahmaguptaFibonacciIdentityCorollary() {
  setVars(a, b, c, d, n: ℝ) →
  assert(
    (a² + nb²)(c² + nd²) = (ac - nbd)² + n(ad + bc)²
  )
} ↔

proof BrahmaguptaFibonacciIdentityCorollary() {
  # Start with general form
  assert((a² + nb²)(c² + nd²)) →
  
  # Apply General Brahmagupta-Fibonacci Identity
  apply(BrahmaguptaFibonacciIdentity()) →
  assert((a² + n(-b)²)(c² + nd²) = (ac + n(-b)d)² + n(ad - (-b)c)²) →
  
  # Simplify (-b)²
  assert((-b)² = b²) →
  
  # Simplify -b terms
  assert(
    n(-b)d = -nbd ∧
    -(-b)c = bc
  ) →
  
  # Substitute simplified terms
  assert((a² + nb²)(c² + nd²) = (ac - nbd)² + n(ad + bc)²) →
  
  # Final identity established
  conclude((a² + nb²)(c² + nd²) = (ac - nbd)² + n(ad + bc)²)
}