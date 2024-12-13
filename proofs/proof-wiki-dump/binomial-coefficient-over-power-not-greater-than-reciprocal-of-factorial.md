theorem Binomial_Coefficient_Power_Bound() {
  assert(
    ∀r ∈ ℝ⁺ ∧ ∀k ∈ ℕ: k ≤ 2r + 1 ⇒
    (ᶜₖ/rᵏ) ≤ 1/k!
  )
} ↔

proof Binomial_Coefficient_Power_Bound() {
  setVar(r: ℝ⁺) →
  setVar(k: ℕ) →
  
  assert((ᶜₖ/rᵏ) = (1/k!) · (r↓ᵏ/rᵏ)) →
  apply(Binomial_Coefficient_Definition()) →
  
  assert((r↓ᵏ/rᵏ) = ∏ᵏ⁻¹ⱼ₌₀(r-j)/r) →
  apply(Falling_Factorial_Definition()) →
  
  assert(|(ᶜₖ/rᵏ)| = (1/k!) · ∏ᵏ⁻¹ⱼ₌₀|r-j|/r) →
  apply(Absolute_Value_Multiplicative()) →
  
  lemma Bound_Check() {
    assert(
      ∀j ∈ [0,k-1]: 
      (0 ≤ j ≤ 2r) →
      (-r ≤ j-r ≤ r) →
      |r-j|/r ≤ 1
    )
  } →
  
  apply(Bound_Check()) →
  apply(Absolute_Value_Negative()) →
  
  assert((ᶜₖ/rᵏ) ≤ |(ᶜₖ/rᵏ)| ≤ 1/k!)
}