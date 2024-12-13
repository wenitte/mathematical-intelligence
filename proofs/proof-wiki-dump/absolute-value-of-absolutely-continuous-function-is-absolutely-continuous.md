theorem AbsoluteValueAbsolutelyContinuous() {
  assert(
    ∀I ⊆ ℝ, ∀f: I → ℝ ⇒
    (isInterval(I) ∧ isAbsolutelyContinuous(f)) →
    isAbsolutelyContinuous(|f|)
  )
} ↔

proof AbsoluteValueAbsolutelyContinuous() {
  setVar(I: ℝ, f: I → ℝ) →
  setVar(ε: ℝ, ε > 0) →
  
  lemma AbsContinuityDelta() {
    assert(
      ∃δ > 0 ⇒ ∀{[a₁,b₁],...,[aₙ,bₙ]} ⊆ I ∧
      (∑ᵢ₌₁ⁿ(bᵢ - aᵢ) < δ) →
      (∑ᵢ₌₁ⁿ|f(bᵢ) - f(aᵢ)| < ε)
    )
  } →

  lemma ReverseTriangleInequality() {
    assert(
      ∀i ∈ [1,n] ⇒
      |f(bᵢ) - f(aᵢ)| ≥ ||f(bᵢ)| - |f(aᵢ)||
    )
  } →

  apply(ReverseTriangleInequality()) →
  assert(
    ∑ᵢ₌₁ⁿ||f(bᵢ)| - |f(aᵢ)|| ≤ ∑ᵢ₌₁ⁿ|f(bᵢ) - f(aᵢ)| < ε
  ) →

  assert(
    ∀ε > 0, ∃δ > 0 ⇒
    (∑ᵢ₌₁ⁿ(bᵢ - aᵢ) < δ) →
    (∑ᵢ₌₁ⁿ||f(bᵢ)| - |f(aᵢ)|| < ε)
  ) →

  conclude(
    isAbsolutelyContinuous(|f|)
  )
}