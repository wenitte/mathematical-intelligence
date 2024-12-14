theorem ComplexCrossProduct_Anticommutative_Example() {
  assert(
    ∀z₁,z₂ ∈ ℂ ⇒ (z₁ × z₂ = -(z₂ × z₁))
    where z₁ = 2 + 5i, z₂ = 3 - i
  )
} ↔

proof ComplexCrossProduct_Anticommutative_Example() {
  setVar(z₁: ℂ = 2 + 5i) →
  setVar(z₂: ℂ = 3 - i) →
  
  lemma FirstProduct() {
    assert(z₁ × z₂ = -17)
  } →
  
  lemma SecondProduct() {
    assert(z₂ × z₁ = 17)
  } →
  
  apply(FirstProduct(), SecondProduct()) →
  assert(z₁ × z₂ = -17) ∧
  assert(z₂ × z₁ = 17) →
  assert(z₁ × z₂ = -(z₂ × z₁)) ∧
  assert(∀z₁,z₂ ∈ ℂ ⇒ (z₁ × z₂ = -(z₂ × z₁)))
}