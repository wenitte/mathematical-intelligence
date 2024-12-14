theorem Complex_Addition_Example() {
  assert(
    (3 + 4i) + (5 + 2i) = 8 + 6i
  )
} ↔

proof Complex_Addition_Example_Algebraic() {
  assert((3 + 4i) + (5 + 2i)) →
  apply(Complex_Addition_Definition) →
  assert((3 + 5) + (4 + 2)i) →
  assert(8 + 6i)
} ∧

proof Complex_Addition_Example_Geometric() {
  setVar(P₁: ℂ, P₂: ℂ, P: ℂ) →
  assert(P₁ = 3 + 4i) →
  assert(P₂ = 5 + 2i) →
  lemma Parallelogram_Construction() {
    assert(
      ∃ parallelogram[O,P₁,P,P₂] ∈ ℂ-plane ∧
      O = 0 + 0i
    )
  } →
  apply(Complex_Addition_Geometric_Interpretation) →
  assert(P = P₁ + P₂) →
  assert(P = (3 + 4i) + (5 + 2i)) →
  assert(P = 8 + 6i)
}