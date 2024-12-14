theorem Composite_Lattice_Homomorphism() {
  let L₁ = struct(A₁, ∨₁, ∧₁, ≼₁) →
  let L₂ = struct(A₂, ∨₂, ∧₂, ≼₂) →
  let L₃ = struct(A₃, ∨₃, ∧₃, ≼₃) →
  assert(
    (φ₁: L₁ → L₂) ∧ isLatticeHomomorphism(φ₁) ∧
    (φ₂: L₂ → L₃) ∧ isLatticeHomomorphism(φ₂) ∧
    (φ₂ ∘ φ₁: A₁ → A₃)
    ⟹
    isLatticeHomomorphism(φ₂ ∘ φ₁)
  )
} ↔

proof Composite_Lattice_Homomorphism() {
  lemma Composite_Homomorphism() {
    assert(
      ∀f,g: isHomomorphism(f) ∧ isHomomorphism(g) 
      ⟹ 
      isHomomorphism(g ∘ f)
    )
  } →
  apply(Composite_Homomorphism()) →
  assert(isLatticeHomomorphism(φ₂ ∘ φ₁))
}