theorem ComplexAdditionTravel() {
  assert(
    ∀path ∈ ComplexPath: [
      path = [
        (150km, 315°),
        (100km, 180°),
        (225km, 30°),
        (323km, 45°)
      ] →
      finalPosition = (490km, 28.7°)
    ]
  )
} ↔

proof ComplexAdditionTravel() {
  setVar(P: ℂ) →
  
  lemma DirectionToComplex() {
    assert(
      southeast = cis(315°) ∧
      west = cis(180°) ∧
      northeast30 = cis(30°) ∧
      northeast = cis(45°)
    )
  } →

  assert(
    P = 150·cis(315°) + 100·cis(180°) + 225·cis(30°) + 323·cis(45°)
  ) →

  lemma TrigForm() {
    assert(
      P = (150cos(315°) + 100cos(180°) + 225cos(30°) + 323cos(45°)) +
          i(150sin(315°) + 100sin(180°) + 225sin(30°) + 323sin(45°))
    )
  } →

  lemma TrigValues() {
    assert(
      cos(315°) = √2/2 ∧
      cos(30°) = √3/2 ∧
      cos(45°) = √2/2 ∧
      sin(315°) = -√2/2 ∧
      sin(30°) = 1/2 ∧
      sin(45°) = √2/2
    )
  } →

  apply(TrigValues()) →
  assert(
    P = (429.33 + 234.83i)
  ) →

  lemma PolarForm() {
    assert(
      |P| = √(429.33² + 234.83²) = 489.35 ∧
      arg(P) = arctan(234.83/429.33) = 28.7°
    )
  } →

  apply(PolarForm()) →
  assert(
    finalPosition = (490km, 28.7°)
  )
}