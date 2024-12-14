theorem Composite_Continuous_Mappings() {
  let(M₁ := (X₁,d₁): MetricSpace) ∧
  let(M₂ := (X₂,d₂): MetricSpace) ∧
  let(M₃ := (X₃,d₃): MetricSpace) ∧
  let(f: M₁ → M₂) ∧
  let(g: M₂ → M₃) ∧
  assert(
    (isContinuous(f) ∧ isContinuous(g)) →
    isContinuous(g ∘ f)
  )
} ↔

proof Composite_Continuous_Mappings() {
  assume(isContinuous(f) ∧ isContinuous(g)) →
  assert(∀a ∈ X₁: isContinuousAt(f,a)) →
  assert(∀b ∈ X₂: isContinuousAt(g,b)) →
  assert(∀a ∈ X₁: isContinuousAt(g,f(a))) →
  
  lemma Composite_Continuous_At_Point() {
    assert(
      ∀a ∈ X₁:
      (isContinuousAt(f,a) ∧ isContinuousAt(g,f(a))) →
      isContinuousAt(g ∘ f,a)
    )
  } →
  
  apply(Composite_Continuous_At_Point()) →
  assert(∀a ∈ X₁: isContinuousAt(g ∘ f,a)) →
  assert(isContinuous(g ∘ f))
}