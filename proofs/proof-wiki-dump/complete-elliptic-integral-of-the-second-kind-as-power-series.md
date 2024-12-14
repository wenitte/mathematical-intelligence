theorem CompleteEllipticIntegralSecondKindPowerSeries() {
  assert(
    ∀k ∈ ℝ ⇒ E(k) = ∫₀^(π/2) √(1 - k²sin²φ)dφ 
    ↔ 
    E(k) = (π/2)∑_{i≥0}(∏_{j=1}^i ((2j-1)/(2j)))² (k^(2i))/(1-2i)
  )
}

proof CompleteEllipticIntegralSecondKindPowerSeries() {
  lemma SinePowerIntegral() {
    assert(
      ∀i ∈ ℕ ⇒ ∫₀^(π/2) sin²ⁱφ dφ = ((2i-1)/(2i))∫₀^(π/2) sin^(2i-2)φ dφ
    )
  } →

  setVar(i: ℕ) →
  assert(
    ∫₀^(π/2) sin²ⁱφ dφ = (π/2)∏_{j=1}^i ((2j-1)/(2j))
  ) →

  apply(GeneralBinomialTheorem) →
  assert(
    E(k) = ∫₀^(π/2) √(1 - k²sin²φ)dφ
    ↔ 
    E(k) = ∫₀^(π/2) ∑_{i≥0} (1/2;i)(-k²sin²φ)ⁱ dφ
  ) →

  apply(BinomialCoefficient) →
  assert(
    E(k) = ∑_{i≥0} k^(2i)(∏_{j=1}^i ((3-2j)/(2j)))(-1)ⁱ∫₀^(π/2) sin²ⁱφ dφ
  ) →

  apply(SinePowerIntegral) →
  assert(
    E(k) = (π/2)∑_{i≥0}(∏_{j=1}^i ((2j-3)/(2j)))(∏_{j=1}^i ((2j-1)/(2j)))k^(2i)
  ) →

  assert(
    E(k) = (π/2) + (π/2)∑_{i≥1}(∏_{j=1}^i ((2j-3)/(2j)))(∏_{j=1}^i ((2j-1)/(2j)))k^(2i)
  ) →

  assert(
    E(k) = (π/2)∑_{i≥0}(∏_{j=1}^i ((2j-1)/(2j)))² (k^(2i))/(1-2i)
  )
}