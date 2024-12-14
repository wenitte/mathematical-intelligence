theorem ComplexPlaneIsMetric() {
  let(ℂ: Set[Complex]) →
  let(d: Function[ℂ × ℂ → ℝ]) →
  let(d(z₁,z₂) = |z₁ - z₂|) →
  assert(
    IsMetric(d,ℂ) ∧ IsMetricSpace(⟨ℂ,d⟩)
  )
} ↔

proof ComplexPlaneIsMetric() {
  setVar(z₁: Complex, z₁ = x₁ + iy₁) →
  setVar(z₂: Complex, z₂ = x₂ + iy₂) →
  
  lemma ModulusExpansion() {
    assert(
      |z₁ - z₂| = √((x₁ - x₂)² + (y₁ - y₂)²)
    )
  } →

  lemma EuclideanMetricEquivalence() {
    assert(
      d(z₁,z₂) = √((x₁ - x₂)² + (y₁ - y₂)²) ↔
      d(z₁,z₂) = dₑ((x₁,y₁),(x₂,y₂))
    )
    where(dₑ: EuclideanMetric[ℝ²])
  } →

  apply(ModulusExpansion()) →
  apply(EuclideanMetricEquivalence()) →
  apply(EuclideanMetricIsMetric()) →
  
  assert(
    IsMetric(d,ℂ) ∧
    IsMetricSpace(⟨ℂ,d⟩) ∧
    IsomorphicTo(⟨ℂ,d⟩, ⟨ℝ²,dₑ⟩)
  )
}