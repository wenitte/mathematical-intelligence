theorem NonArchimedeanNorm_Characterization() {
  assert(
    ∀R: DivisionRing, ∀norm: R → ℝ≥0 ⇒
    (isNonArchimedean(norm) ↔ 
     (∀n ∈ ℕ>0: norm(n·1R) ≤ 1))
  )
} ↔

proof NonArchimedeanNorm_Characterization() {
  // Necessary Condition
  setVar(R: DivisionRing) →
  assume(isNonArchimedean(norm)) →
  forall(n: ℕ>0) {
    assert(
      norm(n·1R) = norm(1R + ... + 1R) →  // n summands
      norm(1R + ... + 1R) ≤ max({norm(1R), ..., norm(1R)}) →  // by nonArchimedean
      max({norm(1R), ..., norm(1R)}) = 1  // since norm(1R) = 1
    )
  } →

  // Sufficient Condition
  assume(∀n ∈ ℕ>0: norm(n·1R) ≤ 1) →
  
  lemma ReductionToUnity() {
    assert(
      ∀x,y ∈ R:
      (y = 0R → norm(x + y) = max({norm(x), norm(y)})) ∧
      (y ≠ 0R → (norm(x + y) ≤ max({norm(x), norm(y)}) ↔ 
                 norm(xy⁻¹ + 1R) ≤ max({norm(xy⁻¹), 1})))
    )
  } →

  forall(x: R) {
    assert(
      norm(x + 1R)ⁿ = norm(∑ᵢ₌₀ⁿ (n choose i)·xⁱ) →  // Binomial Theorem
      norm(∑ᵢ₌₀ⁿ (n choose i)·xⁱ) ≤ ∑ᵢ₌₀ⁿ norm((n choose i)·xⁱ) →  // Triangle Inequality
      ∑ᵢ₌₀ⁿ norm((n choose i)·xⁱ) = ∑ᵢ₌₀ⁿ norm((n choose i)·1R)·norm(xⁱ) →  // Multiplicativity
      ∑ᵢ₌₀ⁿ norm((n choose i)·1R)·norm(xⁱ) ≤ ∑ᵢ₌₀ⁿ norm(xⁱ) // by assumption
    )
  } →

  lemma PowerBound() {
    assert(
      ∀i ∈ [0,n]: norm(xⁱ) ≤ max({norm(xⁿ), 1})
    )
  } →

  assert(
    norm(x + 1R)ⁿ ≤ (n+1)·max({norm(xⁿ), 1}) →
    norm(x + 1R) ≤ (n+1)^(1/n)·max({norm(x), 1})
  ) →

  lemma LimitConvergence() {
    assert(
      lim(n→∞)((n+1)^(1/n)) = 1
    )
  } →

  apply(LimitConvergence()) →
  assert(norm(x + 1R) ≤ max({norm(x), 1}))
}