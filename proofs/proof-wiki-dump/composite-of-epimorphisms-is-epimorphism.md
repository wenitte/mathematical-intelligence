theorem Composite_Epimorphisms_is_Epimorphism() {
  let(S1: AlgebraicStructure(ops: {∘₁, ∘₂, ..., ∘ₙ})) ∧
  let(S2: AlgebraicStructure(ops: {*₁, *₂, ..., *ₙ})) ∧
  let(S3: AlgebraicStructure(ops: {⊕₁, ⊕₂, ..., ⊕ₙ})) ∧
  let(φ: Epimorphism(S1 → S2)) ∧
  let(ψ: Epimorphism(S2 → S3)) →
  assert(
    isEpimorphism(ψ ∘ φ)
  )
} ↔

proof Composite_Epimorphisms_is_Epimorphism() {
  apply(Composite_Homomorphisms_is_Homomorphism(φ, ψ)) →
  assert(isHomomorphism(ψ ∘ φ)) ∧
  
  apply(Composite_Surjections_is_Surjection(φ, ψ)) →
  assert(isSurjective(ψ ∘ φ)) ∧
  
  define(Epimorphism(f) ↔ isHomomorphism(f) ∧ isSurjective(f)) →
  
  conclude(
    isHomomorphism(ψ ∘ φ) ∧ isSurjective(ψ ∘ φ) →
    isEpimorphism(ψ ∘ φ)
  )
}