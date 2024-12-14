theorem ComplementaryIdempotentOfComplementaryIdempotentIsIdempotent() {
  given(H: HilbertSpace) →
  given(I: IdentityOperator(H)) →
  given(A: IdempotentOperator(H)) →
  given(B: ComplementaryIdempotent(A)) →
  assert(
    ComplementaryIdempotent(B) = A
  )
} ↔

proof ComplementaryIdempotentOfComplementaryIdempotentIsIdempotent() {
  lemma ComplementaryIdempotentExists() {
    assert(
      ∃C: IdempotentOperator(H) ∧ C = ComplementaryIdempotent(B)
    )
  } →
  
  setVar(C: ComplementaryIdempotent(B)) →
  
  assert(C = I - B) by(DefComplementaryIdempotent) →
  assert(C = I - (I - A)) by(SubstB) →
  assert(C = A) by(AlgebraicSimplification) →
  
  conclude(ComplementaryIdempotent(B) = A)
}