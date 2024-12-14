theorem Complex_Arithmetic() {
  assert(
    let z₁ = 2 + i →
    z₁³ - 3z₁² + 4z₁ - 8 = -7 + 3i
  )
} ↔

proof Complex_Arithmetic() {
  setVar(z₁ = 2 + i) →
  
  lemma Square_Calculation() {
    assert(z₁² = (2 + i)(2 + i)) →
    assert(z₁² = 4 + 4i + i²) →
    apply(i² = -1) →
    assert(z₁² = 3 + 4i)
  } →
  
  lemma Cube_Calculation() {
    assert(z₁³ = z₁² × z₁) →
    apply(Square_Calculation()) →
    assert(z₁³ = (3 + 4i)(2 + i)) →
    assert(z₁³ = 6 + 8i + 3i + 4i²) →
    apply(i² = -1) →
    assert(z₁³ = 2 + 11i)
  } →
  
  assert(z₁³ - 3z₁² + 4z₁ - 8) →
  apply(Cube_Calculation()) →
  apply(Square_Calculation()) →
  assert((2 + 11i) - 3(3 + 4i) + 4(2 + i) - 8) →
  assert((2 + 11i) - (9 + 12i) + (8 + 4i) - 8) →
  assert((2 - 9 + 8 - 8) + (11 - 12 + 4)i) →
  assert(-7 + 3i)
}