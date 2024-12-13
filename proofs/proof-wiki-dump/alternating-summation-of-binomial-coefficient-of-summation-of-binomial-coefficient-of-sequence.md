theorem AlternatingSummationBinomialCoefficient() {
  assert(
    ∀n ∈ ℕ, ∀(aₙ, bₙ) ∈ ℝ² : 
    [aₙ = ∑ᵣ₌₀ⁿ (ⁿᵣ)bᵣ] ⇒
    [((-1)ⁿ)bₙ = ∑ₛ₌₀ⁿ (ⁿₛ)((-1)ˢ)aₛ]
  )
} ↔

proof AlternatingSummationBinomialCoefficient() {
  setVar(n: ℕ, aₙ: ℝ, bₙ: ℝ) →
  
  assert(∑ₛ₌₀ⁿ (ⁿₛ)((-1)ˢ)aₛ) →
  apply(SubstituteAₙDefinition) →
  
  assert(∑ₛ₌₀ⁿ (ⁿₛ)((-1)ˢ)(∑ᵣ₌₀ˢ (ˢᵣ)bᵣ)) →
  apply(ReindexSummation) →
  
  assert(∑ₛ₌₀ⁿ ∑_{r≤0≤n, s≥r} (ⁿₛ)(ˢᵣ)((-1)ˢ)bᵣ) →
  apply(RearrangeSums) →
  
  assert(∑ᵣ₌₀ⁿ bᵣ ∑ₛ₌ᵣⁿ (n!/(s!(n-s)!)) * (s!/(r!(s-r)!)) * ((-1)ˢ)) →
  apply(SimplifyFactorials) →
  
  assert(∑ᵣ₌₀ⁿ (n!/(r!(n-r)!))bᵣ ∑ₛ₌ᵣⁿ ((n-r)!((-1)ˢ)/((n-s)!(s-r)!))) →
  apply(BinomialNotation) →
  
  assert(∑ᵣ₌₀ⁿ (ⁿᵣ)bᵣ ∑ₛ₌ᵣⁿ (ⁿ⁻ʳₛ⁻ʳ)((-1)ˢ)) →
  apply(ReindexInnerSum) →
  
  assert(∑ᵣ₌₀ⁿ (ⁿᵣ)bᵣ ∑ₛ₌₀ⁿ⁻ʳ (ⁿ⁻ʳₛ)((-1)ˢ⁺ʳ)) →
  
  lemma BinomialTheoremZero() {
    assert(
      ∀k > 1: ∑ₛ₌₀ᵏ (ᵏₛ)((-1)ˢ) = (1-1)ᵏ = 0
    )
  } →
  
  apply(BinomialTheoremZero) →
  assert((-1)ⁿbₙ)
}