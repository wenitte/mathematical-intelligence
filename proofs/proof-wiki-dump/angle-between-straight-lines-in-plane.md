theorem Angle_Between_Lines() {
  assert(
    ∀L₁,L₂ ∈ Plane ∧
    (L₁: y = m₁x + c₁) ∧
    (L₂: y = m₂x + c₂) ⇒
    ψ = arctan((m₁ - m₂)/(1 + m₁m₂))
  )
} ↔

proof Angle_Between_Lines() {
  setVar(ψ₁,ψ₂: ℝ) →
  assert(ψ₁ = angle(L₁, x-axis)) →
  assert(ψ₂ = angle(L₂, x-axis)) →
  
  lemma Slope_Definition() {
    assert(
      tan(ψ₁) = m₁ ∧
      tan(ψ₂) = m₂
    )
  } →
  
  lemma Angle_Difference() {
    assert(
      ψ = ψ₂ - ψ₁
    )
  } →
  
  apply(Slope_Definition()) →
  apply(Angle_Difference()) →
  
  assert(
    tan(ψ) = tan(ψ₂ - ψ₁)
  ) →
  
  lemma Tangent_Difference_Formula() {
    assert(
      tan(A - B) = (tan(A) - tan(B))/(1 + tan(A)tan(B))
    )
  } →
  
  apply(Tangent_Difference_Formula()) →
  
  assert(
    tan(ψ) = (tan(ψ₂) - tan(ψ₁))/(1 + tan(ψ₁)tan(ψ₂))
  ) →
  
  assert(
    tan(ψ) = (m₂ - m₁)/(1 + m₁m₂)
  ) →
  
  assert(
    ψ = arctan((m₁ - m₂)/(1 + m₁m₂))
  )
}