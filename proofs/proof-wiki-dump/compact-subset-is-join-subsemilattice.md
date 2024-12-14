theorem CompactSubsetIsJoinSubsemilattice() {
  assert(
    ∀L(isJoinSemilattice(L) ∧ isBoundedBelow(L)) ∧
    ∀K(isCompactSubset(K, L)) ⇒
    isJoinSubsemilattice(K, L) ∧
    (∀x,y ∈ K ⇒ (x ∨ y) ∈ K)
  )
} ↔

proof CompactSubsetIsJoinSubsemilattice() {
  setVar(L: JoinSemilattice) →
  setVar(K: CompactSubset(L)) →
  setVar(x,y: Element(K)) →
  
  lemma CompactElements() {
    assert(
      x,y ∈ K ⇒ isCompact(x) ∧ isCompact(y)
    )
  } →
  
  lemma CompactImpliesWayBelow() {
    assert(
      isCompact(x) ∧ isCompact(y) ⇒ 
      (x ≪ x) ∧ (y ≪ y)
    )
  } →
  
  apply(WayBelowCongruentForJoin) →
  assert((x ≪ x) ∧ (y ≪ y) ⇒ (x ∨ y) ≪ (x ∨ y)) →
  
  lemma WayBelowImpliesCompact() {
    assert(
      (x ∨ y) ≪ (x ∨ y) ⇒ isCompact(x ∨ y)
    )
  } →
  
  apply(CompactSubsetDefinition) →
  assert(isCompact(x ∨ y) ⇒ (x ∨ y) ∈ K)
}