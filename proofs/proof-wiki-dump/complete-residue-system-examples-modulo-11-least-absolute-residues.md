theorem CompleteResidueSystem_Mod11() {
  assert(
    let S = {-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5} →
    S forms_complete_residue_system(modulo: 11)
  )
} ↔

proof CompleteResidueSystem_Mod11() {
  lemma CongruenceRelations() {
    assert(
      -5 ≡ 6 (mod 11) ∧
      -4 ≡ 7 (mod 11) ∧
      -3 ≡ 8 (mod 11) ∧
      -2 ≡ 9 (mod 11) ∧
      -1 ≡ 10 (mod 11)
    )
  } →
  
  apply(CongruenceRelations()) →
  
  lemma Equivalence() {
    assert(
      {-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5} ≡
      {6, 7, 8, 9, 10, 0, 1, 2, 3, 4, 5} (mod 11)
    )
  } →
  
  theorem InitialSegment() {
    assert(
      ∀n ∈ ℕ₊ →
      {0, 1, ..., n-1} forms_complete_residue_system(modulo: n)
    )
  } →
  
  apply(Equivalence(), InitialSegment()) →
  assert(
    {-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5} forms_complete_residue_system(modulo: 11)
  )
}