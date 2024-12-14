theorem Combination_Continuous_Min() {
  let(M = (A, d): MetricSpace) ∧
  let(ℝ: RealNumbers) ∧
  let(f: M → ℝ, continuous(f)) ∧
  let(g: M → ℝ, continuous(g)) ∧
  let(min{f,g}: M → ℝ) →
  assert(continuous(min{f,g}))
} ↔

proof Combination_Continuous_Min() {
  let(a ∈ M) →
  
  lemma MinOperation() {
    assert(∀x,y ∈ ℝ → min{x,y} = (1/2)(x + y - |x - y|))
  } →
  
  apply(MinOperation()) →
  assert(min{f(x),g(x)} = (1/2)(f(x) + g(x) - |f(x) - g(x)|)) →
  
  lemma DifferenceRule() {
    assert(continuous(f) ∧ continuous(g) → continuous(f - g, a))
  } →
  
  lemma AbsoluteValueRule() {
    assert(continuous(h, a) → continuous(|h|, a))
  } →
  
  lemma SumRule() {
    assert(continuous(f) ∧ continuous(g) → continuous(f + g, a))
  } →
  
  lemma MultipleRule() {
    assert(continuous(h, a) ∧ k ∈ ℝ → continuous(k·h, a))
  } →
  
  apply(DifferenceRule()) →
  assert(continuous(f - g, a)) →
  
  apply(AbsoluteValueRule()) →
  assert(continuous(|f - g|, a)) →
  
  apply(SumRule()) →
  assert(continuous(f + g, a)) →
  
  apply(DifferenceRule()) →
  assert(continuous((f + g) - |f - g|, a)) →
  
  apply(MultipleRule(), k = 1/2) →
  assert(continuous((1/2)((f + g) - |f - g|), a)) →
  
  assert(∀a ∈ M → continuous(min{f,g}, a)) →
  assert(continuous(min{f,g}))
}