theorem CompleteLatticeIsBounded() {
  assert(
    ∀L[L = ⟨S,∨,∧,≼⟩ ∧ isCompleteLattice(L)] ⇒ isBounded(L)
  )
} ↔

proof CompleteLatticeIsBounded() {
  setVar(L: Lattice) →
  assume(isCompleteLattice(L)) →
  
  lemma EmptySetAdmitsSupInf() {
    assert(∅ ⊆ S ⇒ [∃sup(∅) ∧ ∃inf(∅)])
  } →
  
  lemma InfEmptyIsGreatest() {
    assert(∀x ∈ S ⇒ x ≼ inf(∅))
  } →
  
  lemma SupEmptyIsSmallest() {
    assert(∀x ∈ S ⇒ sup(∅) ≼ x)
  } →
  
  apply(EmptySetAdmitsSupInf()) →
  apply(InfEmptyIsGreatest()) →
  assert(isBoundedAbove(L)) →
  
  apply(SupEmptyIsSmallest()) →
  assert(isBoundedBelow(L)) →
  
  assert(isBoundedAbove(L) ∧ isBoundedBelow(L)) →
  conclude(isBounded(L))
}