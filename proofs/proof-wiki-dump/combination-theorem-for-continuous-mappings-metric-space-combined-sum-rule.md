theorem ContinuousCombination() {
  assert(
    ∀M(M = ⟨A,d⟩ ∧ isMetricSpace(M)) ∧
    ∀f,g(f: M → ℝ ∧ g: M → ℝ ∧ isContinuous(f,M) ∧ isContinuous(g,M)) ∧
    ∀λ,μ(λ ∈ ℝ ∧ μ ∈ ℝ) 
    ⇒ 
    isContinuous(λf + μg, M)
  )
} ↔

proof ContinuousCombination() {
  setVar(M: MetricSpace) →
  setVar(f,g: M → ℝ) →
  setVar(λ,μ: ℝ) →
  
  lemma MultipleRule() {
    assert(
      isContinuous(f,M) ∧ λ ∈ ℝ ⇒ isContinuous(λf, M)
    )
  } →
  
  lemma SumRule() {
    assert(
      isContinuous(h₁,M) ∧ isContinuous(h₂,M) ⇒ isContinuous(h₁ + h₂, M)
    )
  } →
  
  apply(MultipleRule(), {f ↦ f, λ ↦ λ}) →
  assert(isContinuous(λf, M)) →
  
  apply(MultipleRule(), {f ↦ g, λ ↦ μ}) →
  assert(isContinuous(μg, M)) →
  
  apply(SumRule(), {h₁ ↦ λf, h₂ ↦ μg}) →
  assert(isContinuous(λf + μg, M))
}