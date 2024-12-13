theorem AbsContinuousIsUniformContinuous() {
  assert(
    ∀I ⊆ ℝ, I is_interval ∧
    ∀f: I → ℝ, f is_absolutely_continuous →
    f is_uniformly_continuous
  )
} ↔

proof AbsContinuousIsUniformContinuous() {
  setVar(ε > 0) →
  lemma AbsContinuityDefinition() {
    assert(
      ∃δ > 0, ∀{[a₁,b₁],...,[aₙ,bₙ]} ⊆ I, disjoint_intervals →
      (∑ᵢ₌₁ⁿ (bᵢ - aᵢ) < δ) →
      (∑ᵢ₌₁ⁿ |f(bᵢ) - f(aᵢ)| < ε)
    )
  } →
  
  specialize(n = 1) →
  assert(
    ∀x,y ∈ I, (
      ((x ≤ y) ∧ (y - x < δ)) ∨
      ((y < x) ∧ (x - y < δ))
    ) →
    |x - y| < δ
  ) →
  
  apply(AbsContinuityDefinition()) →
  assert(
    ∀x,y ∈ I, |x - y| < δ → |f(x) - f(y)| < ε
  ) →
  
  conclude(
    ∀ε > 0, ∃δ > 0, ∀x,y ∈ I,
    |x - y| < δ → |f(x) - f(y)| < ε
  ) →
  
  assert(f is_uniformly_continuous)
}