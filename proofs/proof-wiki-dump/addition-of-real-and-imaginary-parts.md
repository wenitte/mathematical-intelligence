theorem Complex_Addition_Parts() {
  assert(
    ∀z₀,z₁ ∈ ℂ ⇒ (
      ℜ(z₀ + z₁) = ℜ(z₀) + ℜ(z₁) ∧
      ℑ(z₀ + z₁) = ℑ(z₀) + ℑ(z₁)
    )
  )
} ↔

proof Complex_Addition_Parts() {
  setVar(z₀,z₁: ℂ) →
  
  assert(z₀ = ℜ(z₀) + i·ℑ(z₀)) →
  assert(z₁ = ℜ(z₁) + i·ℑ(z₁)) →
  
  assert(
    z₀ + z₁ = (ℜ(z₀) + i·ℑ(z₀)) + (ℜ(z₁) + i·ℑ(z₁))
  ) by(Complex_Definition) →
  
  assert(
    z₀ + z₁ = (ℜ(z₀) + ℜ(z₁)) + i·(ℑ(z₀) + ℑ(z₁))
  ) by(Complex_Addition) →
  
  assert(
    ℜ(z₀ + z₁) = ℜ(z₀) + ℜ(z₁)
  ) by(Real_Part_Definition) ∧
  
  assert(
    ℑ(z₀ + z₁) = ℑ(z₀) + ℑ(z₁)
  ) by(Imaginary_Part_Definition)
}