theorem Complex_Addition_Example() {
  assert(
    (3 + 4i) + (5 + 2i) = 8 + 6i
  )
} ↔

proof Complex_Addition_Example() {
  setVar(P₁: ℂ, P₂: ℂ, P: ℂ) →
  assert(P₁ = 3 + 4i) ∧
  assert(P₂ = 5 + 2i) →
  
  lemma Geometric_Representation() {
    assert(
      P₁, P₂ ∈ Complex_Plane ∧
      OP₁, OP₂ form_adjacent_sides(parallelogram) ∧
      P represents_diagonal(parallelogram)
    )
  } →
  
  lemma Complex_Addition_Geometric() {
    assert(
      ∀z₁,z₂ ∈ ℂ:
      diagonal_point(parallelogram(O,z₁,z₂)) = z₁ + z₂
    )
  } →
  
  apply(Geometric_Representation()) →
  apply(Complex_Addition_Geometric()) →
  
  assert(
    P = P₁ + P₂ ∧
    P = (3 + 4i) + (5 + 2i) ∧
    P = 8 + 6i
  )
}