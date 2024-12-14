theorem Complex_Addition_Travel() {
  assert(
    let path₁ = (150, -45°) ∧
    let path₂ = (100, 270°) ∧
    let path₃ = (225, 30°) ∧
    let path₄ = (323, 45°) →
    ∃ final_pos: (490, 28.7°)
  )
} ↔

proof Complex_Addition_Travel() {
  setVar(z₁: ℂ = 150(cos(-45°) + i·sin(-45°))) →
  setVar(z₂: ℂ = 100(cos(270°) + i·sin(270°))) →
  setVar(z₃: ℂ = 225(cos(30°) + i·sin(30°))) →
  setVar(z₄: ℂ = 323(cos(45°) + i·sin(45°))) →
  
  lemma Total_Displacement() {
    assert(z_total = z₁ + z₂ + z₃ + z₄)
  } →
  
  apply(Total_Displacement()) →
  
  lemma Polar_Form() {
    assert(
      |z_total| = 490 ∧
      arg(z_total) = 28.7°
    )
  } →
  
  apply(Polar_Form()) →
  assert(final_pos = (490, 28.7°))
}