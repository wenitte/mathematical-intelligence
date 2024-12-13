theorem AuxiliaryAngleExample() {
  assert(
    ∀x ∈ ℝ: (3cos(x) - 2sin(x) = 1) ⇒ 
    (x = 40°20' ∨ x = 252°24') when x ∈ [0°, 360°]
  )
}

proof AuxiliaryAngleExample() {
  lemma MultipleOfSineCosine() {
    assert(
      ∀p,q,x ∈ ℝ: p⋅sin(x) + q⋅cos(x) = √(p² + q²)⋅cos(x + arctan(-p/q))
    )
  } →
  
  setVar(p := -2) →
  setVar(q := 3) →
  setVar(α := arctan(2/3)) →
  
  apply(MultipleOfSineCosine()) →
  assert(3cos(x) - 2sin(x) = √13⋅cos(x + α)) →
  assert(√13⋅cos(x + α) = 1) →
  assert(cos(x + α) = 1/√13) →
  assert(1/√13 ≈ 0.2773) →
  
  setVar(θ₁ := 73°54') →
  setVar(θ₂ := 286°24') →
  assert(cos⁻¹(1/√13) = θ₁ ∨ cos⁻¹(1/√13) = θ₂) →
  
  assert(x + α = θ₁ ∨ x + α = θ₂) →
  assert(α = 33°42') →
  
  assert(x = θ₁ - α ∨ x = θ₂ - α) →
  assert(x = 40°20' ∨ x = 252°24')
}