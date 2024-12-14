theorem Completely_Hausdorff_Is_Hausdorff() {
  assert(
    ∀T(T is T_{2½}-space → T is T_2-space)
  )
} ↔

proof Completely_Hausdorff_Is_Hausdorff() {
  setVar(T: TopologicalSpace) →
  setVar(S: Set) →
  setVar(τ: Topology) →
  assert(T = ⟨S,τ⟩) →
  
  assume(T is T_{2½}-space) →
  assert(∀x,y ∈ S(x ≠ y → ∃U,V ∈ τ(
    x ∈ U ∧ y ∈ V ∧ U⁻ ∩ V⁻ = ∅
  ))) →
  
  lemma Set_Subset_Closure() {
    assert(∀W ∈ τ(W ⊆ W⁻))
  } →
  
  apply(Set_Subset_Closure()) →
  assert(∀x,y ∈ S(x ≠ y → ∃U,V ∈ τ(
    x ∈ U ∧ y ∈ V ∧ U ∩ V ⊆ U⁻ ∩ V⁻ = ∅
  ))) →
  
  assert(∀x,y ∈ S(x ≠ y → ∃U,V ∈ τ(
    x ∈ U ∧ y ∈ V ∧ U ∩ V = ∅
  ))) →
  
  conclude(T is T_2-space)
}