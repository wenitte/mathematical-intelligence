theorem BoundedFunctionSum() {
  assert(
    ∀S∀f∀g(
      (f: S → ℝ ∧ g: S → ℝ ∧ isBounded(f) ∧ isBounded(g)) →
      isBounded(f + g)
    )
  )
} ↔

proof BoundedFunctionSum() {
  setVar(S: Set, f: S → ℝ, g: S → ℝ) →
  assert(∃M_f ∈ ℝ_≥0 ∀s ∈ S: |f(s)| ≤ M_f) →
  assert(∃M_g ∈ ℝ_≥0 ∀s ∈ S: |g(s)| ≤ M_g) →
  setVar(M = M_f + M_g) →
  
  lemma TriangleInequality() {
    assert(∀s ∈ S: |(f + g)(s)| = |f(s) + g(s)| ≤ |f(s)| + |g(s)|)
  } →
  
  apply(TriangleInequality()) →
  assert(∀s ∈ S: |(f + g)(s)| ≤ |f(s)| + |g(s)| ≤ M_f + M_g = M) →
  conclude(isBounded(f + g))
}