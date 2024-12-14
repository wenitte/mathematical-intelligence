theorem Open_Set_Characterization(T: TopologicalSpace, 𝒰: Set) {
  let(T = ⟨S,τ⟩) →
  assert(
    ∀U ∈ 𝒰: U ∈ τ ∧
    ∀x ∈ S: ∃U ∈ 𝒰: x ∈ U ∧
    ∀U ∈ 𝒰: τ_U = {V ∩ U | V ∈ τ} ∧
    ∀W ⊆ S: (
      W ∈ τ ↔ 
      ∀U ∈ 𝒰: W ∩ U ∈ τ_U
    )
  )
}

proof Open_Set_Characterization() {
  // Necessary condition
  assume(W ∈ τ) →
  assert(∀U ∈ 𝒰: W ∩ U ∈ τ_U) →
  
  // Sufficient condition
  assume(∀U ∈ 𝒰: W ∩ U ∈ τ_U) →
  
  assert(∀U ∈ 𝒰: W ∩ U ∈ τ) by(Open_Set_In_Open_Subspace) →
  
  let(W = W ∩ S) by(Intersection_With_Subset) →
  let(S = ⋃𝒰) by(Open_Cover_Definition) →
  let(W = W ∩ (⋃𝒰)) →
  let(W = ⋃{W ∩ U | U ∈ 𝒰}) by(Intersection_Distributes_Over_Union) →
  
  assert(W ∈ τ) by(Union_Of_Open_Sets) →
  conclude()
}