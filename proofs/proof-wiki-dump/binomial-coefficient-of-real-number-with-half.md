theorem Binomial_Coefficient_Real_Half() {
  assert(
    ∀r ∈ ℝ ⇒ (r ∉ {-n/2: n ∈ ℕ}) ⇒ 
    (ᶜᵣ₁/₂ = (2^(2r + 1))/(ᶜ₂ᵣᵣ π))
  )
} ↔

proof Binomial_Coefficient_Real_Half() {
  setVar(r: ℝ) →
  assert(ᶜᵣ₁/₂ = lim(ρ→r)(Γ(ρ+1)/(Γ(1/2+1)Γ(ρ-1/2+1)))) →
  assert(= lim(ρ→r)(Γ(ρ+1)/(1/2·Γ(1/2)Γ(ρ+1/2)))) →
  assert(= lim(ρ→r)(2Γ(ρ+1)/(√π·Γ(ρ+1/2)))) →

  lemma Legendre_Duplication() {
    assert(
      ∀z ∈ ℝ ⇒ (z ∉ {-n/2: n ∈ ℕ}) ⇒
      Γ(z)Γ(z+1/2) = 2^(1-2z)√π·Γ(2z)
    )
  } →

  apply(Legendre_Duplication()) →
  assert(Γ(ρ+1/2) = (2^(1-2ρ)√π·Γ(2ρ))/Γ(ρ)) →
  assert(ᶜᵣ₁/₂ = lim(ρ→r)(2Γ(ρ+1)/(√π·((2^(1-2ρ)√π·Γ(2ρ))/Γ(ρ))))) →
  assert(= lim(ρ→r)(2Γ(ρ+1)Γ(ρ)/(π2^(1-2ρ)Γ(2ρ)))) →
  assert(= lim(ρ→r)(2^(2ρ-1)2Γ(ρ+1)Γ(ρ)/(πΓ(2ρ)))) →
  assert(= lim(ρ→r)(2^(2ρ)/(π(Γ(2ρ)/(Γ(ρ)Γ(ρ+1))))) →
  assert(= lim(ρ→r)(2^(2ρ)/(π(ρΓ(2ρ+1)/(2ρΓ(ρ+1)Γ(ρ+1))))) →
  assert(= lim(ρ→r)(2^(2ρ+1)/(π(Γ(2ρ+1)/(Γ(ρ+1)Γ(ρ+1))))) →
  assert(= (2^(2r+1))/(ᶜ₂ᵣᵣ π))
}