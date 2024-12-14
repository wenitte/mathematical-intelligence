theorem Complex_Travel_Distance() {
  assert(
    ∀path ∈ ℂ: [
      path = 12∠45° + 20∠120° + 18∠240° →
      |path| ≈ 14.7 ∧ arg(path) ≈ 135°49'
    ]
  )
} ↔

proof Complex_Travel_Distance() {
  setVar(P: ℂ) →
  
  lemma Direction_Arguments() {
    assert(
      northeast = 45° ∧
      (30° west of north) = 120° ∧
      (60° south of west) = 240°
    )
  } →

  assert(
    P = 12 cis(45°) + 20 cis(120°) + 18 cis(240°)
  ) →

  assert(
    P = [12cos(45°) + 20cos(120°) + 18cos(240°)] + 
        i[12sin(45°) + 20sin(120°) + 18sin(240°)]
  ) →

  lemma Trig_Values() {
    assert(
      cos(45°) = √2/2 ∧
      cos(120°) = -1/2 ∧
      cos(240°) = -1/2 ∧
      sin(45°) = √2/2 ∧
      sin(120°) = √3/2 ∧
      sin(240°) = -√3/2
    )
  } →

  apply(Trig_Values()) →
  
  assert(
    P = (6√2 - 19) + i(6√2 + √3)
  ) →

  setVar(R: ℝ, θ: ℝ) →
  assert(
    R = √[(6√2 - 19)² + (6√2 + √3)²] ≈ 14.7
  ) →
  
  assert(
    θ = arccos((6√2 - 19)/14.7) ≈ 135°49'
  ) →
  
  assert(
    θ relative to north = 45°49' west of north
  )
}