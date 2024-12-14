theorem IsoscelesTriangleComplex() {
  assert(
    ∀z₁,z₂,z₃ ∈ ℂ,
    z₁ = 1 + 2i ∧ 
    z₂ = 4 - 2i ∧ 
    z₃ = 1 - 6i ⇒
    IsoscelesTriangle(z₁,z₂,z₃) ∧ 
    Apex(z₂)
  )
}

proof IsoscelesTriangleComplex() {
  setVar(z₁,z₂,z₃: ℂ) →
  setDef(AB := |z₁ - z₂|) →
  setDef(BC := |z₂ - z₃|) →
  setDef(AC := |z₁ - z₃|) →
  
  assert(AB = |(1 + 2i) - (4 - 2i)|) →
  assert(AB = |(-3 + 4i)|) →
  assert(AB = √(3² + 4²)) →
  assert(AB = 5) →
  
  assert(BC = |(4 - 2i) - (1 - 6i)|) →
  assert(BC = |(3 + 4i)|) →
  assert(BC = √(3² + 4²)) →
  assert(BC = 5) →
  
  lemma IsoscelesCondition() {
    assert(
      AB = BC ⇒ IsoscelesTriangle(z₁,z₂,z₃) ∧ Apex(z₂)
    )
  } →
  
  apply(IsoscelesCondition()) →
  
  assert(AC = |(1 + 2i) - (1 - 6i)|) →
  assert(AC = |8i|) →
  assert(AC = 8) →
  
  assert(AC ≠ AB ∧ AC ≠ BC) →
  assert(¬EquilateralTriangle(z₁,z₂,z₃))
}