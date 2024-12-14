theorem Ring_Epimorphism_Composition() {
  let(R1: Ring(+₁,∘₁)) ∧
  let(R2: Ring(+₂,∘₂)) ∧
  let(R3: Ring(+₃,∘₃)) ∧
  let(φ: RingEpimorphism(R1 → R2)) ∧
  let(ψ: RingEpimorphism(R2 → R3)) →
  assert(
    ∀φ,ψ ⇒ (ψ ∘ φ) ∈ RingEpimorphism(R1 → R3)
  )
} ↔

proof Ring_Epimorphism_Composition() {
  define(RingEpimorphism(f) ↔ RingHomomorphism(f) ∧ Surjection(f)) →
  
  lemma Composition_Properties() {
    assert(RingHomomorphism(ψ ∘ φ)) by(Ring_Homomorphism_Composition) ∧
    assert(Surjection(ψ ∘ φ)) by(Surjection_Composition)
  } →
  
  apply(Composition_Properties()) →
  assert(RingHomomorphism(ψ ∘ φ) ∧ Surjection(ψ ∘ φ)) →
  assert(RingEpimorphism(ψ ∘ φ))
}