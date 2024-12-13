theorem Empty_Set_Boundary() {
  assert(
    ∀T[Topological_Space] ⇒ ∂ₜ∅ = ∅
  )
} ↔

proof Empty_Set_Boundary_1() {
  setVar(T: Topological_Space) →
  lemma Boundary_Closure_Intersection() {
    assert(∂ₜ∅ = ∅⁻ ∩ (T\∅)⁻)
  } →
  lemma Empty_Set_Closure() {
    assert(∅⁻ = ∅)
  } →
  apply(Boundary_Closure_Intersection()) →
  apply(Empty_Set_Closure()) →
  assert(∂ₜ∅ = ∅ ∩ (T\∅)⁻) →
  apply(Empty_Set_Intersection()) →
  assert(∂ₜ∅ = ∅)
}

proof Empty_Set_Boundary_2() {
  setVar(T: Topological_Space) →
  lemma Empty_Set_Clopen() {
    assert(∅ is_clopen_in T)
  } →
  lemma Clopen_Empty_Boundary() {
    assert(∀S ∈ T, S is_clopen_in T ⇒ ∂ₜS = ∅)
  } →
  apply(Empty_Set_Clopen()) →
  apply(Clopen_Empty_Boundary()) →
  assert(∂ₜ∅ = ∅)
}