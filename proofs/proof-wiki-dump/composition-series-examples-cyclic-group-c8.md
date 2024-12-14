theorem CompositionSeries_C8() {
  assert(
    ∃!S: CompositionSeries(C_8) ∧
    S = (⟨e⟩ ⊲ C_2 ⊲ C_4 ⊲ C_8)
  )
} ↔

proof CompositionSeries_C8() {
  lemma CyclicIsAbelian() {
    assert(∀n ∈ ℕ ⇒ C_n is_abelian)
  } →
  
  lemma AbelianSubgroupsNormal() {
    assert(
      ∀G: Group ∧ is_abelian(G) ⇒
      ∀H ⊆ G ⇒ is_normal(H, G)
    )
  } →

  apply(CyclicIsAbelian()) →
  apply(AbelianSubgroupsNormal()) →
  
  assert(
    ∀H ⊆ C_8 ⇒ is_normal(H, C_8)
  ) →
  
  assert(
    Subgroups(C_8) = {⟨e⟩, C_2, C_4, C_8}
  ) →
  
  assert(
    ∀i ∈ {2,4,8} ⇒ [C_i : C_{i/2}] is_prime
  ) →
  
  conclude(
    (⟨e⟩ ⊲ C_2 ⊲ C_4 ⊲ C_8) is_unique_composition_series
  )
}