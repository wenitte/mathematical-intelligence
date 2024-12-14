theorem Composite_Continuous_Mappings_Metric() {
  let(M₁ = ⟨X₁,d₁⟩: MetricSpace) ∧
  let(M₂ = ⟨X₂,d₂⟩: MetricSpace) ∧
  let(M₃ = ⟨X₃,d₃⟩: MetricSpace) ∧
  let(f: M₁ → M₂) ∧
  let(g: M₂ → M₃) ∧
  assert(
    isContinuous(f) ∧ isContinuous(g) ⇒ 
    isContinuous(g ∘ f)
  )
} ↔

proof Composite_Continuous_Mappings_Metric_1() {
  lemma Metric_Induces_Topology() {
    assert(∀M:MetricSpace ⇒ ∃T:Topology(M))
  } →
  apply(Metric_Induces_Topology()) →
  lemma Composite_Continuous_Topological() {
    assert(
      isContinuous(f) ∧ isContinuous(g) ⇒ 
      isContinuous(g ∘ f)
    )
  } →
  apply(Composite_Continuous_Topological())
}

proof Composite_Continuous_Mappings_Metric_2() {
  setVar(a: X₁) →
  assert(isContinuous(f) ↔ ∀a∈X₁[isContinuousAt(f,a)]) →
  assert(isContinuous(g) ↔ ∀b∈X₂[isContinuousAt(g,b)]) →
  assert(∀a∈X₁[isContinuousAt(f,a)] ∧ isContinuousAt(g,f(a))) →
  lemma Composite_Continuous_At_Point() {
    assert(
      isContinuousAt(f,a) ∧ isContinuousAt(g,f(a)) ⇒
      isContinuousAt(g ∘ f,a)
    )
  } →
  apply(Composite_Continuous_At_Point())
}