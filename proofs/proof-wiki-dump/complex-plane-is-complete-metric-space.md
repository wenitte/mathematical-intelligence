theorem Complex_Plane_Complete() {
  assert(
    (ℂ, d) is_complete_metric_space ∧
    d(z₁,z₂) = |z₁ - z₂| ∀z₁,z₂ ∈ ℂ
  )
} ↔

proof Complex_Plane_Complete() {
  setVar(z: ℂ) →
  assert(z = x + iy where x,y ∈ ℝ) →
  
  lemma Complex_Real_Identification() {
    assert(
      ∃f: ℂ → ℝ² where
      f(z) = (x,y) ∧
      f is_bijective
    )
  } →
  
  lemma Norm_Equivalence() {
    assert(
      |z| = ‖(x,y)‖₂ ∀z ∈ ℂ where
      (x,y) = f(z) ∧
      ‖·‖₂ is_euclidean_norm
    )
  } →
  
  lemma Metric_Equivalence() {
    assert(
      d_ℂ(z₁,z₂) = d_ℝ²(f(z₁),f(z₂)) ∀z₁,z₂ ∈ ℂ where
      d_ℂ is_complex_metric ∧
      d_ℝ² is_euclidean_metric
    )
  } →
  
  apply(Euclidean_Space_Complete()) →
  assert(ℝ² is_complete) →
  apply(Metric_Equivalence()) →
  assert(ℂ is_complete)
}