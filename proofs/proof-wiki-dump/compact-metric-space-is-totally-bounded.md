theorem Compact_Metric_Space_is_Totally_Bounded() {
  assert(
    ∀M(M = ⟨A,d⟩ ∧ isMetricSpace(M) ∧ isCompact(M)) ⇒ isTotallyBounded(M)
  )
} ↔

proof Compact_Metric_Space_is_Totally_Bounded() {
  setVar(M: MetricSpace) →
  assume(M = ⟨A,d⟩ ∧ isCompact(M)) →
  
  letVar(ε > 0) →
  
  assert(∀x ∈ A: Bₑ(x) = {y ∈ A: d(x,y) < ε}) →
  assert({Bₑ(x): x ∈ A} isOpenCover(A)) →
  
  lemma Compactness_Definition() {
    assert(isCompact(M) ⇒ ∀C(isOpenCover(C) ⇒ ∃F ⊆ C: isFinite(F) ∧ F isOpenCover(A)))
  } →
  
  apply(Compactness_Definition()) →
  
  conclude(∃{x₀,...,xₙ} ⊆ A: A = ⋃ᵢ₌₀ⁿ Bₑ(xᵢ)) →
  
  assert(∀ε > 0: ∃{x₀,...,xₙ} ⊆ A: A = ⋃ᵢ₌₀ⁿ Bₑ(xᵢ)) →
  conclude(isTotallyBounded(M))
}