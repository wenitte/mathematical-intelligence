theorem Abs_Value_Convergent_Infinite_Product() {
  let K: ValuedField
  let norm: K → ℝ
  let {aₙ: n ∈ ℕ} ⊂ K
  let a ∈ K
  
  assert(
    (∏_{n=1}^∞ aₙ → a) →
    (∏_{n=1}^∞ |aₙ| → |a|)
  )
} ↔

proof Abs_Value_Convergent_Infinite_Product() {
  apply(Absolute_Value_of_Limit_Sequence) →
  assert(|∏_{n=1}^∞ aₙ| = |a|) →
  
  lemma Convergence_Check() {
    assert(∃n₀ ∈ ℕ: ∀n ≥ n₀ → aₙ ≠ 0) →
    assert(∀n ≥ n₀ → |aₙ| ≠ 0)
  } →
  
  setVar(Pₙ: ℕ → K) →
  assert(Pₙ = ∏_{k=n₀}^n aₖ) →
  assert(|Pₙ| = ∏_{k=n₀}^n |aₖ|) →
  
  setVar(b ∈ K∖{0}) →
  assert(Pₙ → b) →
  
  apply(Convergence_Absolute_Value_Sequence) →
  assert(|Pₙ| → |b|) ∧
  assert(|b| ∈ K∖{0}) →
  
  conclude(∏_{n=1}^∞ |aₙ| converges) →
  assert(∏_{n=1}^∞ |aₙ| = |a|)
}