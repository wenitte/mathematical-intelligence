theorem Absolute_Value_Multiplicative() {
  assert(
    ∀x,y ∈ ℝ ⇒ |xy| = |x||y|
  )
}

proof Absolute_Value_Multiplicative() {
  setVar(x,y: ℝ) →
  assert(x = x + 0i ∧ y = y + 0i) →
  
  lemma Complex_Real_Modulus() {
    assert(
      ∀z ∈ ℝ ⇒ |z| = |z + 0i|
    )
  } →
  
  apply(Complex_Real_Modulus()) →
  assert(|x| = |x + 0i| ∧ |y| = |y + 0i|) →
  
  lemma Complex_Modulus_Product() {
    assert(
      ∀a,b ∈ ℂ ⇒ |ab| = |a||b|
    )
  } →
  
  apply(Complex_Modulus_Product()) →
  assert(|x + 0i||y + 0i| = |(x + 0i)(y + 0i)|) →
  assert((x + 0i)(y + 0i) = xy + 0i) →
  apply(Complex_Real_Modulus()) →
  assert(|(xy + 0i)| = |xy|) →
  conclude(|xy| = |x||y|)
}