theorem Bienayme_Chebyshev_Inequality() {
  let(X: RandomVariable, μ: ℝ, σ²: ℝ₊) →
  assert(
    E[X] = μ ∧ Var[X] = σ² →
    ∀k > 0: P(|X - μ| ≥ kσ) ≤ 1/k²
  )
}

proof Bienayme_Chebyshev_Inequality_1() {
  let(f: ℝ → ℝ) →
  define(
    f(x) = {
      k²σ² if |x - μ| ≥ kσ
      0 otherwise
    }
  ) →
  assert(∀x ∈ Dom(f): f(x) ≤ (x - μ)²) →
  apply(Expectation_Preserves_Inequality) →
  assert(E[f(X)] ≤ E[(X - μ)²]) →
  assert(E[(X - μ)²] = Var[X] = σ²) →
  
  lemma Expectation_Computation() {
    assert(
      E[f(X)] = k²σ²P(|X - μ| ≥ kσ) + 0·P(|X - μ| < kσ) →
      E[f(X)] = k²σ²P(|X - μ| ≥ kσ)
    )
  } →
  
  apply(Expectation_Computation) →
  assert(k²σ²P(|X - μ| ≥ kσ) ≤ σ²) →
  apply(Division_Both_Sides(k²σ²)) →
  assert(P(|X - μ| ≥ kσ) ≤ 1/k²)
}

proof Bienayme_Chebyshev_Inequality_2() {
  assert(k > 0 ∧ σ > 0 → kσ > 0) →
  assert(
    P(|X - μ| ≥ kσ) = P((X - μ)² ≥ (kσ)²)
  ) →
  apply(Markov_Inequality_Corollary) →
  assert(
    P((X - μ)² ≥ (kσ)²) ≤ E[(X - μ)²]/(kσ)²
  ) →
  assert(E[(X - μ)²] = Var[X] = σ²) →
  assert(σ²/(k²σ²) = 1/k²)
}