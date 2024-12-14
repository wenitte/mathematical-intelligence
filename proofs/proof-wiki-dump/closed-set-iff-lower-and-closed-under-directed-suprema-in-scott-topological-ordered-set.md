theorem Closed_Set_iff_Lower_and_Directed_Suprema() {
  let(T: Structure(S, ≼, τ)) →
  assert(isScottTopology(T)) ∧
  assert(isUpComplete(S, ≼)) ∧
  let(A: Subset(S)) →
  assert(
    isClosed(A) ↔ (isLower(A) ∧ isClosedUnderDirectedSuprema(A))
  )
}

proof Closed_Set_iff_Lower_and_Directed_Suprema() {
  // Sufficient Condition (⇒)
  assume(isClosed(A)) →
  assert(complement(S,A) ∈ τ) by def(isClosed) →
  assert(isUpper(complement(S,A)) ∧ isInaccessibleByDirectedSuprema(complement(S,A))) 
    by def(ScottTopology) →
  assert(complement(S,complement(S,A)) = A) by theorem(ComplementOfComplement) →
  assert(isLower(A)) by theorem(ComplementOfUpperIsLower) →
  assert(isClosedUnderDirectedSuprema(A)) 
    by theorem(ComplementOfInaccessibleIsClosedUnderSuprema) →

  // Necessary Condition (⇐)
  assume(isLower(A) ∧ isClosedUnderDirectedSuprema(A)) →
  assert(isUpper(complement(S,A)) ∧ isInaccessibleByDirectedSuprema(complement(S,A)))
    by theorem(ComplementOfLowerIsUpper) ∧
    theorem(ComplementOfClosedUnderSupremaIsInaccessible) →
  assert(complement(S,A) ∈ τ) by def(ScottTopology) →
  assert(isClosed(A)) by def(isClosed)
}