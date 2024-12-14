theorem Negation_Rule_Bounded_Functions() {
  assert(
    ∀S ∀f: S → ℝ [
      (isBounded(f) ∧ 
       ∀s ∈ S: (-f)(s) = -f(s)) →
      isBounded(-f)
    ]
  )
}

proof Negation_Rule_Bounded_Functions() {
  setVar(S: Set) →
  setVar(f: S → ℝ) →
  assert(isBounded(f)) →
  
  lemma Bounded_Definition() {
    assert(
      ∃M ∈ ℝ≥0: ∀s ∈ S: |f(s)| ≤ M
    )
  } →

  apply(Bounded_Definition()) →
  setVar(M: ℝ≥0) →
  
  ∀s ∈ S: (
    |(-f)(s)| 
    = |-f(s)| → {by_def pointwise_negation}
    = |f(s)|   → {by_def absolute_value}
    ≤ M        → {by_assumption}
  ) →

  conclude(
    ∃M ∈ ℝ≥0: ∀s ∈ S: |(-f)(s)| ≤ M →
    isBounded(-f)
  )
}