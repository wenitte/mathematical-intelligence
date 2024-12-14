theorem Measurable_Function_Characterization() {
  let(X: MeasurableSpace, Σ: σ-algebra) →
  let(f: X → ℝ̄) →
  assert(
    equivalent(
      (1): isMeasurable(f),
      (2): ∀α ∈ ℝ → {x ∈ X: f(x) ≤ α} ∈ Σ,
      (2'): ∀α ∈ ℚ → {x ∈ X: f(x) ≤ α} ∈ Σ,
      (3): ∀α ∈ ℝ → {x ∈ X: f(x) < α} ∈ Σ,
      (3'): ∀α ∈ ℚ → {x ∈ X: f(x) < α} ∈ Σ,
      (4): ∀α ∈ ℝ → {x ∈ X: f(x) ≥ α} ∈ Σ,
      (4'): ∀α ∈ ℚ → {x ∈ X: f(x) ≥ α} ∈ Σ,
      (5): ∀α ∈ ℝ → {x ∈ X: f(x) > α} ∈ Σ,
      (5'): ∀α ∈ ℚ → {x ∈ X: f(x) > α} ∈ Σ
    )
  )
}

proof Measurable_Function_Characterization() {
  lemma Generator_Equivalence() {
    assert(
      ∀g ∈ Generator(ℝ̄) →
      (isMeasurable(f) ↔ f⁻¹(g) ∈ Σ)
    )
  } →
  
  lemma Extended_Real_Generators() {
    assert(
      Generator(ℝ̄) = {(-∞,α]: α ∈ ℝ} ∨
      Generator(ℝ̄) = {(-∞,α): α ∈ ℝ} ∨
      Generator(ℝ̄) = {[α,∞): α ∈ ℝ} ∨
      Generator(ℝ̄) = {(α,∞): α ∈ ℝ}
    )
  } →
  
  apply(Generator_Equivalence()) ∧
  apply(Extended_Real_Generators()) →
  
  assert(
    ∀i ∈ {2,2',3,3',4,4',5,5'} →
    (condition(i) ↔ isMeasurable(f))
  )
}