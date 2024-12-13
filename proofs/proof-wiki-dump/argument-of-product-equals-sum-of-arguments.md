theorem ArgumentOfProduct() {
  assert(
    ∀z₁,z₂ ∈ ℂ ⇒ 
    arg(z₁z₂) = arg(z₁) + arg(z₂) + 2kπ where k ∈ {-1,0,1}
  )
}

proof ArgumentOfProduct() {
  setVar(θ₁: ℝ = arg(z₁)) ∧
  setVar(θ₂: ℝ = arg(z₂)) →
  
  assert(z₁ = |z₁|(cos(θ₁) + i·sin(θ₁))) ∧
  assert(z₂ = |z₂|(cos(θ₂) + i·sin(θ₂))) →
  
  lemma ComplexMultiplication() {
    assert(
      z₁z₂ = |z₁||z₂|(
        (cos(θ₁)cos(θ₂) - sin(θ₁)sin(θ₂)) + 
        i(cos(θ₁)sin(θ₂) + sin(θ₁)cos(θ₂))
      )
    )
  } →
  
  apply(TrigIdentities()) →
  assert(z₁z₂ = |z₁||z₂|(cos(θ₁+θ₂) + i·sin(θ₁+θ₂))) →
  
  lemma ArgDefinition() {
    assert(
      cos(arg(z₁z₂)) = cos(θ₁+θ₂) ∧
      sin(arg(z₁z₂)) = sin(θ₁+θ₂)
    )
  } →
  
  case(θ₁ + θ₂ > π) {
    assert(-π < θ₁ + θ₂ - 2π ≤ π) →
    assert(arg(z₁z₂) = θ₁ + θ₂ - 2π) →
    setVar(k = -1)
  } ∨
  
  case(θ₁ + θ₂ ≤ -π) {
    assert(-π < θ₁ + θ₂ + 2π ≤ π) →
    assert(arg(z₁z₂) = θ₁ + θ₂ + 2π) →
    setVar(k = 1)
  } ∨
  
  case(-π < θ₁ + θ₂ ≤ π) {
    assert(arg(z₁z₂) = θ₁ + θ₂) →
    setVar(k = 0)
  } →
  
  conclude(arg(z₁z₂) = arg(z₁) + arg(z₂) + 2kπ)
}