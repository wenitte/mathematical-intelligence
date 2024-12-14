theorem Combination_Bounded_Continuous_Sum() {
  let(S: TopologicalSpace, τ: Topology(S)) →
  let(f: S → ℝ, g: S → ℝ) →
  assert(
    (isBounded(f) ∧ isContinuous(f)) ∧
    (isBounded(g) ∧ isContinuous(g)) ∧
    (∀s ∈ S: (f + g)(s) = f(s) + g(s)) →
    (isBounded(f + g) ∧ isContinuous(f + g))
  )
} ↔

proof Combination_Bounded_Continuous_Sum() {
  lemma Sum_Rule_Bounded() {
    assert(
      isBounded(f) ∧ isBounded(g) →
      isBounded(f + g)
    )
  } →
  
  lemma Sum_Rule_Continuous() {
    assert(
      isContinuous(f) ∧ isContinuous(g) →
      isContinuous(f + g)
    )
  } →
  
  apply(Sum_Rule_Bounded()) →
  apply(Sum_Rule_Continuous()) →
  assert(isBounded(f + g) ∧ isContinuous(f + g))
}