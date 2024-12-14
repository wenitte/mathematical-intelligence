theorem Closure_Open_Set_Particular_Point_Space() {
  let T = ⟨S, τₚ⟩;
  setVar(T: Topological_Space, Particular_Point_Space);
  let U ∈ τₚ;
  assert(U ≠ ∅) →
  assert(U⁻ = S)
} ↔

proof Closure_Open_Set_Particular_Point_Space() {
  lemma L1: Particular_Point_To_Closed_Extension() {
    assert(T = ⟨S, τₚ⟩ ↔ T is_a Closed_Extension_Of(Discrete_Topology))
  } →
  
  lemma L2: Closure_Open_Set_Closed_Extension() {
    assert(
      ∀X(X is_a Closed_Extension_Space ∧ 
      U ∈ τₚ ∧ 
      U ≠ ∅) → 
      U⁻ = S
    )
  } →
  
  apply(L1) →
  apply(L2) →
  assert(U⁻ = S)
}