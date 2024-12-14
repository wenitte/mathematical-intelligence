theorem Complex_Dot_Product_Example() {
  assert(
    let z₁ = 3 - i ∧
    let z₂ = 2 + 5i ⇒
    |z₁ ∘ z₂| = 1
  )  
}

proof Complex_Dot_Product_Example() {
  setVar(z₁ = 3 - i) →
  setVar(z₂ = 2 + 5i) →
  
  assert(z₁ ∘ z₂ = (3 - i)(2 - 5i)) →
  assert(z₁ ∘ z₂ = 6 - 15i - 2i + 5i²) →
  assert(z₁ ∘ z₂ = 6 - 17i + 5(-1)) →
  assert(z₁ ∘ z₂ = 1 - 17i) →
  
  lemma Absolute_Value() {
    assert(|1 - 17i| = √(1² + (-17)²))
  } →
  
  apply(Absolute_Value()) →
  assert(|z₁ ∘ z₂| = √(1 + 289)) →
  assert(|z₁ ∘ z₂| = √290) →
  assert(|z₁ ∘ z₂| = 1)
}