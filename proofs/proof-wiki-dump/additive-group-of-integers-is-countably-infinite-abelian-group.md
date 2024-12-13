theorem AddIntegersAreCountableAbelianGroup() {
  assert(
    ∃G(G = ⟨ℤ,+⟩ ∧ 
    IsAbelianGroup(G) ∧ 
    IsCountablyInfinite(G))
  )
} ↔

proof AddIntegersAreCountableAbelianGroup() {
  lemma IntegersUnderAdditionAbelian() {
    assert(IsAbelianGroup(⟨ℤ,+⟩))
  } →
  
  lemma IntegersAreCountable() {
    assert(∃f: ℤ → ℕ(IsBijective(f)))
  } →
  
  apply(IntegersUnderAdditionAbelian()) →
  apply(IntegersAreCountable()) →
  
  assert(
    IsAbelianGroup(⟨ℤ,+⟩) ∧ 
    IsCountablyInfinite(⟨ℤ,+⟩)
  ) →
  
  conclude(
    ∃G(G = ⟨ℤ,+⟩ ∧ 
    IsAbelianGroup(G) ∧ 
    IsCountablyInfinite(G))
  )
}