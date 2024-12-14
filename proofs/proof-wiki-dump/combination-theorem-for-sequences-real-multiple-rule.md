theorem Combination_Rule_Sequences() {
  assert(
    ∀{xₙ} ∈ ℝ^ℕ,
    (lim(n→∞) xₙ = l) ∧
    (λ ∈ ℝ) ⇒
    (lim(n→∞) (λxₙ) = λl)
  )
}

proof Combination_Rule_Sequences() {
  setVar(ε > 0) →
  setVar(λ ∈ ℝ) →
  
  case(λ = 0) {
    assert(λxₙ = 0 ∀n) →
    assert(lim(n→∞) (λxₙ) = 0 = λl)
  } →
  
  case(λ ≠ 0) {
    assert(|λ| > 0) →
    assert(ε/|λ| > 0) →
    
    apply(Sequence_Convergence_Definition) {
      assert(
        ∃N ∈ ℕ: ∀n > N →
        |xₙ - l| < ε/|λ|
      )
    } →
    
    assert(∀n > N: |λ||xₙ - l| < ε) →
    
    lemma Absolute_Value_Multiplicative() {
      assert(|λ||xₙ - l| = |λ(xₙ - l)|)
    } →
    
    assert(|λ(xₙ - l)| = |λxₙ - λl|) →
    
    assert(∀n > N: |λxₙ - λl| < ε) →
    
    conclude(lim(n→∞) (λxₙ) = λl)
  }
}