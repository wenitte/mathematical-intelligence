theorem Complex_Division_Conjugate() {
  assert(
    ∀z₁,z₂ ∈ ℂ, z₂ ≠ 0 ⇒
    z₁/z₂ = (z₁z̄₂)/(|z₂|²)
  )
} ↔

proof Complex_Division_Conjugate() {
  setVar(z₁,z₂: ℂ, z₂ ≠ 0) →
  
  assert(
    z₁/z₂ = (z₁/z₂ * z̄₂/z̄₂)
  ) →
  
  lemma Multiplying_By_One() {
    assert(z̄₂/z̄₂ = 1)
  } →
  
  apply(Multiplying_By_One()) →
  
  assert(
    z₁/z₂ = (z₁z̄₂)/(z₂z̄₂)
  ) →
  
  lemma Modulus_Conjugate_Product() {
    assert(
      ∀z ∈ ℂ ⇒ z*z̄ = |z|²
    )
  } →
  
  apply(Modulus_Conjugate_Product(), z := z₂) →
  
  assert(
    z₁/z₂ = (z₁z̄₂)/(|z₂|²)
  )
}