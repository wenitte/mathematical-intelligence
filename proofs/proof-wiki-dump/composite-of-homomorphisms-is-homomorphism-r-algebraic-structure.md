theorem CompositeHomomorphism() {
  let(R: Ring(+_R, ×_R)) →
  let(S1: AlgebraicStructure(⊙₁,...,⊙ₙ)) →
  let(S2: AlgebraicStructure(⊙'₁,...,⊙'ₙ)) →
  let(S3: AlgebraicStructure(⊙₁,...,⊙ₙ)) →
  let(S1_R: RAlgebraicStructure(S1, *₁)) →
  let(S2_R: RAlgebraicStructure(S2, *₂)) →
  let(S3_R: RAlgebraicStructure(S3, *₃)) →
  let(φ: Homomorphism(S1_R → S2_R)) →
  let(ψ: Homomorphism(S2_R → S3_R)) →
  assert(
    IsHomomorphism(ψ ∘ φ: S1_R → S3_R)
  )
} ↔

proof CompositeHomomorphism() {
  goal1: ∀k ∈ [1,n], ∀x,y ∈ S1: (ψ ∘ φ)(x ⊙ₖ y) = (ψ ∘ φ)(x) ⊙ₖ (ψ ∘ φ)(y) →
  goal2: ∀x ∈ S1, ∀λ ∈ R: (ψ ∘ φ)(λ *₁ x) = λ *₃ (ψ ∘ φ)(x) →
  
  lemma MorphismProperty() {
    setVar(k: [1,n]) →
    setVar(x,y: S1) →
    assert((ψ ∘ φ)(x ⊙ₖ y)
      = ψ(φ(x ⊙ₖ y))               [by CompositionDef]
      = ψ(φ(x) ⊙'ₖ φ(y))          [by φ_Homomorphism]
      = ψ(φ(x)) ⊙ₖ ψ(φ(y))        [by ψ_Homomorphism]
      = (ψ ∘ φ)(x) ⊙ₖ (ψ ∘ φ)(y)  [by CompositionDef]
    )
  } →

  lemma ScalarProperty() {
    setVar(x: S1) →
    setVar(λ: R) →
    assert((ψ ∘ φ)(λ *₁ x)
      = ψ(φ(λ *₁ x))               [by CompositionDef]
      = ψ(λ *₂ φ(x))               [by φ_Homomorphism]
      = λ *₃ ψ(φ(x))               [by ψ_Homomorphism]
      = λ *₃ (ψ ∘ φ)(x)            [by CompositionDef]
    )
  } →

  apply(MorphismProperty()) →
  apply(ScalarProperty()) →
  assert(goal1 ∧ goal2) →
  conclude(IsHomomorphism(ψ ∘ φ))
}