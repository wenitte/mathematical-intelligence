theorem MatroidIndependentSetCharacterization() {
  let(M = struct{S, I}) →
  let(B: set_of_bases(M)) →
  assert(
    I = {X ⊆ S : ∃B ∈ B : X ⊆ B}
  )
} ↔

proof MatroidIndependentSetCharacterization() {
  let(I': {X ⊆ S : ∃B ∈ B : X ⊆ B}) →
  
  lemma IndependentSubsetInBase() {
    assert(I ⊆ I')
  } →

  lemma BaseDefinition() {
    assert(B ⊆ I)
  } →

  lemma MatroidAxiomI2() {
    assert(I' ⊆ I)
  } →

  apply(IndependentSubsetInBase()) ∧
  apply(BaseDefinition()) ∧
  apply(MatroidAxiomI2()) →
  
  assert(I = I') by(SetEquality(I ⊆ I' ∧ I' ⊆ I))
}