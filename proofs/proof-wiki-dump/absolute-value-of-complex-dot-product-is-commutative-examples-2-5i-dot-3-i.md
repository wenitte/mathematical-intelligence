theorem Complex_Dot_Product_Commutative_Example() {
  assert(
    let z₁ = 2 + 5i,
    let z₂ = 3 - i 
    → |z₁ ∘ z₂| = |z₂ ∘ z₁|
  )
} ↔

proof Complex_Dot_Product_Commutative_Example() {
  setVar(z₁: ℂ = 2 + 5i) →
  setVar(z₂: ℂ = 3 - i) →
  
  lemma First_Product() {
    assert(|z₁ ∘ z₂| = |(2 + 5i) ∘ (3 - i)|) →
    assert(|(2 + 5i) ∘ (3 - i)| = 1)
  } →

  lemma Second_Product() {
    assert(|z₂ ∘ z₁| = |(3 - i) ∘ (2 + 5i)|) →
    assert(|(3 - i) ∘ (2 + 5i)| = 1)
  } →
  
  apply(First_Product()) ∧
  apply(Second_Product()) →
  assert(|z₁ ∘ z₂| = 1 = |z₂ ∘ z₁|) →
  conclude(|z₁ ∘ z₂| = |z₂ ∘ z₁|)
}