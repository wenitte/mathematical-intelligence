theorem IntegralEqualAE() {
  assert(
    ∀(X,Σ,μ: MeasureSpace) ∧
    ∀(f,g: X → ℝ̄≥0) ∧
    isMeasurable(f, Σ) ∧
    isMeasurable(g, Σ) ∧
    (∀x ∈ X, μ-a.e. → f(x) = g(x)) →
    ∫f dμ = ∫g dμ
  )
} ↔

proof IntegralEqualAE() {
  setDef(A := {x ∈ X : f(x) ≠ g(x)}) →
  assert(isMeasurable(A, Σ)) by MeasurableFunctionsDetermineMS →
  
  setDef(h: X → ℝ̄, h(x) := {
    +∞ if x ∈ A
    0   if x ∉ A
  }) →
  
  lemma h_Measurable() {
    assert(∀t < 0 → {x ∈ X : h(x) ≤ t} = ∅) ∧
    assert(isMeasurable(∅, Σ)) by SigmaAlgebraContainsEmpty ∧
    assert(∀t ≥ 0 → {x ∈ X : h(x) ≤ t} = X∖A) ∧
    assert(isMeasurable(X∖A, Σ)) →
    assert(isMeasurable(h, Σ))
  } →
  
  assert(h ≥ 0) ∧
  assert(∀x ∈ X → f(x) ≤ g(x) + h(x)) by {
    case(x ∈ A): h(x) = +∞ → f(x) ≤ g(x) + h(x)
    case(x ∉ A): f(x) = g(x) → f(x) = g(x) + h(x)
  } →
  
  apply(IntegralMonotone) →
  assert(∫f dμ ≤ ∫(g + h) dμ) →
  apply(IntegralAdditive) →
  assert(∫f dμ ≤ ∫g dμ + ∫h dμ) →
  
  assert(μ(A) = 0) by hypothesis →
  assert(h = 0 μ-a.e.) →
  apply(MeasurableFunctionZeroAE) →
  assert(∫|h| dμ = 0) →
  assert(∫h dμ = 0) by h_nonNegative →
  assert(∫f dμ ≤ ∫g dμ) →
  
  lemma ReverseInequality() {
    assert(∀x ∈ X → g(x) ≤ f(x) + h(x)) →
    apply(IntegralMonotone) →
    assert(∫g dμ ≤ ∫f dμ)
  } →
  
  apply(ReverseInequality()) →
  assert(∫f dμ = ∫g dμ)
}