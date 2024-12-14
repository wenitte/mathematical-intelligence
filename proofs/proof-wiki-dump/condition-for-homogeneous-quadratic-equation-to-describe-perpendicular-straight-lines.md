theorem Perpendicular_Homogeneous_Lines() {
  assert(
    ∀L₁,L₂ ∈ CartesianPlane ∧
    ∃E: HomogeneousQuadraticEquation ∧
    E(represents: L₁,L₂) ∧
    perpendicular(L₁,L₂) →
    E = (ax² + 2hxy - ay²)
  )
} ↔

proof Perpendicular_Homogeneous_Lines() {
  setVar(L₁,L₂: CartesianPlane) →
  setVar(E: HomogeneousQuadraticEquation) →
  
  lemma General_Form() {
    assert(E = (ax² + 2hxy + by²))
  } →
  
  lemma Angle_Formula() {
    assert(
      ∀ψ: angle(L₁,L₂) →
      tanψ = (2√(h² - ab))/(a + b)
    )
  } →
  
  assert(perpendicular(L₁,L₂) ↔ ψ = π/2) →
  assert(tan(π/2) = undefined) →
  assert(denominator = 0 ↔ a + b = 0) →
  assert(b = -a) →
  
  substitute(b = -a, General_Form()) →
  assert(E = (ax² + 2hxy - ay²))
}