theorem Composite_Continuous_Mappings_Metric() {
  let(M₁ = ⟨X₁,d₁⟩: MetricSpace) ∧
  let(M₂ = ⟨X₂,d₂⟩: MetricSpace) ∧
  let(M₃ = ⟨X₃,d₃⟩: MetricSpace) ∧
  let(f: M₁ → M₂) ∧
  let(g: M₂ → M₃) ∧
  assert(continuous(f) ∧ continuous(g)) →
  assert(continuous(g ∘ f))
} ↔

proof Composite_Continuous_Mappings_Metric() {
  lemma Metric_Induces_Topology() {
    assert(∀M:MetricSpace → ∃T:TopologicalSpace[induced_by(T,M)])
  } →
  apply(Metric_Induces_Topology()) →
  assert(∃T₁,T₂,T₃:TopologicalSpace[
    induced_by(T₁,M₁) ∧
    induced_by(T₂,M₂) ∧
    induced_by(T₃,M₃)
  ]) →
  lemma Composite_Continuous_General() {
    assert(∀f,g[continuous(f) ∧ continuous(g) → continuous(g ∘ f)])
  } →
  apply(Composite_Continuous_General()) →
  assert(continuous(g ∘ f))
}