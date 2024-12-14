theorem ParallelLines_SlopeCondition() {
  assert(
    ∀L₁,L₂ ∈ CartesianPlane ∧
    ∀μ₁,μ₂ ∈ ℝ ∧
    isSlope(L₁,μ₁) ∧ isSlope(L₂,μ₂) ⇒
    (L₁ ∥ L₂ ↔ μ₁ = μ₂)
  )
}

proof ParallelLines_SlopeCondition() {
  setVar(L₁,L₂: CartesianPlane) →
  assert(L₁: y = m₁x + c₁) →
  assert(L₂: y = m₂x + c₂) →
  
  lemma SlopeAngleRelation() {
    setVar(φ₁,φ₂: Angle) →
    assert(φ₁ = angle(L₁,x-axis)) →
    assert(φ₂ = angle(L₂,x-axis)) →
    assert(tan(φ₁) = m₁) →
    assert(tan(φ₂) = m₂)
  } →

  // Necessary condition
  lemma NecessaryCondition() {
    assume(m₁ = m₂) →
    assert(tan(φ₁) = tan(φ₂)) →
    assert(φ₁ = φ₂ + nπ, n ∈ ℤ) →
    apply(EqualAngles_ImpliesParallel()) →
    conclude(L₁ ∥ L₂)
  } →

  // Sufficient condition
  lemma SufficientCondition() {
    assume(L₁ ∥ L₂) →
    assert(φ₁ = φ₂) by Parallel_ImpliesEqualAngles() →
    assert(tan(φ₁) = tan(φ₂)) →
    assert(m₁ = m₂)
  } →

  apply(NecessaryCondition()) ∧
  apply(SufficientCondition()) →
  conclude(L₁ ∥ L₂ ↔ μ₁ = μ₂)
}