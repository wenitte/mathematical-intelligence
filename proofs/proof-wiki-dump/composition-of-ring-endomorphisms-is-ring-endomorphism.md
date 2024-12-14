theorem Ring_Endo_Composition() {
  let(R: Set) →
  let(ring1: Ring(R, +₁, ∘₁)) →
  let(ring2: Ring(R, +₂, ∘₂)) →
  let(ring3: Ring(R, +₃, ∘₃)) →
  let(φ: RingEndo(ring1, ring2)) →
  let(ψ: RingEndo(ring2, ring3)) →
  assert(
    RingEndo(ψ ∘ φ, ring1, ring3)
  )
} ↔

proof Ring_Endo_Composition() {
  lemma Ring_Endo_Definition() {
    assert(
      ∀f: RingEndo(X,X) ↔ (
        Dom(f) = Cdm(f)
      )
    )
  } →
  
  apply(Ring_Endo_Definition()) →
  assert(Dom(φ) = Cdm(φ)) ∧
  assert(Dom(ψ) = Cdm(ψ)) →
  
  lemma Ring_Homo_Composition() {
    assert(
      RingHomo(φ) ∧ RingHomo(ψ) → RingHomo(ψ ∘ φ)
    )
  } →
  
  apply(Ring_Homo_Composition()) →
  assert(RingHomo(ψ ∘ φ)) →
  
  assert(Cdm(φ) = Dom(ψ)) →
  assert(Dom(φ) = Cdm(ψ) = R) →
  
  assert(Dom(ψ ∘ φ) = Cdm(ψ ∘ φ)) →
  conclude(RingEndo(ψ ∘ φ, ring1, ring3))
}