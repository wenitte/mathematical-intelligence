theorem CharacterizationCompleteNormedQuotient() {
  let X: NormedVectorSpace,
  let N: ClosedLinearSubspace(X),
  let X/N: QuotientVectorSpace(X, N)
  assert(
    isBanachSpace(X, ∥·∥ₓ) ↔ 
    (isBanachSpace(N, ∥·∥ₙ) ∧ isBanachSpace(X/N, ∥·∥_{X/N}))
  )
} ↔

proof CharacterizationCompleteNormedQuotient() {
  let π: QuotientMapping(X → X/N) →

  // Necessary Condition
  assume(isBanachSpace(X)) →
  assert(isBanachSpace(N)) by ClosedSubspaceBanach() →
  
  // Show X/N is Banach
  forall({xₙ} ∈ X) →
  assume(∑∥π(xₙ)∥_{X/N} < ∞) →
  exists(zₙ ∈ N): (
    ∥π(xₙ)∥_{X/N} ≤ ∥xₙ - zₙ∥ₓ ≤ ∥π(xₙ)∥_{X/N} + 2⁻ⁿ
  ) →
  assert(∑2⁻ⁿ = 1) by GeometricSeries() →
  assert(∑∥xₙ - zₙ∥ₓ < ∞) →
  exists(s ∈ X): (
    lim(N→∞)[∑ᴺₙ₌₁(xₙ - zₙ) = s]
  ) →
  assert(π(∑(xₙ - zₙ)) = ∑π(xₙ)) by QuotientMappingLinear() →
  assert(π continuous) by QuotientMappingBounded() →
  conclude(∑π(xₙ) = π(s)) →

  // Sufficient Condition
  assume(isBanachSpace(N) ∧ isBanachSpace(X/N)) →
  forall({xₙ} Cauchy in X) →
  assert({π(xₙ)} Cauchy in X/N) by BoundedLinearPreservesCauchy() →
  exists(x ∈ X): π(xₙ) → π(x) →
  exists(z ∈ N): (
    construct({zₙ} ∈ N): ∥xₘₙ - x - zₙ∥ₓ < 2⁻ⁿ →
    prove({zₙ} Cauchy) →
    assert(zₙ → z) →
    prove(xₙ → x + z)
  ) →
  conclude(isBanachSpace(X))
}