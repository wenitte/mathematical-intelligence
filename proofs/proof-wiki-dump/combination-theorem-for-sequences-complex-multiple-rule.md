theorem ComplexSequenceScalarLimit() {
  assert(
    ∀{zₙ} ∈ ℂℕ ∧ λ ∈ ℂ ∧ (limₙ→∞ zₙ = c) ⇒ 
    (limₙ→∞(λzₙ) = λc)
  )
} ↔

proof ComplexSequenceScalarLimit() {
  setVar(ε > 0) →
  setGoal(∃N ∈ ℕ: ∀n > N: |λzₙ - λc| < ε) →
  
  case λ = 0 {
    assert(λzₙ = 0 ∧ λc = 0) →
    assert(|λzₙ - λc| = 0 < ε) →
    conclude()
  } →
  
  case λ ≠ 0 {
    assert(|λ| > 0) →
    assert(ε/|λ| > 0) →
    
    apply(SequenceConvergence(zₙ, c)) {
      obtain(N ∈ ℕ: ∀n > N: |zₙ - c| < ε/|λ|)
    } →
    
    assert(∀n > N: |λ||zₙ - c| < ε) →
    
    lemma ComplexModulusProduct() {
      assert(|λ||zₙ - c| = |λ(zₙ - c)| = |λzₙ - λc|)
    } →
    
    apply(ComplexModulusProduct()) →
    assert(∀n > N: |λzₙ - λc| < ε) →
    conclude()
  } →
  
  assert(limₙ→∞(λzₙ) = λc)
}