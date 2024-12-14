theorem ComplexRootsConjugatePairs() {
  let(f: ℂ → ℂ, f(z) = Σ(k=0 to n)(aₖzᵏ)) →
  assert(
    ∀k ∈ [0,n]: aₖ ∈ ℝ ∧
    ∀α ∈ ℂ: (f(α) = 0 → f(α̅) = 0)
  )
} ↔

proof ComplexRootsConjugatePairs() {
  setVar(α: ℂ) →
  assume(f(α) = 0) →
  
  case RealRoot() {
    assume(α ∈ ℝ) →
    apply(ComplexEqualsConjugateIffReal) →
    assert(α = α̅) →
    assert(f(α̅) = f(α) = 0)
  } →
  
  case ComplexRoot() {
    assume(α ∉ ℝ) →
    assert(0̅ = 0) →
    assert(f(α) = f(α)̅) →
    lemma ConjugatePolynomial() {
      assert(
        ∀p(z) with real coefficients:
        p(z)̅ = p(z̅)
      )
    } →
    apply(ConjugatePolynomial) →
    assert(f(α)̅ = f(α̅)) →
    chainEquality(
      f(α̅) = f(α)̅ = 0̅ = 0
    )
  } →
  
  conclude(f(α̅) = 0)
}