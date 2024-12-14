theorem LimitQuotientRule(M: MetricSpace, f: A→ℝ, g: A→ℝ, a: A, l: ℝ, m: ℝ) {
  assert(
    (lim[x→a] f(x) = l) ∧
    (lim[x→a] g(x) = m) ∧
    (m ≠ 0)
  ) ⇒
  assert(
    lim[x→a] (f(x)/g(x)) = l/m
  )
}

proof LimitQuotientRule() {
  setVar(x_n: Sequence[A]) →
  assume(
    ∀n∈ℕ>0: x_n ≠ a ∧
    lim[n→∞] x_n = a
  ) →
  
  lemma SequenceLimits() {
    apply(LimitByConvergentSequences) →
    assert(
      lim[n→∞] f(x_n) = l ∧
      lim[n→∞] g(x_n) = m
    )
  } →
  
  lemma QuotientSequence() {
    apply(QuotientRuleRealSequences) →
    assert(
      m ≠ 0 ⇒
      lim[n→∞] (f(x_n)/g(x_n)) = l/m
    )
  } →
  
  apply(LimitByConvergentSequences) →
  conclude(
    lim[x→a] (f(x)/g(x)) = l/m
  )
}