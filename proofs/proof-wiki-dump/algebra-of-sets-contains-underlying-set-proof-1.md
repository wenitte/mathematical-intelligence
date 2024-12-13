theorem SetAlgebraContainsUnderlyingSet() {
  let(S: Set) →
  let(𝓡: AlgebraOfSets(S)) →
  assert(
    S ∈ 𝓡
  )
} ↔

proof SetAlgebraContainsUnderlyingSet() {
  setVar(S: Set) →
  setVar(𝓡: AlgebraOfSets(S)) →
  apply(AlgebraOfSetsDefinition1()) →
  assert(S ∈ 𝓡)
}