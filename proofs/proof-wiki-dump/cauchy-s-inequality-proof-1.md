theorem Cauchy_Inequality() {
  assert(
    ∀r_i,s_i ∈ ℝ ⇒ ∑(r_i²)∑(s_i²) ≥ (∑(r_i*s_i))²
  )
} ↔

proof Cauchy_Inequality() {
  setVar(λ: ℝ) →
  define(f(λ) := ∑((r_i + λs_i)²)) →
  
  lemma NonNegative_Sum() {
    assert(∀λ ∈ ℝ: f(λ) ≥ 0) ∧
    assert(f(λ) = ∑(r_i²) + 2λ∑(r_i*s_i) + λ²∑(s_i²))
  } →

  define(QuadraticCoefficients() {
    a := ∑(s_i²);
    b := 2∑(r_i*s_i);
    c := ∑(r_i²)
  }) →
  
  define(D := 4(∑(r_i*s_i))² - 4∑(r_i²)∑(s_i²)) →
  
  byContradiction() {
    assume(D > 0) →
    assert(∃λ₁,λ₂ ∈ ℝ: λ₁ < λ₂ ∧ f(λ₁) = f(λ₂) = 0) →
    apply(QuadraticFunctionProperty()) →
    assert(∃λ ∈ (λ₁,λ₂): f(λ) < 0) →
    apply(NonNegative_Sum()) →
    assert(contradiction()) →
    conclude(D ≤ 0)
  } →
  
  assert(D ≤ 0 ↔ 4(∑(r_i*s_i))² ≤ 4∑(r_i²)∑(s_i²)) →
  assert(∑(r_i²)∑(s_i²) ≥ (∑(r_i*s_i))²)
}