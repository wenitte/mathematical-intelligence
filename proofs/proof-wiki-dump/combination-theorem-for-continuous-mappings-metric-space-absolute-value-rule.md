theorem Combination_Continuous_Abs_Value() {
  assert(
    ∀M(MetricSpace(M) ∧ M = ⟨A,d⟩) →
    ∀f(f: M → ℝ) →
    ∀a ∈ M →
    (Continuous(f,a) → Continuous(|f|,a))
  )
} ↔

proof Combination_Continuous_Abs_Value() {
  setVar(M: MetricSpace, f: M → ℝ, a: M) →
  assume(Continuous(f,a)) →
  
  lemma ContinuityDef() {
    assert(
      Continuous(f,a) ↔ 
      ∀ε > 0 ∃δ > 0 ∀x ∈ M(
        d(x,a) < δ → |f(x) - f(a)| < ε
      )
    )
  } →

  lemma ReverseTriangleInequality() {
    assert(
      ∀x,y ∈ ℝ(
        ||x| - |y|| ≤ |x - y|
      )
    )
  } →
  
  setVar(ε: ℝ, ε > 0) →
  apply(ContinuityDef()) →
  obtain(δ > 0: d(x,a) < δ → |f(x) - f(a)| < ε) →
  apply(ReverseTriangleInequality()) →
  assert(
    ||f(x)| - |f(a)|| ≤ |f(x) - f(a)| < ε
  ) →
  
  conclude(
    ∀ε > 0 ∃δ > 0 ∀x ∈ M(
      d(x,a) < δ → ||f(x)| - |f(a)|| < ε
    )
  ) →
  
  apply(ContinuityDef()) →
  conclude(Continuous(|f|,a))
}