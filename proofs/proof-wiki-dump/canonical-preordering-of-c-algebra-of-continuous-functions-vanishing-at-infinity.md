theorem CanonicalPreordering_CStarAlgebra() {
  let(X: LocallyCompactHausdorffSpace) ∧
  let(A = C₀(X): ComplexValuedFunctions) ∧
  let(≤_A: CanonicalPreordering) ∧
  let(f,g ∈ C₀(X)) →
  assert(
    f ≤_A g ↔ ∀x∈X[g(x) - f(x) ∈ ℝ_≥0]
  )
}

proof CanonicalPreordering_CStarAlgebra() {
  # Sufficient Condition
  proof_forward() {
    assume(∀x∈X[g(x) - f(x) ∈ ℝ_≥0]) →
    apply(ComplexNumberEqualsConjugateIffReal) →
    assert(∀x∈X[conj(g(x) - f(x)) = g(x) - f(x)]) →
    conclude(g - f: Hermitian(A)) →
    apply(SpectrumContinuousFunctionsVanishingInfinity) →
    assert(σ_A(g - f) = (g - f)[X] ∪ {0} ⊆ [0,∞)) →
    conclude(g - f: Positive) →
    conclude(f ≤_A g)
  }

  # Necessary Condition
  proof_backward() {
    assume(f ≤_A g) →
    assert(g - f: Positive) →
    assert(σ_A(g - f) ⊆ [0,∞)) →
    apply(SpectrumContinuousFunctionsVanishingInfinity) →
    assert({g(x) - f(x) : x ∈ X} ⊆ σ_A(g - f) ⊆ [0,∞)) →
    conclude(∀x∈X[g(x) - f(x) ∈ ℝ_≥0])
  }
}