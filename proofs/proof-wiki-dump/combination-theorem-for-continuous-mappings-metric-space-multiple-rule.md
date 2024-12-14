theorem Combination_Continuous_Metric_Multiple() {
  let(M = ⟨A,d⟩: MetricSpace) ∧
  let(f: M → ℝ) ∧
  let(λ: ℝ) ∧
  assert(
    continuous(f,M) → continuous(λf,M)
  )
} ↔

proof Combination_Continuous_Metric_Multiple() {
  setDef(continuous(f,M) ≡ ∀a∈M: lim[x→a]f(x) = f(a)) →
  
  let(a: M) →
  assume(lim[x→a]f(x) = l) →
  
  lemma Multiple_Rule_Limits() {
    assert(
      lim[x→a]f(x) = l → 
      lim[x→a](λf(x)) = λl
    )
  } →
  
  apply(Multiple_Rule_Limits()) →
  assert(lim[x→a](λf(x)) = λf(a)) →
  
  therefore(
    ∀a∈M: lim[x→a](λf(x)) = (λf)(a)
  ) →
  
  byDef(continuous(λf,M))
}