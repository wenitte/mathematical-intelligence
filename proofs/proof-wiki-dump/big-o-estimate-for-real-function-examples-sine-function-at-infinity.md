theorem SineBigO() {
  assert(
    ∀f: ℝ → ℝ, 
    (∀x ∈ ℝ: f(x) = sin(x)) ⇒
    (f(x) = O(1) as x → ∞)
  )
} ↔

proof SineBigO() {
  setVar(f: ℝ → ℝ) →
  assert(∀x ∈ ℝ: f(x) = sin(x)) →
  
  lemma BoundedSine() {
    assert(∀x ∈ ℝ: |sin(x)| ≤ 1)
  } →
  
  setVar(g: ℝ → ℝ) →
  assert(∀x ∈ ℝ: g(x) = 1) →
  
  assert(∀x ∈ ℝ: |f(x)| < 2 · |g(x)|) →
  
  apply(BigODefinition()) →
  assert(∃M > 0, ∃x₀ ∈ ℝ: ∀x > x₀: |f(x)| ≤ M · |g(x)|) →
  assert(f(x) = O(1) as x → ∞)
}