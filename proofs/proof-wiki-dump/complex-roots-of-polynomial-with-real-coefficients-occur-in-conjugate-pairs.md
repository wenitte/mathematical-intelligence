theorem ComplexRootsConjugatePairs() {
  let(f(z) = Σ(k=0 to n)(aₖzᵏ)) ∧
  assert(∀k ∈ [0,n]: aₖ ∈ ℝ) ∧
  assert(∀α ∈ ℂ: f(α) = 0 ⇒ f(α̅) = 0)
} ↔

proof ComplexRootsConjugatePairs() {
  setVar(α: ℂ) →
  assume(f(α) = 0) →
  
  case RealRoot() {
    assume(Im(α) = 0) →
    apply(ComplexEqualsConjugateIffReal()) →
    assert(α = α̅) →
    conclude(f(α̅) = 0)
  } →
  
  case ComplexRoot() {
    assume(Im(α) ≠ 0) →
    assert(0̅ = 0) →
    assert(f(α) = f(α)̅) →
    
    lemma ConjugatePolynomial() {
      assert(∀z ∈ ℂ: f(z)̅ = f(z̅)) →
      assert(f(α)̅ = f(α̅))
    } →
    
    apply(ConjugatePolynomial()) →
    assert(0 = f(α) = f(α)̅ = f(α̅))
  } →
  
  conclude(f(α̅) = 0)
}

proof ComplexRootsConjugatePairs_Exponential() {
  setVar(α: ℂ) →
  let(α = p + qi = re^(iθ)) →
  assume(f(α) = 0) →
  
  assert(Σ(k=0 to n)(aₖrᵏe^(ikθ)) = 0) →
  apply(Conjugate()) →
  assert(Σ(k=0 to n)(aₖrᵏe^(-ikθ)) = 0) →
  
  let(α̅ = p - qi = re^(-iθ)) →
  conclude(f(α̅) = 0)
}