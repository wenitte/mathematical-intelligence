theorem Complex_Modulus_Example() {
  assert(
    |7 + 24i| = 25
  )
} ↔

proof Complex_Modulus_Example() {
  setDef(complex_modulus: |a + bi| = √(a² + b²)) →
  
  assert(|7 + 24i| = √(7² + 24²)) →
  
  lemma Square_Values() {
    assert(7² = 49) ∧
    assert(24² = 576) ∧
    assert(49 + 576 = 625)
  } →
  
  apply(Square_Values()) →
  assert(√(7² + 24²) = √625) →
  
  lemma Square_Root() {
    assert(√625 = 25)
  } →
  
  apply(Square_Root()) →
  assert(|7 + 24i| = 25)
}