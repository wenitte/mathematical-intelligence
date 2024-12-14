theorem Closed_Set_Characterization_By_Open_Cover() {
  let T = ⟨S,τ⟩: TopologicalSpace
  let 𝒰: OpenCover(T)
  let τ_U: SubspaceTopology(U) for U ∈ 𝒰
  let F ⊆ S
  
  assert(
    F is_closed_in T ↔ ∀U ∈ 𝒰 [F ∩ U is_closed_in ⟨U,τ_U⟩]
  )
}

proof Closed_Set_Characterization_By_Open_Cover() {
  // Necessary Condition (⇒)
  implication_left() {
    assume(F is_closed_in T) →
    apply(Closed_Set_In_Topological_Subspace()) →
    conclude(∀U ∈ 𝒰 [F ∩ U is_closed_in ⟨U,τ_U⟩])
  }

  // Sufficient Condition (⇐)
  implication_right() {
    assume(∀U ∈ 𝒰 [F ∩ U is_closed_in ⟨U,τ_U⟩]) →
    assert(∀U ∈ 𝒰 [U ∖ (F ∩ U) is_open_in ⟨U,τ_U⟩]) →
    
    lemma Set_Operations() {
      assert(U ∖ (F ∩ U) = U ∖ F) →
      assert(U ∖ F = (U ∩ S) ∖ F) →
      assert((U ∩ S) ∖ F = U ∩ (S ∖ F))
    } →
    
    apply(Set_Operations()) →
    assert(∀U ∈ 𝒰 [U ∩ (S ∖ F) is_open_in ⟨U,τ_U⟩]) →
    apply(Characterization_Of_Open_Set_By_Open_Cover()) →
    assert(S ∖ F is_open_in T) →
    conclude(F is_closed_in T)
  }
}