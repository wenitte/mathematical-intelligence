theorem Canonical_Injection_Is_Monomorphism() {
  given(
    G1: Group(∘₁, e₁),
    G2: Group(∘₂, e₂),
    G1×G2: DirectProduct(G1, G2)
  ) →
  define(
    inj₁: G1 → G1×G2 | ∀x ∈ G1: inj₁(x) = ⟨x, e₂⟩,
    inj₂: G2 → G1×G2 | ∀x ∈ G2: inj₂(x) = ⟨e₁, x⟩
  ) →
  assert(
    isMonomorphism(inj₁) ∧ isMonomorphism(inj₂)
  )
} ↔

proof Canonical_Injection_Is_Monomorphism() {
  import(Canonical_Injection_Is_Injection) →
  assert(isInjective(inj₁) ∧ isInjective(inj₂)) →
  
  // Prove morphism property for inj₁
  setVar(x, y: G1) →
  calc {
    inj₁(x ∘₁ y)
    = ⟨x ∘₁ y, e₂⟩               // by def(inj₁)
    = ⟨x ∘₁ y, e₂ ∘₂ e₂⟩         // by def(Identity)
    = ⟨x, e₂⟩ ∘ ⟨y, e₂⟩         // by def(DirectProduct)
    = inj₁(x) ∘ inj₁(y)          // by def(inj₁)
  } →
  
  assert(isHomomorphism(inj₁)) →
  assert(isMonomorphism(inj₁) ↔ isInjective(inj₁) ∧ isHomomorphism(inj₁)) →
  
  // Same argument applies to inj₂
  lemma Similar_Proof_For_Inj2() {
    assert(isMonomorphism(inj₂))
  } →
  
  assert(isMonomorphism(inj₁) ∧ isMonomorphism(inj₂))
}