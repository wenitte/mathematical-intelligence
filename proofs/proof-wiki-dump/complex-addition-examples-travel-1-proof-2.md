theorem Complex_Travel_Distance() {
  assert(
    ∀p₁,p₂,p₃ ∈ ℂ where
    p₁ = 12(cos(45°) + isin(45°)) ∧
    p₂ = 20(cos(60°) + isin(60°)) ∧
    p₃ = 18(cos(240°) + isin(240°)) →
    p₁ + p₂ + p₃ = 14.7(cos(134.183°) + isin(134.183°))
  )
} ↔

proof Complex_Travel_Distance() {
  setVar(p₁,p₂,p₃: ℂ) →
  
  lemma Northeast_Vector() {
    assert(
      12km at 45° = 12(cos(45°) + isin(45°))
    )
  } →
  
  lemma Almost_North_Vector() {
    assert(
      20km at 60° = 20(cos(60°) + isin(60°))
    )
  } →
  
  lemma Southwest_Vector() {
    assert(
      18km at 240° = 18(cos(240°) + isin(240°))
    )
  } →
  
  apply(Vector_Addition) {
    resultant = p₁ + p₂ + p₃
  } →
  
  lemma Magnitude_Calculation() {
    assert(
      |resultant| = 14.7
    )
  } →
  
  lemma Angle_Calculation() {
    assert(
      arg(resultant) = 134.183°
    )
  } →
  
  assert(
    resultant = 14.7(cos(134.183°) + isin(134.183°))
  )
}