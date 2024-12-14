theorem Complex_Subtraction_Example() {
  assert(
    (8 - 6i) - (2i - 7) = 15 - 8i
  )
} ↔

proof Complex_Subtraction_Example() {
  assert((8 - 6i) - (2i - 7)) →
  lemma Complex_Subtraction_Definition() {
    assert(
      ∀a,b ∈ ℂ: a - b = a + (-b)
    )
  } →
  apply(Complex_Subtraction_Definition()) →
  assert((8 + (-6i)) + (-(2i - 7))) →
  lemma Complex_Negation() {
    assert(
      ∀z,w ∈ ℂ: -(z + w) = (-z) + (-w)
    )
  } →
  apply(Complex_Negation()) →
  assert((8 + (-(-7))) + ((-6) + (-2))i) →
  lemma Double_Negation() {
    assert(
      ∀x ∈ ℂ: -(-x) = x
    )
  } →
  apply(Double_Negation()) →
  assert((8 + 7) + (-6 - 2)i) →
  lemma Arithmetic_Simplification() {
    assert(
      8 + 7 = 15 ∧ (-6 - 2) = -8
    )
  } →
  apply(Arithmetic_Simplification()) →
  assert(15 - 8i)
}