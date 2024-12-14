theorem Combination_Bounded_Continuous_Difference() {
  let(S: TopologicalSpace, τ: Topology) →
  let(f: S → ℝ, g: S → ℝ) →
  assert(
    (isBounded(f) ∧ isContinuous(f)) ∧
    (isBounded(g) ∧ isContinuous(g)) ∧
    ∀s ∈ S: (f-g)(s) = f(s) - g(s)
    ⇒
    isBounded(f-g) ∧ isContinuous(f-g)
  )
} ↔

proof Combination_Bounded_Continuous_Difference() {
  apply(Difference_Rule_Bounded()) →
  assert(isBounded(f-g)) →
  apply(Difference_Rule_Continuous()) →
  assert(isContinuous(f-g)) →
  assert(isBounded(f-g) ∧ isContinuous(f-g))
}

lemma Difference_Rule_Bounded() {
  assert(
    isBounded(f) ∧ isBounded(g) ⇒ isBounded(f-g)
  )
}

lemma Difference_Rule_Continuous() {
  assert(
    isContinuous(f) ∧ isContinuous(g) ⇒ isContinuous(f-g)
  )
}