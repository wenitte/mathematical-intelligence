theorem Bases_Equal_Cardinality() {
  assert(
    ∀K: DivisionRing ∧
    ∀G: VectorSpace(K) ∧
    isFinitelyGenerated(G) ⇒
    ∀B₁,B₂: Basis(G) →
    (isFinite(B₁) ∧ isFinite(B₂) ∧ |B₁| = |B₂|)
  )
} ↔

proof Bases_Equal_Cardinality() {
  setVar(K: DivisionRing) →
  setVar(G: VectorSpace(K)) →
  assume(isFinitelyGenerated(G)) →
  setVar(B₁,B₂: Basis(G)) →
  
  lemma Basis_Properties() {
    assert(
      ∀B: Basis(G) ⇒
      (isLinearlyIndependent(B) ∧ isGenerator(B))
    )
  } →
  
  lemma Size_Independent_Subset() {
    assert(
      isFinitelyGenerated(G) ∧
      isLinearlyIndependent(B₁) ∧
      isLinearlyIndependent(B₂) ⇒
      |B₁| = |B₂|
    )
  } →
  
  apply(Basis_Properties()) →
  apply(Size_Independent_Subset()) →
  assert(isFinite(B₁) ∧ isFinite(B₂) ∧ |B₁| = |B₂|)
}