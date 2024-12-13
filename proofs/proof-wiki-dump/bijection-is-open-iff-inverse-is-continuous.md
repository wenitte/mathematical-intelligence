theorem Bijection_Open_Iff_Inverse_Continuous() {
  let(T₁ = ⟨S₁,τ₁⟩: TopologicalSpace) ∧
  let(T₂ = ⟨S₂,τ₂⟩: TopologicalSpace) ∧
  let(f: T₁ → T₂) ∧
  assert(isBijection(f)) →
  assert(isOpen(f) ↔ isContinuous(f⁻¹))
} ↔

proof Bijection_Open_Iff_Inverse_Continuous() {
  let(g = f⁻¹) →
  lemma Bijection_Properties() {
    assert(isBijection(g)) ∧
    assert(g⁻¹ = f)
  } →
  
  // Forward direction
  assume(isOpen(f)) →
  assert(∀H ∈ τ₁: f[H] ∈ τ₂) →
  substitute(f = g⁻¹) →
  assert(∀H ∈ τ₁: g⁻¹[H] ∈ τ₂) →
  assert(isContinuous(g)) →

  // Backward direction
  assume(isContinuous(g)) →
  assert(∀H ∈ τ₁: g⁻¹[H] ∈ τ₂) →
  substitute(g⁻¹ = f) →
  assert(∀H ∈ τ₁: f[H] ∈ τ₂) →
  assert(isOpen(f)) →
  
  conclude(isOpen(f) ↔ isContinuous(f⁻¹))
}