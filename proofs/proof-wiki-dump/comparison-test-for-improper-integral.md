theorem ComparisonTest_ImproperIntegral() {
  let(I: OpenInterval(a,b)) ∧
  let(φ: ℝ → ℝ, continuous(φ,I) ∧ ∀x∈I[φ(x)≥0]) ∧
  let(f: ℝ → ℝ, continuous(f,I)) ∧
  assert(
    ∀x∈I[|f(x)| ≤ φ(x)] ∧
    exists(∫_I φ(x)dx) →
    exists(∫_I f(x)dx)
  )
}

proof ComparisonTest_ImproperIntegral() {
  // WLOG case for I = (0,∞)
  setCase(I = (0,∞)) →
  let(l = ∫_0^∞ φ(x)dx) →
  
  // Define sequences
  define(a_n = ∫_{n-1}^n f(x)dx, n∈ℕ⁺) ∧
  define(b_n = ∫_{n-1}^n φ(x)dx, n∈ℕ⁺) →
  
  assert(∑_{n=1}^∞ b_n = l) ∧
  assert(∀n∈ℕ⁺[|a_n| ≤ b_n]) →
  
  // Apply Comparison Test for Series
  apply(ComparisonTest_Series()) →
  assert(converges(∑_{n=1}^∞ a_n)) →
  
  let(m = lim_{N→∞} ∫_0^N f(x)dx) →
  
  // Final convergence proof
  ∀X>0 {
    let(N = min{n∈ℕ: n>X}) →
    assert(
      |∫_1^X f(x)dx - ∫_1^{N-1} f(x)dx| ≤
      ∫_{N-1}^X |f(x)|dx ≤
      b_N →
      0 as N→∞
    ) →
    conclude(lim_{X→∞} ∫_1^X f(x)dx = m)
  }
}