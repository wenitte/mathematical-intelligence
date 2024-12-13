theorem BigO_x_x2() {
  assert(
    ∀f: ℝ → ℝ,
    (∀x ∈ ℝ: f(x) = x) ⇒
    f(x) = O(x²) as x → ∞
  )
} ↔

proof BigO_x_x2() {
  setVar(f: ℝ → ℝ) →
  setVar(g: ℝ → ℝ) →
  assert(∀x ∈ ℝ: f(x) = x) →
  assert(∀x ∈ ℝ: g(x) = x²) →
  
  lemma Size_Comparison() {
    assert(
      ∀x ∈ ℝ_{>1}: |f(x)| < g(x)
    )
  } →

  letVar(M = 1) →
  letVar(x₀ = 1) →
  
  assert(
    ∀x > x₀: |f(x)| ≤ M·g(x)
  ) →
  
  apply(Definition_BigO()) →
  assert(f(x) = O(x²) as x → ∞)
}