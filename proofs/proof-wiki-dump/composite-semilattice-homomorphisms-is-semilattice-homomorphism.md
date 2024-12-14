theorem CompositeSemilatticeHomo() {
  let(S₁ = ⟨A₁,∘₁⟩: Semilattice) ∧
  let(S₂ = ⟨A₂,∘₂⟩: Semilattice) ∧
  let(S₃ = ⟨A₃,∘₃⟩: Semilattice) ∧
  let(φ₁: S₁ → S₂) ∧
  let(φ₂: S₂ → S₃) ∧
  assert(isHomo(φ₁) ∧ isHomo(φ₂)) →
  assert(φ₂ ∘ φ₁: A₁ → A₃) →
  prove(isHomo(φ₂ ∘ φ₁))
} ↔

proof CompositeSemilatticeHomo() {
  apply(CompositeHomoIsHomo()) →
  assert(isHomo(φ₂ ∘ φ₁))
}

note: CompositeHomoIsHomo refers to the general theorem that composition of homomorphisms is a homomorphism.