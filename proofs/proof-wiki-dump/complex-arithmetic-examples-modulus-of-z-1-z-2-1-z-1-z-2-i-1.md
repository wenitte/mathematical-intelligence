theorem Complex_Modulus_Example() {
  assert(
    let z₁ = 1 - i ∧
    let z₂ = -2 + 4i →
    |((z₁ + z₂ + 1)/(z₁ - z₂ + i))| = 3/5
  )
} ↔

proof Complex_Modulus_Example() {
  setVar(z₁ = 1 - i) →
  setVar(z₂ = -2 + 4i) →
  
  assert(|((z₁ + z₂ + 1)/(z₁ - z₂ + i))|) →
  assert(|((1 - i) + (-2 + 4i) + 1)/((1 - i) - (-2 + 4i) + i)|) →
  
  lemma Simplify_Numerator() {
    assert((1 - i) + (-2 + 4i) + 1 = 3i)
  } →
  
  lemma Simplify_Denominator() {
    assert((1 - i) - (-2 + 4i) + i = 3 + 4i)
  } →
  
  apply(Simplify_Numerator()) →
  apply(Simplify_Denominator()) →
  
  assert(|(3i)/(3 + 4i)|) →
  
  lemma Modulus_Division() {
    assert(|a/b| = |a|/|b| for complex numbers a,b)
  } →
  
  apply(Modulus_Division()) →
  assert(|3i|/|3 + 4i|) →
  
  lemma Complex_Modulus() {
    assert(|3i| = 3) ∧
    assert(|3 + 4i| = √(3² + 4²) = 5)
  } →
  
  apply(Complex_Modulus()) →
  assert(3/5)
}