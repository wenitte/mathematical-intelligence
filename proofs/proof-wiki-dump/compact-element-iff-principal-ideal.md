theorem CompactElementIffPrincipalIdeal() {
  assert(
    ∀L: BoundedBelowJoinSemilattice(L) ∧
    let P = ⟨Ids(L), ⊑⟩ ∧
    let x ∈ Ids(L) →
    (CompactElement(x) ↔ PrincipalIdeal(x))
  )
} ↔

proof CompactElementIffPrincipalIdeal() {
  setDef(P = ContinuousLatticeSubframe(℘(S), ⊆)) →
  
  // Sufficient Direction
  lemma SufficientCondition() {
    assert(CompactElement(x)) →
    ∃F ∈ Fin(S): (
      x = ∩{I ∈ Ids(L): F ⊆ I} ∧ F ⊆ x
    ) →
    setVar(y = supL(F)) →
    assert(
      F ≠ ∅ → y ∈ x ∧
      F = ∅ → y = ⊥L ∧
      F = ∅ → y ∈ x
    ) →
    ∀z ∈ x: (
      assert(F ⊆ y↓) →
      ∀u ∈ F: u ⊑ y →
      assert(y↓ ∈ Ids(L)) →
      assert(z ∈ y↓) →
      assert(z ⊑ y)
    ) →
    conclude(PrincipalIdeal(x))
  } →

  // Necessary Direction
  lemma NecessaryCondition() {
    assert(PrincipalIdeal(x)) →
    ∃y ∈ x: UpperBound(y, x) →
    setVar(F = {y}) →
    assert(F ∈ Fin(S)) →
    assert(F ⊆ x) →
    ∀z: (
      z ∈ x ↔ z ∈ ∩{I ∈ Ids(L): F ⊆ I}
    ) →
    conclude(CompactElement(x))
  } →
  
  apply(SufficientCondition()) ∧
  apply(NecessaryCondition())
}