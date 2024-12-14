theorem Ring_Automorphism_Composition() {
  assert(
    let(R: Set) ∧
    let(Ring1: (R, +₁, ∘₁)) ∧
    let(Ring2: (R, +₂, ∘₂)) ∧
    let(Ring3: (R, +₃, ∘₃)) ∧
    let(φ: Ring1 → Ring2) ∧
    let(ψ: Ring2 → Ring3) ∧
    isRingAutomorphism(φ) ∧
    isRingAutomorphism(ψ) ⇒
    isRingAutomorphism(ψ ∘ φ)
  )
} ↔

proof Ring_Automorphism_Composition() {
  define(RingAutomorphism: {
    f: Ring → Ring |
    isRingIsomorphism(f) ∧
    Dom(f) = Cdm(f)
  }) →
  
  assert(Dom(φ) = Cdm(φ)) →
  assert(Dom(ψ) = Cdm(ψ)) →
  
  lemma Composition_Is_Isomorphism() {
    apply(Ring_Isomorphism_Composition_Theorem(φ, ψ)) →
    assert(isRingIsomorphism(ψ ∘ φ))
  } →
  
  assert(Cdm(φ) = Dom(ψ)) →
  assert(Dom(φ) = Cdm(ψ) = R) →
  
  conclude(
    isRingIsomorphism(ψ ∘ φ) ∧
    Dom(ψ ∘ φ) = Cdm(ψ ∘ φ) ⇒
    isRingAutomorphism(ψ ∘ φ)
  )
}