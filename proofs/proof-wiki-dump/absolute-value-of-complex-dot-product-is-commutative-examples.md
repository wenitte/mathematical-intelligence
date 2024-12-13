theorem Complex_Dot_Product_Commutative_Example() {
  assert(
    |z₁ ∘ z₂| = |z₂ ∘ z₁| where z₁ = 2 + 5i, z₂ = 3 - i
  )
}

proof Complex_Dot_Product_Commutative_Example() {
  // First direction
  setVar(z₁ := 2 + 5i) →
  setVar(z₂ := 3 - i) →
  
  lemma First_Product() {
    assert(|z₁ ∘ z₂| = 1)
  } →

  // Second direction
  setVar(w₁ := 3 - i) →
  setVar(w₂ := 2 + 5i) →
  
  lemma Second_Product() {
    assert(|w₁ ∘ w₂| = 1)
  } →

  // Conclusion
  assert(|z₁ ∘ z₂| = 1 ∧ |w₁ ∘ w₂| = 1) →
  assert(|z₁ ∘ z₂| = |z₂ ∘ z₁|)
}