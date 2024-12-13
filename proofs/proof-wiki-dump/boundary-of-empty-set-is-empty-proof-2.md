theorem Empty_Set_Boundary() {
  assert(
    ∀T:TopologicalSpace ⇒
    ∂ₜ∅ = ∅
    where ∂ₜ denotes boundary operator in T
  )
} ↔

proof Empty_Set_Boundary() {
  setVar(T: TopologicalSpace) →
  lemma Empty_Set_Clopen() {
    assert(∅ is clopen in T)
  } →
  lemma Clopen_Empty_Boundary() {
    assert(
      ∀S ⊆ T ⇒
      (S is clopen in T ↔ ∂ₜS = ∅)
    )
  } →
  apply(Empty_Set_Clopen()) →
  apply(Clopen_Empty_Boundary()) →
  assert(∂ₜ∅ = ∅)
}