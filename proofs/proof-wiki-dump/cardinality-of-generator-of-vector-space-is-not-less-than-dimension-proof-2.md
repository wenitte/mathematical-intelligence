theorem VectorSpaceDimensionBound() {
  let(V: VectorSpace, F: Field, BB: Set) →
  assume(BB.isGenerator(V) ∧ |BB| = m) →
  assert(
    dimᶠ(V) ≤ m
  )
} ↔

proof VectorSpaceDimensionBound() {
  lemma GeneratorContainsBasis() {
    assert(∀G[G.isGenerator(V) → ∃B(B.isBasis(V) ∧ B ⊆ G)])
  } →
  
  setVar(B: Set) →
  apply(GeneratorContainsBasis()) →
  assert(B.isBasis(V) ∧ B ⊆ BB) →
  
  lemma CardinalityBasis() {
    assert(|B| = dimᶠ(V))
  } →
  
  apply(CardinalityBasis()) →
  assert(dimᶠ(V) = |B|) →
  assert(|B| ≤ |BB|) by(B ⊆ BB) →
  assert(|BB| = m) by(assumption) →
  assert(dimᶠ(V) ≤ m) by(transitivity)
}