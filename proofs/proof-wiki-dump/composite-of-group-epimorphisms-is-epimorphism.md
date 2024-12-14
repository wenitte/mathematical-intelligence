theorem CompositeEpimorphisms() {
  assert(
    ∀G₁,G₂,G₃: Group ∧
    ∀φ: G₁ → G₂ ∧
    ∀ψ: G₂ → G₃ ∧
    isEpimorphism(φ) ∧
    isEpimorphism(ψ) ⇒
    isEpimorphism(ψ ∘ φ)
  )
} ↔

proof CompositeEpimorphisms() {
  setDef(isEpimorphism(f) ↔ isHomomorphism(f) ∧ isSurjective(f)) →
  
  lemma HomomorphismComposition() {
    assert(
      isHomomorphism(φ) ∧
      isHomomorphism(ψ) ⇒
      isHomomorphism(ψ ∘ φ)
    )
  } →
  
  lemma SurjectionComposition() {
    assert(
      isSurjective(φ) ∧
      isSurjective(ψ) ⇒
      isSurjective(ψ ∘ φ)
    )
  } →
  
  apply(HomomorphismComposition()) →
  apply(SurjectionComposition()) →
  
  assert(
    isHomomorphism(ψ ∘ φ) ∧
    isSurjective(ψ ∘ φ) ⇒
    isEpimorphism(ψ ∘ φ)
  )
}