theorem Cardinality_Set_Union() {
  assert(
    ∀{Sₙ}_{n∈ℕ} → (
      card(⋃ᵢ₌₁ⁿ Sᵢ) = 
      ∑ᵢ₌₁ⁿ card(Sᵢ) - 
      ∑₁≤ᵢ<ⱼ≤ₙ card(Sᵢ ∩ Sⱼ) +
      ∑₁≤ᵢ<ⱼ<ₖ≤ₙ card(Sᵢ ∩ Sⱼ ∩ Sₖ) +
      ... +
      (-1)ⁿ⁻¹ card(⋂ᵢ₌₁ⁿ Sᵢ)
    )
  )
} ↔

proof Cardinality_Set_Union() {
  setVar(f: 𝒮 → ℝ, additive) →
  
  lemma Inclusion_Exclusion_Principle() {
    assert(
      f(⋃ᵢ₌₁ⁿ Sᵢ) = 
      ∑ᵢ₌₁ⁿ f(Sᵢ) - 
      ∑₁≤ᵢ<ⱼ≤ₙ f(Sᵢ ∩ Sⱼ) +
      ∑₁≤ᵢ<ⱼ<ₖ≤ₙ f(Sᵢ ∩ Sⱼ ∩ Sₖ) +
      ... +
      (-1)ⁿ⁻¹ f(⋂ᵢ₌₁ⁿ Sᵢ)
    )
  } →
  
  assert(Cardinality_Is_Additive()) →
  apply(Inclusion_Exclusion_Principle(), f = card) →
  assert(conclusion)
}