theorem IntegralEquality_AE() {
  let(𝒳: MeasureSpace, Σ: σ-algebra, μ: Measure)
  let(f,g: 𝒳 → ℝ̄, A ∈ Σ)
  assume(
    MeasurableFunction(f, Σ) ∧
    MeasurableFunction(g, Σ) ∧
    Positive(f) ∧ Positive(g) ∧
    AEEqual(f, g, μ)
  ) ⇒
  assert(∫_A f dμ = ∫_A g dμ)
} ↔

proof IntegralEquality_AE() {
  assert(∫_A f dμ = ∫(f × χ_A) dμ) →
  assert(∫_A g dμ = ∫(g × χ_A) dμ) →
  
  lemma ProductsAEEqual() {
    assume(AEEqual(f, g, μ)) →
    setVar(N: NullSet(μ)) →
    assert(∀x ∈ 𝒳: f(x) ≠ g(x) ⇒ x ∈ N) →
    
    assume(∃x ∈ 𝒳: (f × χ_A)(x) ≠ (g × χ_A)(x)) →
    assert(f(x)χ_A(x) ≠ g(x)χ_A(x)) →
    assert(f(x) ≠ g(x)) →
    assert(x ∈ N) →
    conclude(AEEqual(f × χ_A, g × χ_A, μ))
  } →
  
  apply(ProductsAEEqual()) →
  apply(AEEqualIntegrals(f × χ_A, g × χ_A)) →
  assert(∫(f × χ_A) dμ = ∫(g × χ_A) dμ) →
  conclude(∫_A f dμ = ∫_A g dμ)
}