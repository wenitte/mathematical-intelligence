theorem Complex_Multiplication_Transform() {
  assert(
    ∀z₁,z₂ ∈ ℂ where
    z₁ = ⟨r₁,θ₁⟩ ∧
    z₂ = ⟨r₂,θ₂⟩ ∧
    z = z₁z₂ ⇒
    z = Transform(z₁, [rotate(θ₂), scale(r₂)])
  )
} ↔

corollary Rotation_By_Complex_Exponential() {
  assert(
    ∀z ∈ ℂ where z = ⟨r,θ⟩ ∧
    ∀α ∈ ℝ ⇒
    z·eⁱᵅ = Transform(z, rotate(α))
  )
} ↔

proof Complex_Multiplication_Transform() {
  setVar(z₁,z₂: ℂ) →
  assert(z₁ = r₁eⁱᶿ¹) →
  assert(z₂ = r₂eⁱᶿ²) →
  
  lemma Product_In_Exponential_Form() {
    assert(z₁z₂ = r₁r₂eⁱ⁽ᶿ¹⁺ᶿ²⁾)
  } →
  
  apply(Product_In_Exponential_Form()) →
  assert(z = r₁r₂eⁱ⁽ᶿ¹⁺ᶿ²⁾) →
  
  lemma Exponential_Add_Is_Rotation() {
    assert(eⁱ⁽ᶿ¹⁺ᶿ²⁾ ↔ rotate(z₁,θ₂))
  } →
  
  lemma Modulus_Product() {
    assert(|z| = r₁r₂ ↔ scale(z₁,r₂))
  } →
  
  apply(Exponential_Add_Is_Rotation()) →
  apply(Modulus_Product()) →
  assert(z = Transform(z₁, [rotate(θ₂), scale(r₂)]))
}