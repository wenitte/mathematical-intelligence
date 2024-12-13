theorem Empty_Set_Boundary() {
  assert(
    ∀T: TopologicalSpace →
    ∂ₜ∅ = ∅
  )
} ↔

proof Empty_Set_Boundary() {
  setVar(T: TopologicalSpace) →
  
  lemma Boundary_Closure_Intersection() {
    assert(
      ∂ₜ∅ = ∅⁻ ∩ (T\∅⁻)
    )
  } →

  lemma Empty_Set_Closure() {
    assert(
      ∅⁻ = ∅
    )
  } →

  apply(Empty_Set_Closure()) →
  assert(∂ₜ∅ = ∅ ∩ (T\∅)) →

  lemma Empty_Set_Intersection() {
    assert(
      ∀A: Set → (∅ ∩ A = ∅)
    )
  } →

  apply(Empty_Set_Intersection()) →
  assert(∂ₜ∅ = ∅)
}