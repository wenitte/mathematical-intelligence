theorem Complete_Semilattice_Duality() {
  let S: Set
  let ⪯: OrderRelation
  assert(
    (isCompleteJoinSemilattice(⟨S,⪯⟩) ↔ isCompleteMeetSemilattice(⟨S,⪯⟩))
  )
} ↔

proof Complete_Semilattice_Duality() {
  setVar(S': SubsetOf(S)) →
  assert(
    isCompleteJoinSemilattice(⟨S,⪯⟩) ↔
    ∀S'⊆S(sup(S')∈S)
  ) →
  
  lemma DualPairs_OrderTheory() {
    assert(
      (sup(S')∈S) ↔ dual(inf(S')∈S)
    )
  } →
  
  apply(DualPairs_OrderTheory()) →
  
  assert(
    ∀S'⊆S(inf(S')∈S) ↔
    isCompleteMeetSemilattice(⟨S,⪯⟩)
  ) →
  
  conclude(
    isCompleteJoinSemilattice(⟨S,⪯⟩) ↔
    isCompleteMeetSemilattice(⟨S,⪯⟩)
  )
}