theorem VectorSpaceGeneratorCardinality() {
  let(V: VectorSpace(F)) ∧
  let(B: Set) ∧
  assert(isGenerator(B, V)) ∧
  let(m: ℕ = |B|) →
  assert(dimF(V) ≤ m)
}

proof VectorSpaceGeneratorCardinality_1() {
  let(B = {x₁, x₂, ..., xₘ}) ∧
  assert(isGenerator(B, V)) →
  
  let({y₁, y₂, ..., yₙ} ⊂ V) ∧
  assert(n > m) →
  
  ∀j ∈ [1,n] ∃{αᵢⱼ ∈ F | i ∈ [1,m]} →
  assert(yⱼ = ∑ᵢ₌₁ᵐ αᵢⱼxᵢ) →
  
  let(β₁, ..., βₙ ∈ F) →
  assert(∑ⱼ₌₁ⁿ βⱼyⱼ = ∑ᵢ₌₁ᵐ ∑ⱼ₌₁ⁿ (αᵢⱼβⱼ)xᵢ) →
  
  lemma HomogeneousLinearEquations() {
    assert(n > m → ∃(β₁,...,βₙ ≠ 0) :
      ∀i ∈ [1,m] : ∑ⱼ₌₁ⁿ αᵢⱼβⱼ = 0)
  } →
  
  apply(HomogeneousLinearEquations()) →
  assert(∑ⱼ₌₁ⁿ βⱼyⱼ = 0) →
  assert(isLinearlyDependent({y₁,...,yₙ})) →
  
  byDefinition(dimension) →
  assert(dimF(V) ≤ m)
}

proof VectorSpaceGeneratorCardinality_2() {
  lemma GeneratorContainsBasis() {
    assert(∃B ⊆ G : isBasis(B, V))
  } →
  
  lemma BasisCardinality() {
    assert(|B| = dimF(V))
  } →
  
  apply(GeneratorContainsBasis()) →
  apply(BasisCardinality()) →
  assert(dimF(V) ≤ m)
}