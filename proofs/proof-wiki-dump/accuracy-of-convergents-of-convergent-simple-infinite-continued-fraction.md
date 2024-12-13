theorem Convergents_Accuracy() {
  assert(
    ∀C = ⟨a₀, a₁, ...⟩ ∈ ℝ[convergent_simple_infinite_fraction] ∧
    ∃x ∈ ℝ[C converges to x] ∧
    ∀n ≥ 0, Cₙ = pₙ/qₙ[nth_convergent] →
    |x - pₙ/qₙ| < 1/(qₙqₙ₊₁)
  )
} ↔

proof Convergents_Accuracy() {
  lemma Cases() {
    assert(
      x ∈ [Cₙ, Cₙ₊₁] ∨ x ∈ [Cₙ₊₁, Cₙ]
    )
  } →
  
  lemma Odd_Case() {
    setVar(n: ℕ, n ≥ 1 ∧ n[odd]) →
    assert(x = lim[k→∞] C₂ₖ) →
    assert(
      ∀k[2k ≥ n+1] →
      Cₙ₊₁ ≤ C₂ₖ < Cₙ
    ) →
    apply(Sequence_Bounds) →
    assert(x ∈ [Cₙ₊₁, Cₙ])
  } →
  
  lemma Even_Case() {
    setVar(n: ℕ, n ≥ 0 ∧ n[even]) →
    assert(x = lim[k→∞] C₂ₖ₊₁) →
    assert(
      ∀k[2k+1 ≥ n+1] →
      Cₙ < C₂ₖ₊₁ ≤ Cₙ₊₁
    ) →
    apply(Sequence_Bounds) →
    assert(x ∈ [Cₙ, Cₙ₊₁])
  } →
  
  apply(Adjacent_Convergents_Difference) →
  apply(Real_Interval_Distance) →
  assert(|x - pₙ/qₙ| < 1/(qₙqₙ₊₁))
}