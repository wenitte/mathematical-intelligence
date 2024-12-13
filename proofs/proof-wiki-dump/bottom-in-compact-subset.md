theorem Bottom_In_Compact_Subset() {
  assert(
    ∀L(
      (L = (S, ∨, ⪯) ∧ isBoundedBelowJoinSemilattice(L)) →
      (⊥ ∈ K(L))
    )
  )
} ↔

proof Bottom_In_Compact_Subset() {
  setVar(L: Semilattice) →
  assume(L = (S, ∨, ⪯) ∧ isBoundedBelowJoinSemilattice(L)) →
  
  lemma Bottom_Way_Below() {
    assert(⊥ ≪ ⊥)
  } →
  
  apply(Bottom_Way_Below()) →
  
  lemma Way_Below_Implies_Compact() {
    assert(
      ∀x ∈ L(
        (x ≪ x) → isCompact(x)
      )
    )
  } →
  
  apply(Way_Below_Implies_Compact()) →
  assert(isCompact(⊥)) →
  
  lemma Compact_Definition() {
    assert(
      ∀x ∈ L(
        isCompact(x) → x ∈ K(L)
      )
    )
  } →
  
  apply(Compact_Definition()) →
  assert(⊥ ∈ K(L))
}