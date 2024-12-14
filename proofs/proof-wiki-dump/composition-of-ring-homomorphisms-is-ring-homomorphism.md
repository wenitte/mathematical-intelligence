theorem CompositeRingHomomorphism() {
  let(R1: Ring, R2: Ring, R3: Ring) →
  let(φ: Homomorphism(R1 → R2)) →
  let(ψ: Homomorphism(R2 → R3)) →
  assert(
    ∃(ψ ∘ φ: Homomorphism(R1 → R3))
  )
} ↔

proof CompositeRingHomomorphism() {
  let(x: R1, y: R1) →
  
  // Prove addition property
  assert(
    (ψ ∘ φ)(x +₁ y) = ((ψ ∘ φ)(x)) +₃ ((ψ ∘ φ)(y))
  ) → {
    assert((ψ ∘ φ)(x +₁ y) = ψ(φ(x +₁ y))) →
    assert(ψ(φ(x +₁ y)) = ψ(φ(x) +₂ φ(y))) →
    assert(ψ(φ(x) +₂ φ(y)) = ψ(φ(x)) +₃ ψ(φ(y))) →
    assert(ψ(φ(x)) +₃ ψ(φ(y)) = (ψ ∘ φ)(x) +₃ (ψ ∘ φ)(y))
  } →

  // Prove multiplication property
  assert(
    (ψ ∘ φ)(x ⊙₁ y) = ((ψ ∘ φ)(x)) ⊙₃ ((ψ ∘ φ)(y))
  ) → {
    assert((ψ ∘ φ)(x ⊙₁ y) = ψ(φ(x ⊙₁ y))) →
    assert(ψ(φ(x ⊙₁ y)) = ψ(φ(x) ⊙₂ φ(y))) →
    assert(ψ(φ(x) ⊙₂ φ(y)) = ψ(φ(x)) ⊙₃ ψ(φ(y))) →
    assert(ψ(φ(x)) ⊙₃ ψ(φ(y)) = (ψ ∘ φ)(x) ⊙₃ (ψ ∘ φ)(y))
  } →
  
  conclude(
    ψ ∘ φ satisfies homomorphism properties for both +₁ and ⊙₁
  )
}