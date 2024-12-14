theorem Complex_Cross_Product_Anticommutative_Example() {
  assert(
    ∀z₁,z₂ ∈ ℂ ⇒ (z₁ × z₂ = -(z₂ × z₁))
  )
} ↔

proof Complex_Cross_Product_Anticommutative_Example() {
  lemma First_Product() {
    setVar(z₁: ℂ = 2 + 5i) →
    setVar(z₂: ℂ = 3 - i) →
    assert(z₁ × z₂ = -17)
  } →
  
  lemma Second_Product() {
    setVar(z₁: ℂ = 3 - i) →
    setVar(z₂: ℂ = 2 + 5i) →
    assert(z₁ × z₂ = 17)
  } →
  
  apply(First_Product()) ∧
  apply(Second_Product()) →
  assert((2 + 5i) × (3 - i) = -17) ∧
  assert((3 - i) × (2 + 5i) = 17) →
  assert((2 + 5i) × (3 - i) = -((3 - i) × (2 + 5i))) →
  conclude()
}