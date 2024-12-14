theorem Circles_Orthogonal_Condition() {
  assert(
    let(C₁, C₂: Circle) ∧
    let(α₁, β₁, c₁, α₂, β₂, c₂: ℝ) ∧
    C₁.equation = (x² + y² + 2α₁x + 2β₁y + c₁ = 0) ∧
    C₂.equation = (x² + y² + 2α₂x + 2β₂y + c₂ = 0) →
    (C₁ ⊥ C₂) ↔ (2α₁α₂ + 2β₁β₂ = c₁ + c₂)
  )
}

proof Circles_Orthogonal_Condition() {
  setVar(r₁, r₂: ℝ) →
  
  lemma Circle_Radius_Relations() {
    assert(
      c₁ = α₁² + β₁² - r₁² ∧
      c₂ = α₂² + β₂² - r₂²
    )
  } →

  lemma Orthogonal_Centers_Distance() {
    assert(
      (C₁ ⊥ C₂) → ((α₁ - α₂)² + (β₁ - β₂)² = r₁² + r₂²)
    )
  } →

  apply(Orthogonal_Centers_Distance()) →
  assert(α₁² + α₂² - 2α₁α₂ + β₁² + β₂² - 2β₁β₂ = r₁² + r₂²) →
  
  apply(Circle_Radius_Relations()) →
  assert(
    2α₁α₂ + 2β₁β₂ = (α₁² + β₁² - r₁²) + (α₂² + β₂² - r₂²)
  ) →
  
  assert(2α₁α₂ + 2β₁β₂ = c₁ + c₂)
}