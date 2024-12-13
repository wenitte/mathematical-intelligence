theorem ComplexCrossProductCommutativity() {
  assert(
    ∀z₁,z₂ ∈ ℂ ⇒ |z₁ × z₂| = |z₂ × z₁|
  )
} ↔

proof ComplexCrossProductCommutativity() {
  example Part1() {
    setVar(z₁: 2 + 5i) →
    setVar(z₂: 3 - i) →
    compute(|z₁ × z₂|) ↔ 17
  } →

  example Part2() {
    setVar(z₁: 3 - i) →
    setVar(z₂: 2 + 5i) →
    compute(|z₁ × z₂|) ↔ 17
  } →

  conclude() {
    assert(
      |z₁ × z₂| = |z₂ × z₁| 
      where z₁ = 2 + 5i ∧ z₂ = 3 - i
    ) →
    verify(17 = 17)
  }
}