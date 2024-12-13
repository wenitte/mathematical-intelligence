theorem BrahmaguptaFibonacciCorollary() {
  assert(
    ∀a,b,c,d ∈ ℝ ⇒ 
    (a² + b²)(c² + d²) = (ac - bd)² + (ad + bc)²
  )
} ↔

proof BrahmaguptaFibonacciCorollary() {
  setVar(a,b,c,d: ℝ) →
  
  apply(BrahmaguptaFibonacciIdentity) →
  assert((a² + b²)(c² + d²) = (ac + bd)² + (ad - bc)²) →
  
  transform(-b ← b) →
  assert(
    (a² + (-b)²)(c² + d²) = (ac + (-b)d)² + (ad - (-b)c)²
  ) →
  
  simplify() →
  assert(
    (a² + b²)(c² + d²) = (ac - bd)² + (ad + bc)²
  )
}