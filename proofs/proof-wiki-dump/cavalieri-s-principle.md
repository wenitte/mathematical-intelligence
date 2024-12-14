theorem Cavalieri_Principle() {
  assert(
    ∀S₁,S₂: Solid ∧
    height(S₁) = height(S₂) ∧
    ∀x∈[0,H]: area(section(S₁,x)) = area(section(S₂,x)) →
    volume(S₁) = volume(S₂)
  )
} ↔

proof Cavalieri_Principle() {
  setVar(H: ℝ = height(S₁) = height(S₂)) →
  setVar(V₁ = volume(S₁) = λ³(S₁)) →
  setVar(V₂ = volume(S₂) = λ³(S₂)) →

  assert(
    V₁ = ∫_ℝ³ χ_{S₁} dλ³
  ) →

  lemma Fubini_Application() {
    assert(
      ∫_ℝ³ χ_{S₁} dλ³ = 
      ∫_ℝ×ℝ² χ_{S₁} d(λ×λ²) =
      ∫_ℝ ∫_ℝ² (χ_{S₁})_x dλ² dλ =
      ∫_[0,H] ∫_ℝ² (χ_{S₁})_x dλ² dλ
    )
  } →

  apply(Fubini_Application()) →

  assert(
    V₂ = ∫_[0,H] ∫_ℝ² (χ_{S₂})_x dλ² dλ
  ) →

  lemma Section_Areas() {
    assert(
      ∀x₀∈[0,H]: 
      area(S₁∩P_{x=x₀}) = λ²(S₁∩P_{x=x₀}) = 
      ∫_ℝ² (χ_{S₁})_{x=x₀} dλ² =
      ∫_ℝ² (χ_{S₂})_{x=x₀} dλ² =
      area(S₂∩P_{x=x₀})
    )
  } →

  apply(Section_Areas()) →

  assert(
    ∀x∈[0,H]: ∫_ℝ² (χ_{S₁})_x dλ² = ∫_ℝ² (χ_{S₂})_x dλ²
  ) →

  conclude(
    V₁ = ∫_[0,H] ∫_ℝ² (χ_{S₁})_x dλ² dλ =
    ∫_[0,H] ∫_ℝ² (χ_{S₂})_x dλ² dλ = V₂
  )
}