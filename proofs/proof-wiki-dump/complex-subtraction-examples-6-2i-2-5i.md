theorem Complex_Subtraction_Example() {
  assert(
    (6 - 2i) - (2 - 5i) = 4 + 3i
  )
} ↔

proof Complex_Subtraction_Example() {
  # Algebraic Proof
  assert((6 - 2i) - (2 - 5i)) →
  apply(Complex_Subtraction_Definition) →
  assert((6 - 2i) + (-2 + 5i)) →
  assert((6 + (-2)) + (-2i + 5i)i) →
  assert(4 + 3i) ∧

  # Geometric Proof
  lemma Geometric_Interpretation() {
    setVar(P₁: (6 - 2i) ∈ ℂ) →
    setVar(P₂: (-2 + 5i) ∈ ℂ) →
    setVar(O: origin ∈ ℂ) →
    construct(parallelogram(O, P₁, P₂)) →
    assert(
      parallelogram_sum(P₁, P₂) = 4 + 3i
    )
  } →
  apply(Geometric_Interpretation()) →
  apply(Complex_Addition_Geometric_Interpretation) →
  assert((6 - 2i) - (2 - 5i) = 4 + 3i)
}