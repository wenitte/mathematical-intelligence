theorem Complex_Modulus_Example() {
  assert(
    ∃z₁,z₂ ∈ ℂ | |z₁ - z₂| = 5√2
  )
} ↔

proof Complex_Modulus_Example() {
  setVar(z₁: ℂ = 4 - 3i) →
  setVar(z₂: ℂ = -1 + 2i) →
  
  lemma Difference() {
    assert(z₁ - z₂ = (4 - 3i) - (-1 + 2i)) →
    assert(z₁ - z₂ = 4 - 3i + 1 - 2i) →
    assert(z₁ - z₂ = 5 - 5i)
  } →
  
  lemma Modulus_Calculation() {
    assert(|z₁ - z₂| = |5 - 5i|) →
    assert(|5 - 5i| = √((5)² + (-5)²)) →
    assert(|5 - 5i| = √(25 + 25)) →
    assert(|5 - 5i| = √50) →
    assert(|5 - 5i| = 5√2)
  } →
  
  apply(Difference()) →
  apply(Modulus_Calculation()) →
  assert(|z₁ - z₂| = 5√2)
}