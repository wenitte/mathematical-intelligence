theorem Complex_Addition_Travel() {
  assert(
    ∃P ∈ ℂ : travel_sequence([
      (150, 315°),
      (100, 180°),
      (225, 30°),
      (323, 45°)
    ]) → P ≈ 490∠28.7°
  )
} ↔

proof Complex_Addition_Travel() {
  setVar(P: ℂ) →
  
  lemma Direction_Arguments() {
    assert(southeast = 315° ∧
           west = 180° ∧
           northeast30 = 30° ∧
           northeast45 = 45°)
  } →

  assert(P = 150cis(315°) + 100cis(180°) + 225cis(30°) + 323cis(45°)) →
  
  assert(P = (150cos(315°) + 100cos(180°) + 225cos(30°) + 323cos(45°)) + 
           i(150sin(315°) + 100sin(180°) + 225sin(30°) + 323sin(45°))) →
  
  apply(TrigValues: {
    cos(315°) = √2/2,
    cos(180°) = -1,
    cos(30°) = √3/2,
    cos(45°) = √2/2,
    sin(315°) = -√2/2,
    sin(180°) = 0,
    sin(30°) = 1/2,
    sin(45°) = √2/2
  }) →
  
  assert(P = (429.33 + 234.83i)) →
  
  setVar(R: ℝ, θ: ℝ) →
  assert(R = √(429.33² + 234.83²) ≈ 490) →
  assert(θ = arctan(234.83/429.33) ≈ 28.7°) →
  
  conclude(P ≈ 490∠28.7°)
}