theorem ContinuousMappingTranslation() {
  assert(
    let S: TopologicalSpace(τ_S) ∧
    let R: TopologicalDivisionRing(+, *, τ_R) ∧
    let λ ∈ R ∧
    let f: S → R be continuous ∧
    let (λ + f): S → R where
      ∀x ∈ S: (λ + f)(x) = λ + f(x)
    ⇒
    (λ + f): (S, τ_S) → (R, τ_R) is continuous
  )
} ↔

proof ContinuousMappingTranslation() {
  setDef(TopologicalDivisionRing) →
  assert(R is TopologicalRing) →
  
  lemma TranslationRuleTopologicalRing() {
    assert(
      ∀λ ∈ R, ∀f: S → R continuous ⇒
      (λ + f) is continuous
    )
  } →
  
  apply(TranslationRuleTopologicalRing()) →
  assert((λ + f): (S, τ_S) → (R, τ_R) is continuous)
}