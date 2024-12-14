theorem Composition_Ring_Isomorphisms() {
  let(R1: Ring(+₁,∘₁), R2: Ring(+₂,∘₂), R3: Ring(+₃,∘₃)) →
  let(φ: Isomorphism(R1 → R2)) →
  let(ψ: Isomorphism(R2 → R3)) →
  assert(
    ψ ∘ φ ∈ Isomorphism(R1 → R3)
  )
} ↔

proof Composition_Ring_Isomorphisms() {
  lemma Ring_Isomorphism_Definition() {
    assert(
      ∀f: Function, f ∈ Isomorphism ↔ 
      (f ∈ Homomorphism ∧ f ∈ Bijection)
    )
  } →
  
  lemma Ring_Homomorphism_Composition() {
    assert(
      ∀f,g: Homomorphism →
      g ∘ f ∈ Homomorphism
    )
  } →
  
  lemma Bijection_Composition() {
    assert(
      ∀f,g: Bijection →
      g ∘ f ∈ Bijection
    )
  } →
  
  apply(Ring_Homomorphism_Composition(φ,ψ)) →
  assert(ψ ∘ φ ∈ Homomorphism) →
  
  apply(Bijection_Composition(φ,ψ)) →
  assert(ψ ∘ φ ∈ Bijection) →
  
  apply(Ring_Isomorphism_Definition()) →
  assert(ψ ∘ φ ∈ Isomorphism(R1 → R3))
}