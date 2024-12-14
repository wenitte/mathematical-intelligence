theorem ComplexCrossProductDistributive() {
  assert(
    ∀z₁,z₂,z₃ ∈ ℂ ⇒ 
    z₁ × (z₂ + z₃) = z₁ × z₂ + z₁ × z₃
  )
} ↔

proof ComplexCrossProductDistributive() {
  setVar(z₁,z₂,z₃: ℂ) →
  let(z₁ = x₁ + iy₁) →
  let(z₂ = x₂ + iy₂) →
  let(z₃ = x₃ + iy₃) →
  
  assert(
    z₁ × (z₂ + z₃) = 
    (x₁ + iy₁) × ((x₂ + iy₂) + (x₃ + iy₃))
  ) →
  
  applyRule(ComplexAddition) →
  assert(
    = (x₁ + iy₁) × ((x₂ + x₃) + i(y₂ + y₃))
  ) →
  
  applyRule(ComplexCrossProductDef) →
  assert(
    = x₁(y₂ + y₃) - y₁(x₂ + x₃)
  ) →
  
  applyRule(RealDistributive) →
  assert(
    = x₁y₂ + x₁y₃ - y₁x₂ - y₁x₃
  ) →
  
  applyRule(RealAdditionCommutative) →
  assert(
    = (x₁y₂ - y₁x₂) + (x₁y₃ - y₁x₃)
  ) →
  
  applyRule(ComplexCrossProductDef) →
  assert(
    = z₁ × z₂ + z₁ × z₃
  )
}