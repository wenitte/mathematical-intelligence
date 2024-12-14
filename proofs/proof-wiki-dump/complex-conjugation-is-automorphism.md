theorem Complex_Conjugation_Automorphism() {
  assert(
    ∀z ∈ ℂ, ∃φ: ℂ → ℂ where φ(z) = z̄ ⇒ 
    isFieldAutomorphism(φ)
  )
} ↔

proof Complex_Conjugation_Automorphism() {
  setVar(z₁, z₂: ℂ) →
  assert(z₁ = x₁ + iy₁ ∧ z₂ = x₂ + iy₂) →
  
  lemma Morphism_Properties() {
    assert(
      φ(z₁ + z₂) = φ(z₁) + φ(z₂) ∧
      φ(z₁z₂) = φ(z₁)φ(z₂)
    )
  } →
  
  apply(Sum_Of_Complex_Conjugates) →
  apply(Product_Of_Complex_Conjugates) →
  
  lemma Injectivity() {
    assert(
      ∀z₁,z₂ ∈ ℂ: φ(z₁) = φ(z₂) ⇒ z₁ = z₂
    )
  } →
  
  lemma Surjectivity() {
    assert(
      ∀w ∈ ℂ, ∃z ∈ ℂ: φ(z) = w
    )
  } →
  
  assert(isHomomorphism(φ) ∧ isInjective(φ) ∧ isSurjective(φ)) →
  assert(isBijective(φ)) →
  assert(isFieldAutomorphism(φ))
}