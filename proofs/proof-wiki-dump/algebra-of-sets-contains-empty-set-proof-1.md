theorem EmptySetInAlgebra() {
  assert(
    ∀S: Set ∧ ∀𝓡: AlgebraOfSets(S) ⇒ ∅ ∈ 𝓡
  )
} ↔

proof EmptySetInAlgebra() {
  setVar(S: Set) →
  setVar(𝓡: AlgebraOfSets(S)) →
  apply(def_AlgebraOfSets) {
    assert(𝓡 isA RingOfSetsWithUnit(S))
  } →
  apply(def_RingOfSets) {
    assert(∅ ∈ 𝓡) // By definition RS1₂
  } →
  conclude(∅ ∈ 𝓡)
}