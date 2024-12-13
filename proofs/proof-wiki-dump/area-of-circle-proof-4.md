theorem Circle_Area() {
  assert(
    ∀r ∈ ℝ⁺ ⇒ Area(circle(r)) = πr²
  )
} ↔

proof Circle_Area() {
  setVar(r: ℝ⁺) →
  assert(Area = ∬dA) →
  apply(PolarCoordinates()) →
  assert(∬dA = ∫₀ʳ∫₀²ᵖⁱ t dt dθ) →
  apply(IntegrationOrder()) →
  assert(∫₀ʳ∫₀²ᵖⁱ t dt dθ = ∫₀ʳ(tθ|₀²ᵖⁱ)dt) →
  apply(EvaluateInnerIntegral()) →
  assert(∫₀ʳ(tθ|₀²ᵖⁱ)dt = ∫₀ʳ 2πt dt) →
  apply(IntegrationByParts()) →
  assert(∫₀ʳ 2πt dt = 2π(½t²|₀ʳ)) →
  apply(EvaluateIntegral()) →
  assert(2π(½t²|₀ʳ) = 2π(½r²)) →
  apply(Simplify()) →
  assert(2π(½r²) = πr²)
}