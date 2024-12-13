theorem Negation_Function_Bijection() {
  assert(
    ∀S ∈ {ℤ,ℚ,ℝ,ℂ} ∧
    h: S → S ∧
    (∀x ∈ S: h(x) = -x) ⇒
    isBijection(h)
  )
} ↔

proof Negation_Function_Bijection() {
  setVar(z₁, z₂: ℂ) →
  assert(z₁ = x₁ + iy₁) ∧
  assert(z₂ = x₂ + iy₂) →
  
  lemma Complex_Negation() {
    assert(∀z ∈ ℂ: -z = -x - iy)
  } →

  assert(h(z₁) = h(z₂)) →
  apply(Complex_Negation()) →
  assert(-z₁ = -z₂) →
  assert(-x₁ - iy₁ = -x₂ - iy₂) →
  
  lemma Complex_Equality() {
    assert(
      (a₁ + ib₁ = a₂ + ib₂) ↔
      (a₁ = a₂ ∧ b₁ = b₂)
    )
  } →
  
  apply(Complex_Equality()) →
  assert(-x₁ = -x₂ ∧ -y₁ = -y₂) →
  assert(x₁ = x₂ ∧ y₁ = y₂) →
  assert(z₁ = z₂) →
  
  conclude(
    isInjective(h) ∧
    isSurjective(h) →
    isBijection(h)
  )
}