theorem BernoulliInequality() {
  assert(
    ∀x ∈ ℝ, x > -1 ∧
    ∀n ∈ ℤ≥0 ⇒
    (1 + x)ⁿ ≥ 1 + nx
  )
}

proof BernoulliInequality() {
  setVar(x: ℝ, x > -1) →
  setVar(n: ℤ≥0) →
  letP(n: ℤ≥0 → ℝ) where P(n) := "(1 + x)ⁿ ≥ 1 + nx" →
  
  // Base case
  assert(P(0)) {
    (1 + x)⁰ = 1 ≥ 1 + 0x = 1
  } →

  // Inductive step
  assert(∀k ∈ ℤ≥0: P(k) → P(k+1)) {
    assume(P(k)) →
    assert((1 + x)ᵏ ≥ 1 + kx) →
    
    calc {
      (1 + x)^(k+1) 
      = (1 + x)ᵏ(1 + x)
      ≥ (1 + kx)(1 + x)     // By inductive hypothesis
      = 1 + (k+1)x + kx²
      ≥ 1 + (k+1)x         // Since x > -1 implies kx² ≥ 0
    }
  } →

  apply(MathematicalInduction(P)) →
  conclude((1 + x)ⁿ ≥ 1 + nx)
}