theorem Complex_Addition() {
  assert(
    (1/2)(4 - 3i) + (3/2)(5 + 2i) = 19/2 + 3/2i
  )
} ↔

proof Complex_Addition() {
  setVar(P₁: ℂ, P₂: ℂ, O: ℂ, P: ℂ) →
  assert(P₁ = (1/2)(4 - 3i)) →
  assert(P₂ = (3/2)(5 + 2i)) →
  lemma Geometric_Representation() {
    assert(
      P₁, P₂ represent points in complex plane ∧
      O represents origin point
    )
  } →
  lemma Parallelogram_Construction() {
    assert(
      ∃P: parallelogram(O, P₁, P₂, P) ∧
      OP₁, OP₂ are adjacent sides
    )
  } →
  apply(Geometric_Representation()) →
  apply(Parallelogram_Construction()) →
  lemma Complex_Addition_Geometry() {
    assert(
      sum of two complex numbers geometrically represented by 
      parallelogram diagonal from O to P
    )
  } →
  assert(P represents (19/2 + 3/2i)) →
  assert((1/2)(4 - 3i) + (3/2)(5 + 2i) = 19/2 + 3/2i)
}