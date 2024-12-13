theorem Perpendicular_Angle_Bisectors() {
  assert(
    ∀L₁,L₂ ∈ Lines(ℝ²) ∧ L₁ ⊥̸ L₂ ⇒ 
    let B₁,B₂ = angleBisectors(L₁,L₂) in
    B₁ ⊥ B₂
  )
} ↔

proof Perpendicular_Angle_Bisectors() {
  setVar(L₁: x cos(α) + y sin(α) = p) →
  setVar(L₂: x cos(β) + y sin(β) = q) →
  
  lemma Bisector_Equations() {
    assert(
      B₁: x(cos(α) - cos(β)) + y(sin(α) - sin(β)) - (p - q) = 0 ∧
      B₂: x(cos(α) + cos(β)) + y(sin(α) + sin(β)) - (p + q) = 0
    )
  } →

  setVar(l₁: cos(α) - cos(β)) →
  setVar(l₂: cos(α) + cos(β)) →
  setVar(m₁: sin(α) - sin(β)) →
  setVar(m₂: sin(α) + sin(β)) →

  assert(B₁ ⊥ B₂ ↔ l₁l₂ + m₁m₂ = 0) →
  
  calc {
    l₁l₂ + m₁m₂
    = (cos(α) - cos(β))(cos(α) + cos(β)) + (sin(α) - sin(β))(sin(α) + sin(β))
    = (cos²(α) - cos²(β)) + (sin²(α) - sin²(β))
    = (cos²(α) + sin²(α)) - (cos²(β) + sin²(β))
    = 1 - 1
    = 0
  } →

  conclude(B₁ ⊥ B₂)
}