theorem Composition_Ring_Monomorphisms() {
  let(R1 = ⟨R₁,+₁,∘₁⟩: Ring) ∧
  let(R2 = ⟨R₂,+₂,∘₂⟩: Ring) ∧
  let(R3 = ⟨R₃,+₃,∘₃⟩: Ring) ∧
  let(φ: R1 → R2: RingMonomorphism) ∧
  let(ψ: R2 → R3: RingMonomorphism) →
  assert(
    (ψ ∘ φ): RingMonomorphism
  )
} ↔

proof Composition_Ring_Monomorphisms() {
  define(RingMonomorphism := RingHomomorphism ∧ Injection) →
  
  lemma Ring_Homo_Composition() {
    assert(
      φ: RingHomomorphism ∧
      ψ: RingHomomorphism →
      (ψ ∘ φ): RingHomomorphism
    )
  } →

  lemma Injection_Composition() {
    assert(
      φ: Injection ∧
      ψ: Injection →
      (ψ ∘ φ): Injection
    )
  } →

  apply(Ring_Homo_Composition()) →
  apply(Injection_Composition()) →
  assert((ψ ∘ φ): RingHomomorphism ∧ (ψ ∘ φ): Injection) →
  conclude((ψ ∘ φ): RingMonomorphism)
}