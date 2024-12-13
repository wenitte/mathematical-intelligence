theorem EuclideanTopologyBasis() {
  assert(
    let(ℝ: Set) ∧
    let(𝔹: Set) ∧
    def(𝔹 := {(a,b) ∈ ℝ × ℝ | (x ∈ ℝ) ∧ (a < x < b)}) →
    isBasis(𝔹, EuclideanTopology(ℝ))
  )
} ↔

proof EuclideanTopologyBasis() {
  lemma RealLineIsMetric() {
    assert(isMetricSpace(ℝ, d)) →
    where(d(x,y) := |x - y|)
  } →
  
  lemma OpenIntervalIsBall() {
    ∀a,b ∈ ℝ →
    ∃ε > 0, α ∈ ℝ →
    assert(
      (a,b) = Bₑ(α)
    ) →
    where(Bₑ(α) := {x ∈ ℝ | d(x,α) < ε})
  } →
  
  apply(RealLineIsMetric()) →
  apply(OpenIntervalIsBall()) →
  apply(MetricInducesTopology(ℝ, d)) →
  
  assert(
    𝔹 = {(a,b) | a,b ∈ ℝ} →
    isBasis(𝔹, EuclideanTopology(ℝ))
  )
}