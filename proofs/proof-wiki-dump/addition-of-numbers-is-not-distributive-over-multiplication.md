theorem NonDistributiveAdditionOverMultiplication() {
  assert(
    ∃a,b,c ∈ ℝ ⇒ (a + (b × c) ≠ (a + b) × (a + c))
  )
} ↔

proof NonDistributiveAdditionOverMultiplication() {
  // Proof by counterexample
  setVar(a: ℝ = 2) →
  setVar(b: ℝ = 3) →
  setVar(c: ℝ = 6) →
  
  // Left side evaluation
  assert(2 + (3 × 6)) →
  assert(2 + 18) →
  assert(20) →
  
  // Right side evaluation
  assert((2 + 3) × (2 + 6)) →
  assert(5 × 8) →
  assert(40) →
  
  // Compare results
  assert(20 ≠ 40) →
  
  // Therefore existential claim is proven
  conclude(∃a,b,c ∈ ℝ ⇒ (a + (b × c) ≠ (a + b) × (a + c)))
}