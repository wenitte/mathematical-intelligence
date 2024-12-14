theorem Translation_Rule_Continuous_Mappings() {
  assert(
    ∀S[TopologicalSpace(S, τ_S)] ∧
    ∀R[TopologicalRing(R, +, *, τ_R)] ∧
    ∀λ∈R ∧
    ∀f[Continuous(f: S→R)] ∧
    ∀x∈S[map(λ + f, x) = λ + map(f, x)]
    ⇒
    Continuous(λ + f: S→R)
  )
} ↔

proof Translation_Rule_Continuous_Mappings() {
  setVar(S: TopologicalSpace) →
  setVar(R: TopologicalRing) →
  setVar(λ: R) →
  setVar(f: S→R) →
  
  lemma TopologicalRingProperty() {
    assert(
      TopologicalRing(R) ⇒ TopologicalGroup(R, +, τ_R)
    )
  } →
  
  apply(TopologicalRingProperty()) →
  
  lemma MultipleRuleContinuousMapping() {
    assert(
      TopologicalGroup(R, +, τ_R) ∧
      Continuous(f: S→R) ∧
      ∀x∈S[map(λ + f, x) = λ + map(f, x)]
      ⇒
      Continuous(λ + f: S→R)
    )
  } →
  
  apply(MultipleRuleContinuousMapping()) →
  assert(Continuous(λ + f: S→R))
}