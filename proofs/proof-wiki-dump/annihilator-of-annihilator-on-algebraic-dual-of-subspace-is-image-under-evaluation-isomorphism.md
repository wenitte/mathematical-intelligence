theorem Annihilator_of_Annihilator() {
  assert(
    ∀G[VectorSpace(dim: n, field: F)] ∧
    ∀G*[AlgebraicDual(G)] ∧
    ∀G**[AlgebraicDual(G*)] ∧
    ∀J[EvalIsomorphism(G → G**)] ∧
    ∀M[Subspace(G, dim: m)] ∧
    ∀M°[Annihilator(M)] →
    M°° = J[M]
  )
} ↔

proof Annihilator_of_Annihilator() {
  lemma DimensionOfAnnihilator() {
    apply(DimensionAnnihilatorTheorem, M°) →
    assert(dim(M°°) = n - (n - m)) →
    assert(dim(M°°) = m)
  } →

  lemma SubsetRelation() {
    assert(J[M] ⊆ M°°)
  } →

  lemma DimensionOfImage() {
    assert(isIsomorphism(J)) →
    assert(dim(J[M]) = dim(M)) →
    assert(dim(J[M]) = m)
  } →
  
  apply(DimensionOfAnnihilator()) ∧
  apply(SubsetRelation()) ∧
  apply(DimensionOfImage()) →
  
  lemma EqualDimensions() {
    assert(dim(J[M]) = dim(M°°)) ∧
    assert(J[M] ⊆ M°°) →
    apply(DimensionProperSubspaceTheorem) →
    assert(J[M] = M°°)
  } →

  assert(J⁻¹[M°°] = M) →
  assert(M°° = J[M])
}