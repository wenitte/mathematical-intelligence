theorem Composite_Continuous_Mappings() {
  assert(
    ∀T₁,T₂,T₃ ∈ {MetricSpace, ℂ, ℝ} ∧
    ∀f: T₁ → T₂, g: T₂ → T₃ ∧
    isContinuous(f) ∧ isContinuous(g) ⇒
    isContinuous(g ∘ f)
  )
} ↔

proof Composite_Continuous_Mappings() {
  lemma Real_Is_Metric() {
    assert(ℝ ∈ MetricSpace)
  } →
  
  lemma Complex_Is_Metric() {
    assert(ℂ ∈ MetricSpace)
  } →
  
  lemma Metric_Topology() {
    assert(
      ∀X,Y ∈ MetricSpace ∧
      ∀h: X → Y ∧
      isContinuous(h) ⇒
      isContinuous(h)
    )
  } →
  
  apply(Real_Is_Metric()) →
  apply(Complex_Is_Metric()) →
  apply(Metric_Topology()) →
  
  assert(
    T₁,T₂,T₃ ∈ MetricSpace ∧
    isContinuous(g ∘ f)
  )
}