theorem AdaptedStochasticProcess_SuperSub() {
  let(Ω, Σ, {ℱₙ}_{n≥0}, ℙ: FilteredProbSpace) →
  let({Xₙ}_{n≥0}: StochasticProcess) →
  assert(
    isAdapted({Xₙ}_{n≥0}, {ℱₙ}_{n≥0}) ↔
    (isSupermartingale({Xₙ}_{n≥0}) ↔ isSubmartingale({-Xₙ}_{n≥0}))
  )
}

proof AdaptedStochasticProcess_SuperSub() {
  setVar({Xₙ}_{n≥0}: AdaptedProcess) →
  
  lemma Measurability() {
    assert(∀n∈ℕ: isMeasurable(Xₙ, ℱₙ)) →
    apply(ScalarMultipleMeasurable) →
    assert(∀n∈ℕ: isMeasurable(-Xₙ, ℱₙ))
  } →
  
  assert(isAdaptedProcess({-Xₙ}_{n≥0}, {ℱₙ}_{n≥0})) →
  
  lemma ConditionalExpectation() {
    apply(ConditionalExpectationLinear) →
    assert(
      ∀n∈ℕ: (𝔼[Xₙ₊₁|ℱₙ] ≤ Xₙ a.s.) ↔
      (𝔼[-Xₙ₊₁|ℱₙ] ≥ -Xₙ a.s.)
    )
  } →
  
  assert(
    isSupermartingale({Xₙ}_{n≥0}) ↔ isSubmartingale({-Xₙ}_{n≥0})
  )
}