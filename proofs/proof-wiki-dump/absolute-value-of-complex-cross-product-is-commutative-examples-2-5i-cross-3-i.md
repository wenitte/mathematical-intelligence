theorem Complex_Cross_Product_Commutative_Example() {
  assert(
    let z₁ = 2 + 5i,
    let z₂ = 3 - i,
    |z₁ × z₂| = |z₂ × z₁|
  )
} ↔

proof Complex_Cross_Product_Commutative_Example() {
  step1: {
    setVar(z₁ = 2 + 5i) ∧
    setVar(z₂ = 3 - i)
  } →
  
  lemma First_Cross_Product() {
    assert(|z₁ × z₂| = |(2 + 5i) × (3 - i)|) →
    assert(|(2 × 3 + 2i - 5i × 3 + 5i × i)|) →
    assert(|6 + 2i - 15i - 5|) →
    assert(|1 - 13i|) →
    assert(√(1² + (-13)²)) →
    assert(17)
  } →

  lemma Second_Cross_Product() {
    assert(|z₂ × z₁| = |(3 - i) × (2 + 5i)|) →
    assert(|(3 × 2 + 3 × 5i - i × 2 - i × 5i)|) →
    assert(|6 + 15i - 2i + 5|) →
    assert(|11 + 13i|) →
    assert(√(11² + 13²)) →
    assert(17)
  } →

  apply(First_Cross_Product()) ∧
  apply(Second_Cross_Product()) →
  assert(|z₁ × z₂| = |z₂ × z₁| = 17)
}