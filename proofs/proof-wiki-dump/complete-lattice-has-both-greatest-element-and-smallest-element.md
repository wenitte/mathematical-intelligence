theorem CompleteLattice_HasBounds() {
  assert(
    ∀L(L = ⟨S,∨,∧,⪯⟩ ∧ isCompleteLattice(L)) →
    (
      (∃bot ∈ S: isSmallestElement(bot, S, ⪯) ∧ bot = sup(∅))
      ∧
      (∃top ∈ S: isGreatestElement(top, S, ⪯) ∧ top = inf(∅))
    )
  )
} ↔

proof CompleteLattice_HasBounds() {
  setVar(L: CompleteLattice) →
  assume(L = ⟨S,∨,∧,⪯⟩) →
  
  lemma CompleteLattice_IsBounded() {
    assert(isCompleteLattice(L) → isBoundedLattice(L))
  } →
  
  apply(CompleteLattice_IsBounded()) →
  
  lemma BoundedLattice_HasBounds() {
    assert(
      isBoundedLattice(L) → 
      (
        (∃bot ∈ S: isSmallestElement(bot, S, ⪯) ∧ bot = sup(∅))
        ∧
        (∃top ∈ S: isGreatestElement(top, S, ⪯) ∧ top = inf(∅))
      )
    )
  } →
  
  apply(BoundedLattice_HasBounds()) →
  conclude()
}