theorem Absolute_Value_Measurable() {
  let(X, Σ: MeasurableSpace) →
  let(f: X → ℝ̄, Σ-measurable) →
  assert(
    |f| is Σ-measurable
  )
} ↔

proof Absolute_Value_Measurable() {
  apply(CharacterizationMeasurableFunctions) →
  assert(
    ∀t ∈ ℝ ⇒ {x ∈ X: |f(x)| ≤ t} ∈ Σ
  ) →
  
  case t < 0 {
    assert({x ∈ X: |f(x)| ≤ t} = ∅) →
    apply(PropertiesAlgebraSets) →
    assert({x ∈ X: |f(x)| ≤ t} ∈ Σ)
  } ∧
  
  case t ≥ 0 {
    assert({x ∈ X: |f(x)| ≤ t} = {x ∈ X: -t ≤ f(x) ≤ t}) →
    assert({x ∈ X: -t ≤ f(x) ≤ t} = {x ∈ X: -t ≤ f(x)} ∩ {x ∈ X: f(x) ≤ t}) →
    
    lemma SetsInSigma() {
      assert(f is Σ-measurable) →
      apply(CharacterizationMeasurableFunctions) →
      assert({x ∈ X: -t ≤ f(x)} ∈ Σ ∧ {x ∈ X: f(x) ≤ t} ∈ Σ)
    } →
    
    apply(SetsInSigma()) →
    apply(PropertiesAlgebraSets) →
    assert({x ∈ X: |f(x)| ≤ t} ∈ Σ)
  } →
  
  conclude(∀t ∈ ℝ ⇒ {x ∈ X: |f(x)| ≤ t} ∈ Σ)
}