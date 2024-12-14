theorem CompleteEllipticIntegralFirstKind() {
  assert(
    ∀k ∈ ℝ: |k| < 1 ⇒
    K(k) = ∫[0 to π/2](dφ/√(1-k²sin²φ)) = 
    (π/2)∑[i≥0]((∏[j=1 to i]((2j-1)/(2j)))²k^(2i))
  )
} ↔

proof CompleteEllipticIntegralFirstKind() {
  lemma SinePowerIntegral() {
    assert(
      ∀i ∈ ℕ ⇒ 
      ∫[0 to π/2](sin^(2i)φ dφ) = 
      ((2i-1)/(2i))∫[0 to π/2](sin^(2i-2)φ dφ)
    )
  } →

  assert(
    ∫[0 to π/2](sin^(2i)φ dφ) = 
    (π/2)∏[j=1 to i]((2j-1)/(2j))
  ) →

  setVar(k: ℝ, |k| < 1) →
  
  assert(
    K(k) = ∫[0 to π/2](dφ/√(1-k²sin²φ))
  ) →

  apply(GeneralBinomialTheorem) →
  assert(
    K(k) = ∫[0 to π/2](∑[i≥0](((-1/2) choose i)(-k²sin²φ)^i) dφ)
  ) →

  apply(BinomialCoeffDefinition) →
  assert(
    K(k) = ∑[i≥0](k^(2i)∏[j=1 to i]((1-2j)/(2j))(-1)^i ∫[0 to π/2](sin^(2i)φ dφ))
  ) →

  apply(SinePowerIntegral()) →
  assert(
    K(k) = ∑[i≥0](k^(2i)∏[j=1 to i]((1-2j)/(2j))(-1)^i (π/2)∏[j=1 to i]((2j-1)/(2j)))
  ) →

  simplify() →
  assert(
    K(k) = (π/2)∑[i≥0]((∏[j=1 to i]((2j-1)/(2j)))²k^(2i))
  )
}