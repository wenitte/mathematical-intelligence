theorem Absolute_Value_Continuous() {
  assert(
    ∀f: ℝ → ℝ,
    ∀a ∈ ℝ,
    Continuous(f, a) →
    Continuous(|f|, a)
  )
} ↔

proof Absolute_Value_Continuous() {
  setVar(f: ℝ → ℝ) →
  setVar(a: ℝ) →
  assume(Continuous(f, a)) →
  
  lemma Continuity_Definition() {
    assert(
      ∀ε > 0,
      ∃δ > 0,
      |x - a| < δ →
      |f(x) - f(a)| < ε
    )
  } →

  lemma Reverse_Triangle_Inequality() {
    assert(
      ∀x,y ∈ ℝ,
      ||x| - |y|| ≤ |x - y|
    )
  } →

  setVar(ε > 0) →
  apply(Continuity_Definition()) →
  obtain(δ > 0: |x - a| < δ → |f(x) - f(a)| < ε) →
  
  assert(
    |x - a| < δ →
    ||f(x)| - |f(a)|| ≤ |f(x) - f(a)| < ε
  ) by(Reverse_Triangle_Inequality()) →
  
  conclude(
    ∀ε > 0,
    ∃δ > 0,
    |x - a| < δ →
    ||f(x)| - |f(a)|| < ε
  ) →
  
  conclude(Continuous(|f|, a))
}