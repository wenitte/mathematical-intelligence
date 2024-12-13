theorem Bienaymé_Chebyshev_Inequality() {
  let(X: RandomVariable, μ: ℝ, σ²: ℝ₊) →
  assume(𝔼[X] = μ ∧ Var[X] = σ²) →
  assert(
    ∀k > 0 → P(|X - μ| ≥ kσ) ≤ 1/k²
  )
} ↔

proof Bienaymé_Chebyshev_Inequality() {
  let(f: ℝ → ℝ) →
  define(f(x) = {
    k²σ² if |x - μ| ≥ kσ
    0 otherwise
  }) →
  
  lemma Function_Bound() {
    assert(∀x ∈ Dom(f) → f(x) ≤ (x - μ)²)
  } →
  
  lemma Expectation_Properties() {
    apply(Expectation_Preserves_Inequality) →
    assert(𝔼[f(X)] ≤ 𝔼[(X - μ)²])
  } →
  
  lemma Variance_Definition() {
    assert(𝔼[(X - μ)²] = Var[X] = σ²)
  } →
  
  lemma Expectation_Calculation() {
    assert(𝔼[f(X)] = k²σ²P(|X - μ| ≥ kσ) + 0·P(|X - μ| < kσ)) →
    assert(𝔼[f(X)] = k²σ²P(|X - μ| ≥ kσ))
  } →
  
  apply(Function_Bound) →
  apply(Expectation_Properties) →
  apply(Variance_Definition) →
  apply(Expectation_Calculation) →
  
  assert(k²σ²P(|X - μ| ≥ kσ) ≤ σ²) →
  assert(P(|X - μ| ≥ kσ) ≤ 1/k²)
}