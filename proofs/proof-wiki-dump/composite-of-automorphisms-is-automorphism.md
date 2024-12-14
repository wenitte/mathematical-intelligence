theorem Composite_Automorphisms_Is_Automorphism() {
  let(S: AlgebraicStructure) →
  let(ops: {⊙₁, ⊙₂, ..., ⊙ₙ}) →
  let(φ: Automorphism(S)) →
  let(ψ: Automorphism(S)) →
  assert(
    (φ: S → S) ∧ 
    (ψ: S → S) ∧ 
    isAutomorphism(φ) ∧ 
    isAutomorphism(ψ) →
    isAutomorphism(ψ ∘ φ)
  )
} ↔

proof Composite_Automorphisms_Is_Automorphism() {
  let(φ: Automorphism(S)) →
  let(ψ: Automorphism(S)) →
  
  lemma Composite_Homomorphism() {
    assert(
      isHomomorphism(φ) ∧ 
      isHomomorphism(ψ) →
      isHomomorphism(ψ ∘ φ)
    )
  } →
  
  apply(Composite_Homomorphism()) →
  
  assert(
    ∀x ∈ S: (ψ ∘ φ)(x) ∈ S
  ) →
  
  assert(
    isHomomorphism(ψ ∘ φ) ∧
    (ψ ∘ φ: S → S) →
    isAutomorphism(ψ ∘ φ)
  )
}