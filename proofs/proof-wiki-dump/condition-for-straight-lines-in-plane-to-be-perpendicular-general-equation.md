theorem Perpendicular_Lines_General_Form() {
  let(L₁, L₂: Line) →
  assert(
    L₁ = {(x,y) ∈ ℝ² : l₁x + m₁y + n₁ = 0} ∧
    L₂ = {(x,y) ∈ ℝ² : l₂x + m₂y + n₂ = 0}
  ) →
  assert(
    L₁ ⊥ L₂ ↔ l₁l₂ + m₁m₂ = 0
  )
}

proof Perpendicular_Lines_General_Form() {
  setVar(l₁,m₁,n₁,l₂,m₂,n₂: ℝ) →
  assert(
    L₁ ≡ {y = -(l₁/m₁)x + n₁/m₁} ∧
    L₂ ≡ {y = -(l₂/m₂)x + n₂/m₂}
  ) →
  assert(
    slope(L₁) = -(l₁/m₁) ∧
    slope(L₂) = -(l₂/m₂)
  ) →
  apply(Perpendicular_Lines_Slope_Form()) →
  assert(
    L₁ ⊥ L₂ ↔ -(l₁/m₁) = m₂/l₂
  ) →
  assert(
    -(l₁/m₁) = m₂/l₂ ↔
    -l₁l₂ = m₁m₂ ↔
    l₁l₂ + m₁m₂ = 0
  )
}

corollary Perpendicular_Line_Specific_Form() {
  let(L: Line) →
  assert(
    L = {(x,y) ∈ ℝ² : lx + my + n = 0}
  ) →
  assert(
    ∀L'(Line): L' ⊥ L ↔ ∃k ∈ ℝ[L' = {(x,y) ∈ ℝ² : mx - ly = k}]
  )
}