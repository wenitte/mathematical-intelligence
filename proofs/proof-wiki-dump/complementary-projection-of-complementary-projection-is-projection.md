theorem ComplementaryProjectionOfComplementaryProjection() {
  assert(
    ∀H ∈ HilbertSpace ∧
    ∀I: IdentityOperator(H) ∧
    ∀A: Projection(H) ∧
    let B = ComplementaryProjection(A) ⇒
    ComplementaryProjection(B) = A
  )
} ↔

proof ComplementaryProjectionOfComplementaryProjection() {
  setVar(H: HilbertSpace) →
  setVar(I: IdentityOperator(H)) →
  setVar(A: Projection(H)) →
  setVar(B = I - A) →
  
  lemma ComplementaryIsProjection() {
    assert(
      ComplementaryProjection(B).isWellDefined()
    )
  } →
  
  apply(ComplementaryIsProjection()) →
  
  let C = ComplementaryProjection(B) →
  assert(C = I - B) by def(ComplementaryProjection) →
  assert(C = I - (I - A)) by subst(B) →
  assert(C = A) by algebra →
  
  conclude(ComplementaryProjection(B) = A)
}