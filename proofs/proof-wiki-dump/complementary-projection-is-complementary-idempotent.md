theorem ComplementaryProjection_IsComplementaryIdempotent() {
  assert(
    ∀H ∈ HilbertSpace ∧
    ∀A ∈ Projection(H) ∧
    B = ComplementaryProjection(A) →
    B = ComplementaryIdempotent(A)
  )
}

proof ComplementaryProjection_IsComplementaryIdempotent() {
  setVar(H: HilbertSpace) →
  setVar(A: Projection(H)) →
  setVar(B: Operator(H)) →
  
  lemma ProjectionIsIdempotent() {
    assert(
      A ∈ Projection(H) → A ∈ Idempotent(H)
    )
  } →

  define(ComplementaryProjection(A)) {
    assert(B = I - A)
  } →

  define(ComplementaryIdempotent(A)) {
    assert(B = I - A)
  } →

  apply(ProjectionIsIdempotent()) →
  apply(ConstructionEquivalence()) →
  
  assert(
    ComplementaryProjection(A) = ComplementaryIdempotent(A)
  )
}