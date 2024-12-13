theorem Line_Angle_General() {
  assert(
    ∀L₁,L₂: Line | (
      L₁ = {l₁x + m₁y + n₁ = 0} ∧
      L₂ = {l₂x + m₂y + n₂ = 0}
    ) ⇒ 
    tan(ψ) = (l₁m₂ - l₂m₁)/(l₁l₂ + m₁m₂)
    where ψ is angle between L₁,L₂
  )
} ↔

proof Line_Angle_General() {
  setVar(L₁,L₂: Line) →
  
  // Convert to slope-intercept form
  assert(
    L₁ ⇒ y = -(l₁/m₁)x + n₁/m₁ ∧
    L₂ ⇒ y = -(l₂/m₂)x + n₂/m₂
  ) →
  
  // Extract slopes
  assert(
    slope₁ = -(l₁/m₁) ∧
    slope₂ = -(l₂/m₂)
  ) →
  
  // Apply tangent angle formula
  lemma Angle_Between_Lines() {
    assert(
      tan(ψ) = (slope₂ - slope₁)/(1 + slope₁·slope₂)
    )
  } →
  
  // Substitute slopes
  assert(
    tan(ψ) = (-(l₂/m₂) - (-(l₁/m₁)))/(1 + (-(l₁/m₁))·(-(l₂/m₂)))
  ) →
  
  // Simplify
  assert(
    tan(ψ) = ((l₁/m₁) - (l₂/m₂))/(1 + (l₁l₂)/(m₁m₂))
  ) →
  
  // Multiply numerator and denominator by m₁m₂
  assert(
    tan(ψ) = (l₁m₂ - l₂m₁)/(l₁l₂ + m₁m₂)
  )
}