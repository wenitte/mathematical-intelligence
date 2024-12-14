theorem ComplexParallelCrossProduct() {
  assert(
    ∀z₁,z₂ ∈ ℂ, (z₁ ≠ 0 ∧ z₂ ≠ 0) ⇒ 
    (z₁ ∥ z₂ ↔ z₁ × z₂ = 0)
  )
} ↔

proof ComplexParallelCrossProduct() {
  lemma CrossProductDefinition() {
    assert(
      ∀z₁,z₂ ∈ ℂ ⇒ 
      z₁ × z₂ = |z₁||z₂|sin(θ)
    )
  } →

  proofNecessary() {
    setVar(z₁,z₂: ℂ) →
    assume(z₁ ∥ z₂) →
    assert(θ = 0° ∨ θ = 180°) →
    apply(SineZeroStraightAngle()) →
    assert(sin(θ) = 0) →
    apply(CrossProductDefinition()) →
    assert(z₁ × z₂ = |z₁||z₂|·0) →
    assert(z₁ × z₂ = 0)
  } →

  proofSufficient() {
    assume(z₁ × z₂ = 0) →
    apply(CrossProductDefinition()) →
    assert(|z₁||z₂|sin(θ) = 0) →
    assert(z₁ ≠ 0 ∧ z₂ ≠ 0) →
    assert(|z₁| ≠ 0 ∧ |z₂| ≠ 0) →
    assert(sin(θ) = 0) →
    apply(SineMultiplePi()) →
    assert(θ ∈ {0° + 360°k, 180° + 360°k | k ∈ ℤ}) →
    assert(z₁ ∥ z₂)
  } →

  assert(proofNecessary() ∧ proofSufficient())
}