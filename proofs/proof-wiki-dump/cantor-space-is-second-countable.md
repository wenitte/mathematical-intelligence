theorem Cantor_Space_Second_Countable() {
  let T = (C, τ_d) in
  assert(
    isTopologicalSpace(T) ∧ isCantorSpace(T) ⇒
    isSecondCountable(T)
  )
} ↔

proof Cantor_Space_Second_Countable() {
  setVar(T: TopologicalSpace) →
  assert(T ⊆ (ℝ, τ_d)) →
  lemma Real_Line_Second_Countable() {
    assert(isSecondCountable((ℝ, τ_d)))
  } →
  lemma Second_Countability_Hereditary() {
    assert(
      ∀X,Y: TopologicalSpace,
      (isSecondCountable(X) ∧ Y ⊆ X) ⇒
      isSecondCountable(Y)
    )
  } →
  apply(Real_Line_Second_Countable()) →
  apply(Second_Countability_Hereditary(), {X: (ℝ, τ_d), Y: T}) →
  assert(isSecondCountable(T))
}