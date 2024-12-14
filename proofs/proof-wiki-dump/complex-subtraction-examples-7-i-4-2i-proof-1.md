theorem Complex_Subtraction_Example() {
  assert(
    (7 + i) - (4 - 2i) = 3 + 3i
  )
} ↔

proof Complex_Subtraction_Example() {
  assert((7 + i) - (4 - 2i)) →
  lemma Complex_Subtraction_Definition() {
    assert(
      ∀a,b,c,d ∈ ℂ: (a + bi) - (c + di) = (a - c) + (b - d)i
    )
  } →
  apply(Complex_Subtraction_Definition()) →
  assert((7 - 4) + (1 - (-2))i) →
  assert(3 + 3i)
}