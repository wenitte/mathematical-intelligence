theorem ContinuousNegationRule() {
  assert(
    let S: TopologicalSpace ∧
    let R: TopologicalRing ∧
    let g: (S → R) ∧ 
    isContinuous(g) ∧
    let -g: (S → R) | ∀x ∈ S: (-g)(x) = -(g(x)) ⇒
    isContinuous(-g)
  )
} ↔

proof ContinuousNegationRule() {
  assert(R = ⟨R, +, *, τ_R⟩) →
  lemma TopologicalRingProperty() {
    assert(⟨R, +, τ_R⟩ isA TopologicalGroup)
  } →
  lemma InverseRuleContinuous() {
    assert(
      let G: TopologicalGroup ∧
      let f: (S → G) ∧
      isContinuous(f) ⇒
      isContinuous(-f)
    )
  } →
  apply(TopologicalRingProperty()) →
  apply(InverseRuleContinuous(), {G ↦ ⟨R, +, τ_R⟩, f ↦ g}) →
  assert(isContinuous(-g))
}