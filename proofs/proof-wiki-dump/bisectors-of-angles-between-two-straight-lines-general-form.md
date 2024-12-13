theorem AngleBisectorsGeneralForm() {
  assert(
    ∀L₁,L₂ ∈ Lines(ℝ²) ⇒
    (L₁: l₁x + m₁y + n₁ = 0) ∧ 
    (L₂: l₂x + m₂y + n₂ = 0) ⇒
    AngleBisectors(L₁,L₂) = {
      (l₁x + m₁y + n₁)/√(l₁² + m₁²) = ±(l₂x + m₂y + n₂)/√(l₂² + m₂²)
    }
  )
}

proof AngleBisectorsGeneralForm() {
  setVar(L₁,L₂: Lines(ℝ²)) →
  
  lemma ConvertToNormalForm() {
    assert(
      L₁ ≡ (l₁x + m₁y + n₁)/√(l₁² + m₁²) = 0 ↔
      x cos(α) + y sin(α) = -n₁/√(l₁² + m₁²)
    ) ∧
    assert(
      cos(α) = l₁/√(l₁² + m₁²) ∧
      sin(α) = m₁/√(l₁² + m₁²)
    ) ∧
    assert(
      L₂ ≡ (l₂x + m₂y + n₂)/√(l₂² + m₂²) = 0 ↔
      x cos(β) + y sin(β) = -n₂/√(l₂² + m₂²)
    ) ∧
    assert(
      cos(β) = l₂/√(l₂² + m₂²) ∧
      sin(β) = m₂/√(l₂² + m₂²)
    )
  } →

  apply(NormalFormBisectorTheorem()) →
  assert(
    AngleBisectors(L₁,L₂) = {
      x(cos(α) - cos(β)) + y(sin(α) - sin(β)) = 
        -n₁/√(l₁² + m₁²) + n₂/√(l₂² + m₂²)
      ∧
      x(cos(α) + cos(β)) + y(sin(α) + sin(β)) = 
        -n₁/√(l₁² + m₁²) - n₂/√(l₂² + m₂²)
    }
  ) →

  substitute(NormalFormExpressions()) →
  assert(
    AngleBisectors(L₁,L₂) = {
      (l₁x + m₁y + n₁)/√(l₁² + m₁²) = (l₂x + m₂y + n₂)/√(l₂² + m₂²)
      ∧
      (l₁x + m₁y + n₁)/√(l₁² + m₁²) = -(l₂x + m₂y + n₂)/√(l₂² + m₂²)
    }
  )
}