theorem Paracompactness_T3_Lemma_1() {
  assert(
    ∀T(isT3Space(T) ∧ T = ⟨X,τ⟩) ∧
    ∀𝒰(isOpenCover(𝒰,T)) ∧
    ∃𝒱(𝒱 = {V ∈ τ : ∃U ∈ 𝒰(V⁻ ⊆ U)}) →
    isOpenCover(𝒱,T)
  )
} ↔

proof Paracompactness_T3_Lemma_1() {
  setVar(x ∈ X) →
  assert(isOpenCover(𝒰,T) → ∃U ∈ 𝒰(x ∈ U)) →
  
  lemma T3_Characterization() {
    assert(
      isT3Space(T) →
      ∀x∀U(x ∈ U ∧ isOpen(U) →
      ∃V(V ∈ τ ∧ x ∈ V ∧ V⁻ ⊆ U))
    )
  } →
  
  apply(T3_Characterization()) →
  assert(∃V(V ∈ τ ∧ x ∈ V ∧ V⁻ ⊆ U)) →
  assert(V ∈ 𝒱) →
  assert(∀x ∈ X → ∃V ∈ 𝒱(x ∈ V)) →
  assert(isOpenCover(𝒱,T))
}