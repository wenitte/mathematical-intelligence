theorem AbsValueRandVar() {
  assert(
    let(Ω, Σ, Pr: ProbSpace) ∧
    let(X: RandVar(ℝ)) ⇒
    |X|: RandVar(ℝ)
  )
} ↔

proof AbsValueRandVar() {
  setVar(X: RandVar(ℝ)) →
  assert(X.isMeasurable(Σ)) →
  lemma AbsValueMeasurable() {
    assert(
      ∀f: Measurable(Σ) ⇒ |f|: Measurable(Σ)
    )
  } →
  apply(AbsValueMeasurable(), X) →
  assert(|X|.isMeasurable(Σ)) →
  assert(|X|: RandVar(ℝ))
}