theorem Prime_Element_Characterization(T: TopologicalSpace, L: InclusionOrderedSet, Z: Set) {
  let T := struct(S, τ) ∧
  let L := struct(τ, ⪯) ∧
  assert(Z ∈ τ) →
  assert(
    isPrimeElement(Z, L) ↔
    (∀X,Y ∈ τ: (X ∩ Y ⊆ Z → X ⊆ Z ∨ Y ⊆ Z))
  )
}

proof Prime_Element_Characterization() {
  // Sufficient Condition (→)
  assume(isPrimeElement(Z, L)) →
  setVar(X,Y: τ) →
  assume(X ∩ Y ⊆ Z) →
  lemma JoinMeet() {
    assert(X ∩ Y ⊆ Z ↔ X ∧ Y ⪯ Z)
  } →
  apply(JoinMeet()) →
  applyDef(isPrimeElement) →
  assert(X ⪯ Z ∨ Y ⪯ Z) →
  applyDef(InclusionOrderedSet) →
  assert(X ⊆ Z ∨ Y ⊆ Z) →

  // Necessary Condition (←)
  assume(∀X,Y ∈ τ: (X ∩ Y ⊆ Z → X ⊆ Z ∨ Y ⊆ Z)) →
  setVar(X,Y: τ) →
  assume(X ∧ Y ⪯ Z) →
  apply(JoinMeet()) →
  assert(X ∩ Y ⊆ Z) →
  applyAssumption() →
  assert(X ⊆ Z ∨ Y ⊆ Z) →
  applyDef(InclusionOrderedSet) →
  assert(X ⪯ Z ∨ Y ⪯ Z)
}