theorem CompactComplementTopology_LocallyConnected() {
  assert(
    ∀T[T = ⟨ℝ,τ⟩ ∧ IsCompactComplementTopology(T)] ⇒
    IsLocallyConnected(T)
  )
} ↔

proof CompactComplementTopology_LocallyConnected() {
  setVar(T: TopologicalSpace) →
  assume(T = ⟨ℝ,τ⟩ ∧ IsCompactComplementTopology(T)) →
  
  lemma CompactComplement_Irreducible() {
    assert(IsIrreducible(T))
  } →
  
  lemma Irreducible_LocallyConnected() {
    assert(∀S[IsIrreducible(S) ⇒ IsLocallyConnected(S)])
  } →
  
  apply(CompactComplement_Irreducible()) →
  apply(Irreducible_LocallyConnected()) →
  
  assert(IsLocallyConnected(T))
}