theorem AdaptedStochasticSupermartingale() {
  let(Ω, Σ, {ℱₜ}_{t≥0}, ℙ: FilteredProbabilitySpace) →
  let({Xₜ}_{t≥0}: StochasticProcess) →
  assert(
    isAdapted({Xₜ}_{t≥0}, {ℱₜ}_{t≥0}) ↔
    (isSupermartingale({Xₜ}_{t≥0}) ↔ isSubmartingale({-Xₜ}_{t≥0}))
  )
}

proof AdaptedStochasticSupermartingale() {
  // Establish adaptedness of -Xₜ
  assume(isAdapted({Xₜ}_{t≥0}, {ℱₜ}_{t≥0})) →
  assert(∀t ∈ [0,∞): isMeasurable(Xₜ, ℱₜ)) →
  
  lemma ScalarMeasurable() {
    assert(∀t ∈ [0,∞): isMeasurable(Xₜ, ℱₜ) → isMeasurable(-Xₜ, ℱₜ))
  } →
  
  apply(ScalarMeasurable()) →
  assert(isAdapted({-Xₜ}_{t≥0}, {ℱₜ}_{t≥0})) →
  
  // Conditional expectation equivalence
  setVar(s,t: ℝ) →
  assume(0 ≤ s < t) →
  
  lemma ConditionalExpectationLinear() {
    assert(
      ℙ(𝔼[Xₜ|ℱₛ] ≤ Xₛ) = 1 ↔ ℙ(𝔼[-Xₜ|ℱₛ] ≥ -Xₛ) = 1
    )
  } →
  
  apply(ConditionalExpectationLinear()) →
  assert(
    isSupermartingale({Xₜ}_{t≥0}) ↔ isSubmartingale({-Xₜ}_{t≥0})
  )
}