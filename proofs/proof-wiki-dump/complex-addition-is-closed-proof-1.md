theorem Complex_Addition_Closed() {
  assert(
    ∀z,w ∈ ℂ ⇒ (z + w ∈ ℂ)
  )
} ↔

proof Complex_Addition_Closed() {
  setVar(z,w: ℂ) →
  assert(z = x₁ + iy₁ ∧ w = x₂ + iy₂ where x₁,x₂,y₁,y₂ ∈ ℝ) →
  
  lemma Complex_Addition_Definition() {
    assert(
      z + w = (x₁ + x₂) + i(y₁ + y₂)
    )
  } →
  
  lemma Real_Addition_Closed() {
    assert(
      ∀a,b ∈ ℝ ⇒ (a + b ∈ ℝ)
    )
  } →
  
  apply(Complex_Addition_Definition()) →
  apply(Real_Addition_Closed()) →
  
  assert(
    (x₁ + x₂) ∈ ℝ ∧ (y₁ + y₂) ∈ ℝ
  ) →
  
  assert(
    (x₁ + x₂) + i(y₁ + y₂) ∈ ℂ
  )
}