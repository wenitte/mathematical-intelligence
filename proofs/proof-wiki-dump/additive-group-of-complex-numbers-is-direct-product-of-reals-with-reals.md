theorem Complex_Additive_Group_Isomorphism() {
  assert(
    ∀G₁,G₂(
      (G₁ = ⟨ℂ,+⟩ ∧ G₂ = ⟨ℝ,+⟩) →
      (G₂ × G₂ ≅ G₁)
    )
  )
} ↔

proof Complex_Additive_Group_Isomorphism() {
  setMap(φ: ℝ×ℝ → ℂ) →
  assert(φ(x,y) = x + yi) →
  
  lemma Homomorphism_Proof() {
    setVar(a,b,c,d: ℝ) →
    assert(
      φ(a,b) + φ(c,d) 
      = (a + bi) + (c + di)
      = (a + c) + (b + d)i 
      = φ(a + c, b + d)
      = φ((a,b) + (c,d))
    )
  } →

  lemma Bijective_Proof() {
    setMap(φ⁻¹: ℂ → ℝ×ℝ) →
    assert(φ⁻¹(z) = (Re(z), Im(z))) →
    assert(
      ∀z∈ℂ(
        φ(φ⁻¹(z)) = φ(Re(z), Im(z)) = Re(z) + i·Im(z) = z
      )
    ) ∧
    assert(
      ∀a,b∈ℝ(
        φ⁻¹(φ(a,b)) = φ⁻¹(a + bi) = (a,b)
      )
    )
  } →

  apply(Homomorphism_Proof()) →
  apply(Bijective_Proof()) →
  assert(
    φ is_isomorphism ∧ ⟨ℝ,+⟩×⟨ℝ,+⟩ ≅ ⟨ℂ,+⟩
  )
}