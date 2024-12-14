theorem Chebyshev_Distance_Is_Metric() {
  assert(
    ∀x,y ∈ ℝⁿ ⇒
    let d_∞(x,y) := max{|xᵢ - yᵢ| : i ∈ [1..n]} ⇒
    isMetric(d_∞)
  )
} ↔

proof Chebyshev_Distance_Is_Metric() {
  reference(theorem: "Chebyshev_Distance_On_Product_Spaces") →
  setVar(Aᵢ: ℝ, i ∈ [1..n]) →
  assert(ℝⁿ = A₁ × A₂ × ... × Aₙ) →
  assert(
    d_∞ = ChebyshevDistance(A₁ × A₂ × ... × Aₙ)
  ) →
  apply(Chebyshev_Distance_On_Product_Spaces) →
  conclude(isMetric(d_∞))
}