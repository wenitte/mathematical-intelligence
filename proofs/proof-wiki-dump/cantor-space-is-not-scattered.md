theorem Cantor_Space_Not_Scattered() {
  let T = (𝒞, τ_d) ∈ TopologicalSpace
  assert(
    isScattered(T) ↔ false
  )
}

proof Cantor_Space_Not_Scattered() {
  lemma ScatteredDefinition() {
    assert(
      isScattered(X) ↔ ¬∃S ⊆ X(S ≠ ∅ ∧ isDenseInItself(S))
    )
  } →
  
  lemma CantorSpaceDenseInItself() {
    assert(
      isDenseInItself(𝒞)
    )
  } →
  
  apply(ScatteredDefinition()) →
  apply(CantorSpaceDenseInItself()) →
  
  assert(
    isDenseInItself(𝒞) ∧ 𝒞 ≠ ∅ →
    ∃S ⊆ T(S ≠ ∅ ∧ isDenseInItself(S))
  ) →
  
  assert(
    ∃S ⊆ T(S ≠ ∅ ∧ isDenseInItself(S)) →
    ¬isScattered(T)
  )
}