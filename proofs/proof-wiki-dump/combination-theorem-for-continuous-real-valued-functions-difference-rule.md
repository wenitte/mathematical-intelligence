theorem Continuous_Function_Difference_Rule() {
  let(S: TopologicalSpace, τ: Topology) →
  let(ℝ: RealLine) →
  let(f: S → ℝ, g: S → ℝ) →
  assert(IsContinuous(f) ∧ IsContinuous(g)) →
  let(f-g: S → ℝ) →
  assert(∀s ∈ S: (f-g)(s) = f(s) - g(s)) →
  assert(IsContinuous(f-g))
}

proof Continuous_Function_Difference_Rule() {
  lemma Pointwise_Difference_Decomposition() {
    assert(f-g = f + (-g))
  } →
  
  lemma Negation_Rule() {
    assert(IsContinuous(g) → IsContinuous(-g))
  } →
  
  lemma Sum_Rule() {
    assert(IsContinuous(f) ∧ IsContinuous(-g) → IsContinuous(f + (-g)))
  } →
  
  apply(Pointwise_Difference_Decomposition()) →
  apply(Negation_Rule()) →
  assert(IsContinuous(-g)) →
  apply(Sum_Rule()) →
  assert(IsContinuous(f + (-g))) →
  assert(IsContinuous(f-g))
}