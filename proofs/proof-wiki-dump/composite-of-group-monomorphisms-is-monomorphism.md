theorem Composite_Monomorphisms() {
  let(G1: Group, G2: Group, G3: Group) →
  let(φ: Monomorphism(G1 → G2)) →
  let(ψ: Monomorphism(G2 → G3)) →
  assert(
    isMonomorphism(ψ ∘ φ)
  )
} ↔

proof Composite_Monomorphisms() {
  define(Monomorphism(f) ↔ isHomomorphism(f) ∧ isInjective(f)) →
  
  lemma Composition_Preserves_Homomorphism() {
    assert(
      isHomomorphism(φ) ∧ isHomomorphism(ψ) →
      isHomomorphism(ψ ∘ φ)
    )
  } →
  
  lemma Composition_Preserves_Injection() {
    assert(
      isInjective(φ) ∧ isInjective(ψ) →
      isInjective(ψ ∘ φ)
    )
  } →
  
  apply(Composition_Preserves_Homomorphism()) →
  apply(Composition_Preserves_Injection()) →
  
  assert(
    isHomomorphism(ψ ∘ φ) ∧ isInjective(ψ ∘ φ) →
    isMonomorphism(ψ ∘ φ)
  )
}