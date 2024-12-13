theorem AngleBetweenLines() {
  let L₁, L₂: Line
  let E: QuadraticEquation
  assert(
    (E = axˆ2 + byˆ2 + 2hxy + 2gx + 2fy + c = 0) ∧
    (L₁, L₂ ∈ Solutions(E)) ⇒
    (∃ψ: Angle | tan(ψ) = (2√(h² - ab))/(a + b))
  )
} ↔

proof AngleBetweenLines() {
  setVar(L₁', L₂': Line) →
  
  lemma HomogeneousQuadratic() {
    assert(
      ∃L₁', L₂' | 
      (L₁' ∥ L₁) ∧ 
      (L₂' ∥ L₂) ∧
      (L₁', L₂' pass through Origin) ∧
      (L₁', L₂' satisfy axˆ2 + 2hxy + byˆ2 = 0)
    )
  } →
  
  lemma HomogeneousAngle() {
    assert(
      ∀Lines(L₁', L₂') passing through Origin |
      (L₁', L₂' satisfy axˆ2 + 2hxy + byˆ2 = 0) ⇒
      (∃ψ: Angle | tan(ψ) = (2√(h² - ab))/(a + b))
    )
  } →
  
  apply(HomogeneousQuadratic()) →
  apply(HomogeneousAngle()) →
  
  assert(
    (L₁' ∥ L₁) ∧ (L₂' ∥ L₂) ⇒
    (angle(L₁, L₂) = angle(L₁', L₂'))
  ) →
  
  assert(
    tan(angle(L₁, L₂)) = (2√(h² - ab))/(a + b)
  )
}