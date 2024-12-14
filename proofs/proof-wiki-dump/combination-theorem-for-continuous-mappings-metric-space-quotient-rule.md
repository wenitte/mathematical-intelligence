theorem ContinuousQuotient(M: MetricSpace, f: M→ℝ, g: M→ℝ) {
  assert(
    (M = ⟨A,d⟩) ∧
    (continuous(f) on M) ∧
    (continuous(g) on M) →
    continuous(f/g) on (M∖{x∈A: g(x)=0})
  )
}

proof ContinuousQuotient() {
  setDef(continuous(h) ↔ 
    ∀a∈M: lim[x→a](h(x)) = h(a)) →
  
  assert(∀a∈M: lim[x→a]f(x) = f(a)) →
  assert(∀a∈M: lim[x→a]g(x) = g(a)) →
  
  setVar(l: ℝ = lim[x→a]f(x)) →
  setVar(m: ℝ = lim[x→a]g(x)) →
  
  lemma ProductLimitRule() {
    assert(
      m≠0 →
      lim[x→a](f(x)/g(x)) = l/m
    )
  } →
  
  apply(ProductLimitRule()) →
  
  assert(
    ∀a∈(M∖{x∈A: g(x)=0}):
    lim[x→a](f(x)/g(x)) = (f(a)/g(a))
  ) →
  
  assert(
    continuous(f/g) on (M∖{x∈A: g(x)=0})
  )
}