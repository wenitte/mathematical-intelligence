theorem Combination_Continuous_Mappings_Product() {
  assert(
    ∀M(M = ⟨A,d⟩ ∧ IsMetricSpace(M)) ∧
    ∀f,g(f: M → ℝ ∧ g: M → ℝ ∧ 
         Continuous(f,M) ∧ Continuous(g,M)) ⇒
    Continuous(f·g, M)
  )
} ↔

proof Combination_Continuous_Mappings_Product() {
  setVar(M: MetricSpace) →
  setVar(f,g: M → ℝ) →
  
  lemma ContinuityDefinition() {
    assert(
      Continuous(f,M) ↔ 
      ∀a ∈ M: lim[x→a](f(x)) = f(a) ∧
      Continuous(g,M) ↔ 
      ∀a ∈ M: lim[x→a](g(x)) = g(a)
    )
  } →
  
  setVar(a: M) →
  setVar(l,m: ℝ) →
  assert(lim[x→a](f(x)) = l) →
  assert(lim[x→a](g(x)) = m) →
  
  lemma ProductRuleLimits() {
    assert(
      lim[x→a](f(x)·g(x)) = l·m
    )
  } →
  
  apply(ProductRuleLimits()) →
  apply(ContinuityDefinition()) →
  
  assert(
    lim[x→a](f(x)·g(x)) = f(a)·g(a)
  ) →
  
  conclude(Continuous(f·g, M))
}