theorem BoundedLinearFunctionalRealPart() {
  assert(
    let X = NormedVectorSpace(ℂ) ∧
    let Xℝ = Realification(X) ∧
    let f: Xℝ → ℝ ∧
    isBounded(f) ∧
    isLinear(f) →
    ∃!g: X → ℂ [
      isBounded(g) ∧
      isLinear(g) ∧
      ∀x ∈ X (f(x) = Re(g(x)))
    ]
  )
} ↔

proof BoundedLinearFunctionalRealPart() {
  setVar(M: ℝ₊) →
  assert(∀x ∈ X |f(x)| ≤ M∥x∥) →
  
  lemma UniqueLinearFunctional() {
    assert(∃!g: X → ℂ [
      isLinear(g) ∧
      ∀x ∈ X (f(x) = Re(g(x))) ∧
      ∀x ∈ X (g(x) = f(x) - if(ix))
    ])
  } →
  
  apply(UniqueLinearFunctional()) →
  
  assert(∀x ∈ X [
    |g(x)|² = |f(x)|² + |f(ix)|² →
    |g(x)|² ≤ M²∥x∥² + M²∥ix∥² →
    |g(x)|² ≤ M²∥x∥² + M²∥x∥² →
    |g(x)|² ≤ 2M²∥x∥² →
    |g(x)| ≤ M√2∥x∥
  ]) →
  
  conclude(
    isBounded(g) ∧
    ∀x ∈ X |g(x)| ≤ M√2∥x∥
  )
}