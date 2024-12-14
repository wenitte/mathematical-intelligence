theorem CauchyMeanTheorem() {
  let(x₁,...,xₙ ∈ ℝ⁺)
  let(Aₙ := (1/n)∑ᵢxᵢ)  // arithmetic mean
  let(Gₙ := (∏ᵢxᵢ)^(1/n)) // geometric mean
  assert(
    Aₙ ≥ Gₙ ∧
    (Aₙ = Gₙ ↔ ∀i,j ∈ {1,...,n}: xᵢ = xⱼ)
  )
} ↔

proof CauchyMeanTheorem() {
  // Set up function f(x) = ln(x)
  let(f: ℝ⁺ → ℝ) →
  setDef(f(x) := ln(x)) →
  
  // Prove f is concave
  lemma FunctionConcave() {
    let(f'(x) = 1/x) →
    let(f''(x) = -1/x²) →
    assert(∀x > 0: -1/x² < 0) →
    assert(f is concave on (0,∞))
  } →
  
  // Apply Jensen's inequality
  apply(JensenInequality()) →
  let(λᵢ = 1/n ∀i ∈ {1,...,n}) →
  assert(
    ln((∑ᵢλᵢxᵢ)/(∑ᵢλᵢ)) ≥ (∑ᵢλᵢln(xᵢ))/(∑ᵢλᵢ)
  ) →
  
  // Simplify both sides
  assert(
    ln(Aₙ) ≥ ln(Gₙ)
  ) →
  
  // Since ln is strictly increasing
  lemma LogIncreasing() {
    assert(∀x > 0: f'(x) = 1/x > 0) →
    assert(ln is strictly increasing)
  } →
  
  // Conclude main inequality
  assert(Aₙ ≥ Gₙ) →
  
  // Prove equality condition
  lemma EqualityCondition() {
    // Forward direction
    assert(
      ∀i,j: xᵢ = xⱼ = x →
      Aₙ = (1/n)∑ᵢx = x ∧
      Gₙ = (x^n)^(1/n) = x
    ) →
    
    // Backward direction (by induction)
    let(P(k): Aₖ = Gₖ → ∀i,j ∈ {1,...,k}: xᵢ = xⱼ) →
    assert(P(1)) → // Base case
    assert(P(2)) → // Second base case
    assert(∀k ≥ 1: P(k) → P(2k)) → // Forward step
    assert(∀k ≥ 2: P(k) → P(k-1)) → // Backward step
    apply(ForwardBackwardInduction())
  }
}