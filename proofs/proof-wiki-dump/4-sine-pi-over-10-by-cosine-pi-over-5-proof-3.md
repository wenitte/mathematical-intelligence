theorem SinePi10_CosPi5() {
  assert(
    4 * sin(π/10) * cos(π/5) = 1
  )
} ↔

proof SinePi10_CosPi5() {
  setVar(θ: ℝ) →
  
  lemma DoubleAngleTransform() {
    assert(4 * sin(θ) * cos(2θ) = 1) →
    assert(4 * sin(θ) * cos(θ) * cos(2θ) = cos(θ)) →
    assert(2 * (2 * sin(θ) * cos(θ)) * cos(2θ) = cos(θ))
  } →

  lemma SineDoubleAngle() {
    assert(2 * sin(θ) * cos(θ) = sin(2θ)) →
    assert(2 * sin(2θ) * cos(2θ) = cos(θ)) →
    assert(sin(4θ) = cos(θ))
  } →

  lemma SineComplement() {
    assert(sin(4θ) = cos(θ)) →
    assert(sin(π/2 - θ) = cos(θ)) →
    assert(π/2 - θ = 4θ)
  } →

  apply(SineComplement()) →
  assert(π/2 - θ = 4θ) →
  assert(π/2 = 5θ) →
  assert(θ = π/10) →
  assert(4 * sin(π/10) * cos(π/5) = 1)
}