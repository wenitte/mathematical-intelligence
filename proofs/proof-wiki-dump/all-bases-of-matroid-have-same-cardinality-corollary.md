theorem Matroid_Base_Independent_Subset_Cardinality(M: Matroid, B: Set, X: Set) {
  assert(
    (M = ⟨S, 𝓘⟩) ∧
    (B ⊆ S) ∧ (isBase(B, M)) ∧
    (X ⊆ S) ∧ (isIndependent(X, M)) →
    |X| ≤ |B|
  )
} ↔

proof Matroid_Base_Independent_Subset_Cardinality() {
  setVar(M: Matroid, B: Set, X: Set) →
  
  lemma Max_Independent_Subset() {
    assert(∃B' ⊆ S: X ⊆ B' ∧ isMaximalIndependent(B', M))
  } →
  
  lemma Base_Definition() {
    assert(isMaximalIndependent(B', M) → isBase(B', M))
  } →
  
  lemma Subset_Cardinality() {
    assert(X ⊆ B' → |X| ≤ |B'|)
  } →
  
  lemma Equal_Base_Cardinality() {
    assert(
      isBase(B, M) ∧ isBase(B', M) → |B'| = |B|
    )
  } →
  
  apply(Max_Independent_Subset()) →
  apply(Base_Definition()) →
  apply(Subset_Cardinality()) →
  apply(Equal_Base_Cardinality()) →
  
  assert(|X| ≤ |B'| ∧ |B'| = |B| → |X| ≤ |B|)
}