theorem Cesaro_Mean() {
  assert(
    ∀{aₙ} ∈ ℂℕ,
    (limₙ→∞ aₙ = ℓ) ⇒ 
    (limₙ→∞ (∑ᵢ₌₁ⁿ aᵢ)/n = ℓ)
  )
} ↔

proof Cesaro_Mean() {
  setVar({aₙ}: ℂℕ, ℓ: ℂ) →
  assume(limₙ→∞ aₙ = ℓ) →
  
  lemma Triangle_Inequality() {
    assert(
      ∀n₀ ∈ ℕ, ∀n > n₀:
      |((∑ᵢ₌₁ⁿ aᵢ)/n) - ℓ| ≤ 
      (n₀·supₖ≤ₙ₀ |aₖ - ℓ|)/n + 
      supₙ₀<ₖ≤ₙ |aₖ - ℓ|
    )
  } →

  apply(Triangle_Inequality()) →
  
  assert(
    limsupₙ→∞ |((∑ᵢ₌₁ⁿ aᵢ)/n) - ℓ| ≤
    supₖ>ₙ₀ |aₖ - ℓ|
  ) →
  
  assert(
    limₙ₀→∞ supₖ>ₙ₀ |aₖ - ℓ| = 0
  ) →
  
  conclude(
    limsupₙ→∞ |((∑ᵢ₌₁ⁿ aᵢ)/n) - ℓ| = 0 ⇒
    limₙ→∞ ((∑ᵢ₌₁ⁿ aᵢ)/n) = ℓ
  )
}