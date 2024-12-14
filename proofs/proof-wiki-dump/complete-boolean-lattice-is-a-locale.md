theorem Complete_Boolean_Lattice_Is_Locale() {
  let B: BooleanLattice
  assert(
    complete(B) ∧ 
    structure(B, ⟨∨, ∧, ¬, ⪯⟩) →
    isLocale(structure(B, ⟨∨, ∧, ⪯⟩))
  )
} ↔

proof Complete_Boolean_Lattice_Is_Locale() {
  let B: BooleanLattice
  assume(
    complete(B) ∧ 
    structure(B, ⟨∨, ∧, ¬, ⪯⟩)
  ) →
  lemma Boolean_Is_Heyting() {
    assert(
      isBooleanLattice(B) →
      isHeytingLattice(structure(B, ⟨∨, ∧, ⪯⟩))
    )
  } →
  apply(Boolean_Is_Heyting()) →
  assert(isHeytingLattice(structure(B, ⟨∨, ∧, ⪯⟩))) →
  lemma Heyting_Complete_Is_Locale() {
    assert(
      isHeytingLattice(structure(B, ⟨∨, ∧, ⪯⟩)) ∧
      complete(B) →
      isLocale(structure(B, ⟨∨, ∧, ⪯⟩))
    )
  } →
  apply(Heyting_Complete_Is_Locale()) →
  assert(isLocale(structure(B, ⟨∨, ∧, ⪯⟩)))
}