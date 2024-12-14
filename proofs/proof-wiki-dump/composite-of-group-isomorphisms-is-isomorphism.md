theorem CompositeIsomorphism() {
  assert(
    ∀G₁,G₂,G₃: Group ∧
    ∀φ: G₁ → G₂ ∧ 
    ∀ψ: G₂ → G₃ ∧
    isIsomorphism(φ) ∧
    isIsomorphism(ψ) ⇒
    isIsomorphism(ψ ∘ φ)
  )
} ↔

proof CompositeIsomorphism() {
  lemma IsomorphismDefinition() {
    assert(
      ∀f: GroupMapping ⇒
      (isIsomorphism(f) ↔ isHomomorphism(f) ∧ isBijection(f))
    )
  } →
  
  apply(IsomorphismDefinition()) →
  
  lemma CompositeHomomorphism() {
    assert(
      ∀f,g: GroupMapping ∧
      isHomomorphism(f) ∧
      isHomomorphism(g) ⇒
      isHomomorphism(g ∘ f)
    )
  } →
  
  lemma CompositeBijection() {
    assert(
      ∀f,g: Mapping ∧
      isBijection(f) ∧
      isBijection(g) ⇒
      isBijection(g ∘ f)
    )
  } →
  
  assert(isHomomorphism(ψ ∘ φ)) →
  assert(isBijection(ψ ∘ φ)) →
  assert(isIsomorphism(ψ ∘ φ))
}