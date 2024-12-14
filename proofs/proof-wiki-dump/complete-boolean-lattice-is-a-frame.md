theorem CompleteBooleanLatticeIsFrame() {
  assert(
    ∀B,∀∨,∀∧,∀¬,∀⪯ [
      isCompleteBooleanLattice(⟨B,∨,∧,¬,⪯⟩) ⇒ 
      isFrame(⟨B,∨,∧,⪯⟩)
    ]
  )
} ↔

proof CompleteBooleanLatticeIsFrame() {
  setStruct(L: ⟨B,∨,∧,¬,⪯⟩) →
  assume(isCompleteBooleanLattice(L)) →
  
  lemma BooleanToHeyting() {
    assert(
      isCompleteBooleanLattice(L) ⇒ 
      isCompleteHeytingLattice(⟨B,∨,∧,⪯⟩)
    )
  } →
  
  lemma HeytingToFrame() {
    assert(
      isCompleteHeytingLattice(⟨B,∨,∧,⪯⟩) ⇒ 
      isFrame(⟨B,∨,∧,⪯⟩)
    )
  } →
  
  apply(BooleanToHeyting()) →
  apply(HeytingToFrame()) →
  conclude(isFrame(⟨B,∨,∧,⪯⟩))
}