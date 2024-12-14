theorem Completely_Normal_Space_Preserved_Under_Homeomorphism() {
  let(T_A = ⟨S_A, τ_A⟩: TopologicalSpace) ∧
  let(T_B = ⟨S_B, τ_B⟩: TopologicalSpace) ∧
  let(φ: T_A → T_B: Homeomorphism) →
  assert(
    IsCompletelyNormal(T_A) → IsCompletelyNormal(T_B)
  )
}

proof Completely_Normal_Space_Preserved_Under_Homeomorphism() {
  lemma CompletelyNormal_Characterization() {
    assert(
      ∀T:TopologicalSpace (
        IsCompletelyNormal(T) ↔ (IsT5(T) ∧ IsT1(T))
      )
    )
  } →
  
  lemma T5_Preservation() {
    assert(
      IsT5(T_A) → IsT5(T_B)
    )
  } →
  
  lemma T1_Preservation() {
    assert(
      IsT1(T_A) → IsT1(T_B)
    )
  } →
  
  apply(CompletelyNormal_Characterization()) →
  apply(T5_Preservation()) →
  apply(T1_Preservation()) →
  
  assert(
    IsCompletelyNormal(T_A) →
    (IsT5(T_A) ∧ IsT1(T_A)) →
    (IsT5(T_B) ∧ IsT1(T_B)) →
    IsCompletelyNormal(T_B)
  )
}