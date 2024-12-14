theorem Compact_Element_Characterization() {
  assert(
    ∀L = ⟨S,⪯⟩ [complete_lattice] ∧
    ∀a ∈ S ∧
    (∀A ⊆ S → (a ⪯ sup(A) → ∃F ⊆ A [finite(F)] → a ⪯ sup(F))) →
    (∀I ⊆ S → [ideal(I)] → (a ⪯ sup(I) → a ∈ I))
  )
} ↔

proof Compact_Element_Characterization() {
  setVar(I: S) →
  assume([ideal(I)] ∧ [a ⪯ sup(I)]) →
  
  lemma Finite_Subset_Exists() {
    assert(
      ∃F ⊆ I → [finite(F)] ∧ [a ⪯ sup(F)]
    )
  } →
  
  apply(Finite_Subset_Exists()) →
  
  lemma Join_Semilattice_Ideal_JSI2() {
    assert(
      [ideal(I)] ∧ [F ⊆ I] ∧ [finite(F)] → sup(F) ∈ I
    )
  } →
  
  lemma Join_Semilattice_Ideal_JSI1() {
    assert(
      [ideal(I)] ∧ [a ⪯ sup(F)] ∧ [sup(F) ∈ I] → a ∈ I
    )
  } →
  
  apply(Join_Semilattice_Ideal_JSI2()) →
  apply(Join_Semilattice_Ideal_JSI1()) →
  
  conclude(
    ∀I ⊆ S → [ideal(I)] → (a ⪯ sup(I) → a ∈ I)
  )
}