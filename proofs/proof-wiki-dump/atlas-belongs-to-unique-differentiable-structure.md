theorem Atlas_Unique_Structure(M: LocallyEuclidean, d: ℕ, A: Atlas) {
  assert(
    isLocallyEuclidean(M, d) ∧ isAtlas(A, M) ⇒
    ∃!F: DiffStructure | (A ∈ F)
  )
}

proof Atlas_Unique_Structure() {
  setVar(F = equivClass(A, Compatibility)) →
  
  lemma Compatibility_Equivalence() {
    assert(isEquivalenceRelation(Compatibility))
  } →
  
  assert(A ∈ F) →
  
  lemma Partition_Equivalence() {
    assert(
      isEquivalenceRelation(R) ↔ 
      partitionsSet(equivClasses(R))
    )
  } →
  
  apply(Partition_Equivalence()) →
  assert(F ∈ partitionSet(equivClasses(Compatibility))) →
  
  lemma Partition_Disjoint() {
    assert(
      ∀X,Y ∈ partitionSet | X ≠ Y ⇒ X ∩ Y = ∅
    )
  } →
  
  assert(
    ∀G: DiffStructure | G ≠ F ⇒ A ∉ G
  ) →
  
  conclude(
    ∃!F: DiffStructure | A ∈ F
  )
}