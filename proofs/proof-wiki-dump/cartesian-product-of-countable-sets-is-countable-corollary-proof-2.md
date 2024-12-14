theorem CartesianProduct_Countable_k_Sets() {
  assert(
    ∀k ∈ ℤ, k > 1 ⇒
    ∀S₁,...,Sₖ[isCountable(S₁) ∧ ... ∧ isCountable(Sₖ) ⇒ 
      isCountable(S₁ × S₂ × ... × Sₖ)]
  )
} ↔

proof CartesianProduct_Countable_k_Sets() {
  setVar(k: ℤ, k > 1) →
  
  // Basis case
  lemma Basis() {
    assert(k = 2) →
    apply(CartesianProduct_Two_Countable_Sets) →
    assert(isCountable(S₁ × S₂))
  } →

  // Induction hypothesis
  lemma InductionHypothesis() {
    assert(∃fₖ: S₁ × S₂ × ... × Sₖ → ℕ) ∧
    assert(isInjective(fₖ))
  } →

  // Induction step
  lemma InductionStep() {
    apply(InductionHypothesis) →
    assert(isCountable(S₁ × S₂ × ... × Sₖ)) →
    assert(isCountable(Sₖ₊₁)) →
    
    setVar(T: S₁ × S₂ × ... × Sₖ) →
    assert(∃g: T × Sₖ₊₁ → ℕ × ℕ) ∧
    assert(isInjective(g)) →
    
    assert(∃r: ℕ × ℕ → ℕ) ∧
    assert(isInjective(r)) →
    
    setVar(fₖ₊₁: r ∘ g) →
    assert(isInjective(fₖ₊₁)) →
    assert(fₖ₊₁: S₁ × S₂ × ... × Sₖ × Sₖ₊₁ → ℕ)
  } →

  apply(MathematicalInduction) →
  assert(∀k > 1: isCountable(S₁ × S₂ × ... × Sₖ))
}