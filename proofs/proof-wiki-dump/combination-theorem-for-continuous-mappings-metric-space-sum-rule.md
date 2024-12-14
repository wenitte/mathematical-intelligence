theorem CombinationTheoremSum() {
  input(M: MetricSpace⟨A,d⟩),
  input(f: M → ℝ, g: M → ℝ),
  assume(
    isContinuous(f, M) ∧
    isContinuous(g, M)
  )
  assert(
    isContinuous(f + g, M)
  )
} ↔

proof CombinationTheoremSum() {
  setVar(a: M) →
  assert(
    ∀a ∈ M: lim[x→a] f(x) = f(a)
  ) →
  assert(
    ∀a ∈ M: lim[x→a] g(x) = g(a)
  ) →
  
  setVar(l: ℝ) →
  setVar(m: ℝ) →
  assert(
    lim[x→a] f(x) = l ∧
    lim[x→a] g(x) = m
  ) →
  
  lemma SumRuleLimits() {
    assert(
      lim[x→a](f(x) + g(x)) = lim[x→a]f(x) + lim[x→a]g(x)
    )
  } →
  
  apply(SumRuleLimits()) →
  assert(
    lim[x→a](f(x) + g(x)) = l + m
  ) →
  
  assert(
    l = f(a) ∧ m = g(a)
  ) →
  
  conclude(
    lim[x→a](f(x) + g(x)) = f(a) + g(a)
  ) →
  
  conclude(
    isContinuous(f + g, M)
  )
}