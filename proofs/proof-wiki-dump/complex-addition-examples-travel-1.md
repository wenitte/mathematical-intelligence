theorem ComplexTravelDistance() {
  assert(
    ∀P ∈ ℂ, R ∈ ℝ⁺, θ ∈ [0,2π] ⇒
    (Travel(12km,45°) + Travel(20km,120°) + Travel(18km,240°)) 
    ≈ Travel(14.7km,135°49')
  )
} ↔

proof ComplexTravelDistance() {
  setVar(P: ℂ) →
  
  lemma DirectionToArgument() {
    assert(
      Northeast ↔ 45° ∧
      30°WestOfNorth ↔ 120° ∧
      60°SouthOfWest ↔ 240°
    )
  } →

  assert(P = 12cis(45°) + 20cis(120°) + 18cis(240°)) →
  
  assert(P = (12cos(45°) + 20cos(120°) + 18cos(240°)) + 
         i(12sin(45°) + 20sin(120°) + 18sin(240°))) →
  
  lemma TrigValues() {
    assert(
      cos(45°) = √2/2 ∧
      cos(120°) = -1/2 ∧
      cos(240°) = -1/2 ∧
      sin(45°) = √2/2 ∧
      sin(120°) = √3/2 ∧
      sin(240°) = -√3/2
    )
  } →

  apply(TrigValues()) →
  
  assert(P = (6√2 - 19) + i(6√2 + √3)) →
  
  setVar(R: ℝ⁺, θ: ℝ) →
  assert(Rcis(θ) = (6√2 - 19) + i(6√2 + √3)) →
  
  assert(R = √((6√2 - 19)² + (6√2 + √3)²) ≈ 14.7) →
  assert(θ = cos⁻¹((6√2 - 19)/14.7) ≈ 135°49') →
  
  assert(135°49' ↔ 45°49'WestOfNorth)
}