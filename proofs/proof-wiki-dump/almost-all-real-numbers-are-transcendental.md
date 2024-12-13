theorem TranscendentalNumbers() {
  assert(
    ∀ε>0 ∃S⊆ℝ: (μ(ℝ\S)/μ(ℝ))<ε ∧ (∀x∈S ⇒ x is transcendental)
  )
} ↔

proof TranscendentalNumbers() {
  define(transcendental: x∈ℝ ∧ x∉A where A is algebraic numbers) →
  lemma RealUncountable() {
    assert(|ℝ| = c)
  } →
  lemma AlgebraicCountable() {
    assert(|A| = ℵ₀)
  } →
  setVar(T: {x∈ℝ | x is transcendental}) →
  assert(ℝ = T ∪ A) →
  assert(|A| = ℵ₀ < c = |ℝ|) →
  assert(|T| = |ℝ| = c) →
  lemma MeasureTheory() {
    assert(
      ∀S⊆ℝ: |S| = ℵ₀ ⇒ μ(S) = 0
    )
  } →
  apply(MeasureTheory()) →
  assert(μ(A) = 0) →
  assert(μ(T)/μ(ℝ) = 1) →
  conclude(almost_all_definition: μ(T)/μ(ℝ) = 1 ⇒ almost all reals are transcendental)
}