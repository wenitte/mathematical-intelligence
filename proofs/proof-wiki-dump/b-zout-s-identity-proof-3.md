theorem BezoutIdentity() {
  assert(
    ∀a,b ∈ ℤ, (a ≠ 0 ∨ b ≠ 0) →
    ∃x,y ∈ ℤ: ax + by = gcd(a,b) ∧
    gcd(a,b) = min({ax + by | x,y ∈ ℤ ∧ ax + by > 0})
  )
} ↔

proof BezoutIdentity() {
  setVar(a,b: ℤ) →
  assert(EuclideanAlgorithm(a,b) ↔ {
    a = q₁b + r₁ ∧
    b = q₂r₁ + r₂ ∧
    r₁ = q₃r₂ + r₃ ∧
    ⋮
    rₙ₋₂ = qₙrₙ₋₁ + rₙ ∧
    rₙ₋₁ = qₙ₊₁rₙ + 0
  }) →

  lemma LinearCombinations() {
    assert(∀i ∈ {1,...,n-1}, ∃xᵢ,yᵢ ∈ ℤ: axᵢ + byᵢ = rᵢ)
  } →

  proof LinearCombinations() {
    // Base cases
    assert(x₁ = 1 ∧ y₁ = -q₁ → ax₁ + by₁ = r₁) →
    assert(x₂ = -q₂ ∧ y₂ = 1 + q₁q₂ → ax₂ + by₂ = r₂) →
    
    // Inductive step
    setVar(k < n-1) →
    assume(∀i ≤ k, ∃xᵢ,yᵢ: axᵢ + byᵢ = rᵢ) →
    assert(rₖ₋₁ = rₖqₖ₊₁ + rₖ₊₁) →
    assert(axₖ₋₁ + byₖ₋₁ - (axₖ + byₖ)qₖ₊₁ = rₖ₊₁) →
    let(xₖ₊₁ = xₖ₋₁ - xₖqₖ₊₁) →
    let(yₖ₊₁ = yₖ₋₁ - yₖqₖ₊₁) →
    assert(axₖ₊₁ + byₖ₊₁ = rₖ₊₁) →
    applyInductionPrinciple()
  } →

  apply(LinearCombinations()) →
  assert(rₙ = gcd(a,b)) →
  conclude(∃x,y ∈ ℤ: ax + by = gcd(a,b))
}