theorem CombinationTheorem_AbsoluteValue() {
  let(S: TopologicalSpace, τ: Topology) →
  let(ℝ: RealNumberLine) →
  let(f: S → ℝ, g: S → ℝ) →
  assert(
    isBounded(f) ∧ isContinuous(f) ∧
    isBounded(g) ∧ isContinuous(g)
  ) →
  let(|f|: S → ℝ) →
  assert(
    ∀s ∈ S ⇒ |f|(s) = |f(s)|
  ) →
  assert(
    isBounded(|f|) ∧ isContinuous(|f|)
  )
} ↔

proof CombinationTheorem_AbsoluteValue() {
  lemma AbsoluteValue_Bounded() {
    assert(
      isBounded(f) → isBounded(|f|)
    )
  } →
  lemma AbsoluteValue_Continuous() {
    assert(
      isContinuous(f) → isContinuous(|f|)
    )
  } →
  apply(AbsoluteValue_Bounded()) →
  apply(AbsoluteValue_Continuous()) →
  assert(
    isBounded(|f|) ∧ isContinuous(|f|)
  )
}