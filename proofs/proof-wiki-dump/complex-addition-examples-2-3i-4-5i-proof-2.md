theorem Complex_Addition_Example() {
  assert(
    ∀z₁,z₂ ∈ ℂ where z₁ = (2 + 3i) ∧ z₂ = (4 - 5i) ⇒
    z₁ + z₂ = 6 - 2i
  )
} ↔

proof Complex_Addition_Example() {
  setVar(z₁: ℂ = 2 + 3i) →
  setVar(z₂: ℂ = 4 - 5i) →
  setVar(P₁: Point = geometricRepresentation(z₁)) →
  setVar(P₂: Point = geometricRepresentation(z₂)) →
  setVar(O: Point = origin) →
  
  lemma Parallelogram_Construction() {
    assert(
      ∃P: Point where
      parallelogram(O, P₁, P, P₂) ∧
      vector(OP₁) = z₁ ∧
      vector(OP₂) = z₂
    )
  } →
  
  apply(Geometric_Interpretation_Complex_Addition) →
  assert(
    vector(OP) = vector(OP₁) + vector(OP₂) ∧
    vector(OP) = z₁ + z₂ ∧
    z₁ + z₂ = (2 + 3i) + (4 - 5i) = 6 - 2i
  )
}