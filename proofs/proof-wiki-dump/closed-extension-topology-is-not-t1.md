theorem Closed_Extension_Not_T1(
  T: TopologicalSpace,
  T_star_p: ClosedExtensionSpace
) {
  assert(
    T = ⟨S,τ⟩ ∧
    T_star_p = ⟨S_star_p, τ_star_p⟩ ∧
    IsClosedExtension(T_star_p, T) ⇒
    ¬IsT1Space(T_star_p)
  )
} ↔

proof Closed_Extension_Not_T1() {
  assert(τ_star_p = {U ∪ {p}: U ∈ τ} ∪ {∅}) →
  
  setVar(x: S_star_p | x ≠ p) →
  setVar(U = {p}) →
  
  assert(U ∈ τ_star_p) →
  assert(p ∈ U ∧ x ∉ U) →
  
  lemma No_Separating_Set() {
    assert(
      ∀V ∈ τ_star_p ⇒
      (x ∈ V ⇒ p ∈ V)
    )
  } →
  
  apply(No_Separating_Set()) →
  
  assert(
    ¬(∃V ∈ τ_star_p: x ∈ V ∧ p ∉ V)
  ) →
  
  apply(T1_Definition | 
    IsT1Space(X) ↔ 
    ∀a,b ∈ X: a ≠ b ⇒ 
    ∃U,V ∈ τ: (a ∈ U ∧ b ∉ U) ∧ (b ∈ V ∧ a ∉ V)
  ) →
  
  assert(¬IsT1Space(T_star_p))
}