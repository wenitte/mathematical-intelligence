theorem BoundedPiecewiseContinuousIsDarboux() {
  assert(
    ∀f: ℝ → ℝ,
    ∀[a,b] ∈ ℝ ⇒
    (isBoundedOn(f,[a,b]) ∧ isPiecewiseContinuousOn(f,[a,b])) →
    isDarbouzIntegrable(f,[a,b])
  )
} ↔

proof BoundedPiecewiseContinuousIsDarboux() {
  setVar(f: ℝ → ℝ) →
  setVar([a,b]: ℝ) →
  assert(∃{x₀,x₁,...,xₙ}: Subdivision([a,b])) →
  assert(x₀ = a ∧ xₙ = b) →
  
  defineProperty(P(k)) {
    isDarbouzIntegrable(f,[x₀,xₖ])
  } →
  
  // Base case
  lemma BaseCase() {
    assert(∀i ∈ {1,...,n} ⇒
      isContinuousOn(f,(x_{i-1},xᵢ)) ∧
      isBoundedOn(f,[x_{i-1},xᵢ])
    ) →
    apply(BoundedContinuousFunctionIntegrable()) →
    assert(P(1))
  } →
  
  // Inductive step
  lemma InductiveStep() {
    assert(k ≥ 1) →
    assume(P(k)) →
    assert(isContinuousOn(f,(x_{k},x_{k+1})) ∧ 
           isBoundedOn(f,[x_{k},x_{k+1}])) →
    apply(BoundedContinuousFunctionIntegrable()) →
    assert(isDarbouzIntegrable(f,[x_{k},x_{k+1}])) →
    apply(IntegralExistsOnUnionOfIntervals()) →
    assert([x₀,x_{k+1}] = [x₀,x_{k}] ∪ [x_{k},x_{k+1}]) →
    assert(P(k+1))
  } →
  
  apply(MathematicalInduction(P)) →
  assert(isDarbouzIntegrable(f,[a,b]))
}