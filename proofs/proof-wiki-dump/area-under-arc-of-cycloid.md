theorem CycloidArea() {
  let(C: Cycloid) →
  setDef(C.x = a(θ - sin(θ))) →
  setDef(C.y = a(1 - cos(θ))) →
  assert(
    AreaUnderArc(C) = 3πa²
  )
} ↔

proof CycloidArea() {
  let(A: Area) →
  setDef(A := ∫₀²ᵖᵃ y dx) →
  
  step1() {
    assert(A = ∫₀²ᵖ a(1 - cos(θ))(dx/dθ) dθ)
  } →

  lemma DerivativeX() {
    assert(dx/dθ = a(1 - cos(θ)))
  } →
  
  apply(DerivativeX()) →
  assert(A = a² ∫₀²ᵖ (1 - cos(θ))² dθ) →
  
  step2() {
    assert((1 - cos(θ))² = 1 - 2cos(θ) + cos²(θ))
  } →
  
  step3() {
    assert(cos²(θ) = 1/2 + cos(2θ)/2)
  } →
  
  apply(step2(), step3()) →
  assert(A = a² ∫₀²ᵖ (1 - 2cos(θ) + 1/2 + cos(2θ)/2) dθ) →
  
  step4() {
    assert(∫₀²ᵖ (1 - 2cos(θ) + 1/2 + cos(2θ)/2) dθ = 
           [θ + 2sin(θ) + θ/2 + sin(2θ)/4]₀²ᵖ)
  } →
  
  apply(step4()) →
  assert(A = 3πa²)
}