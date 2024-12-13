theorem Lattice_Bottom_Uniqueness() {
  assert(
    ∀L(
      isLattice(L = ⟨S, ∨, ∧, ≼⟩) →
      |{x ∈ S : isBottom(x, L)}| ≤ 1
    )
  )
} ↔

proof Lattice_Bottom_Uniqueness() {
  setStruct(L = ⟨S, ∨, ∧, ≼⟩) →
  lemma Bottom_Definition() {
    assert(
      ∀x ∈ S(
        isBottom(x, L) ↔ isSmallestElement(x, ⟨S, ≼⟩)
      )
    )
  } →
  apply(Bottom_Definition()) →
  apply(Smallest_Element_Uniqueness(⟨S, ≼⟩)) →
  assert(|{x ∈ S : isBottom(x, L)}| ≤ 1)
}