theorem Closure_Intersection_Not_Equal_Closures_Intersection() {
  assert(
    ∀T(T = ⟨S,τ⟩ ∧ isTopologicalSpace(T)) ∧
    ∀H₁,H₂(H₁ ⊆ S ∧ H₂ ⊆ S) →
    ¬∀T,H₁,H₂((H₁ ∩ H₂)⁻ = H₁⁻ ∩ H₂⁻)
  )
} ↔

proof Closure_Intersection_Not_Equal_Closures_Intersection() {
  lemma Known_Subset() {
    assert((H₁ ∩ H₂)⁻ ⊆ H₁⁻ ∩ H₂⁻)
  } →
  
  counterexample() {
    setSpace(⟨ℝ,τ_d⟩) →
    setVar(H₁: (0,½)) →
    setVar(H₂: (½,1)) →
    
    assert(H₁ ∩ H₂ = ∅) →
    apply(Closure_Empty_Set_Is_Empty()) →
    assert((H₁ ∩ H₂)⁻ = ∅) →
    
    apply(Closure_Open_Real_Interval_Is_Closed()) →
    assert(H₁⁻ = [0,½]) →
    assert(H₂⁻ = [½,1]) →
    
    assert(H₁⁻ ∩ H₂⁻ = {½}) →
    
    conclude(
      (H₁ ∩ H₂)⁻ = ∅ ∧ 
      H₁⁻ ∩ H₂⁻ = {½} →
      (H₁ ∩ H₂)⁻ ≠ H₁⁻ ∩ H₂⁻
    )
  }
}