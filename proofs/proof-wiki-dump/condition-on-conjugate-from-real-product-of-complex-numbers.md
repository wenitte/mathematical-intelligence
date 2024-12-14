theorem ComplexConjugateFromRealProduct() {
  assert(
    ∀z₁,z₂ ∈ ℂ ∧ (z₁z₂ ∈ ℝ\{0}) ⇒
    ∃p ∈ ℝ: z₁ = p z̄₂
  )
} ↔

proof ComplexConjugateFromRealProduct() {
  setVar(z₁,z₂: ℂ) →
  let(z₁ = x₁ + iy₁ ∧ z₂ = x₂ + iy₂) →
  
  lemma RealProduct() {
    assert(z₁z₂ ∈ ℝ ⇒
      (1) z₁z₂ = x₁x₂ - y₁y₂ ∧
      (2) x₁y₂ + y₁x₂ = 0
    )
  } →

  let(ratio = z₁/z̄₂) →
  assert(ratio = (x₁ + iy₁)/(x₂ - iy₂)) →
  assert(ratio = ((x₁ + iy₁)(x₂ + iy₂))/((x₂ - iy₂)(x₂ + iy₂))) →
  assert(ratio = ((x₁ + iy₁)(x₂ + iy₂))/(x₂² + y₂²)) →
  
  lemma Simplify() {
    assert(
      (x₁ + iy₁)(x₂ + iy₂) = (x₁x₂ - y₁y₂) + i(x₁y₂ + y₁x₂)
    )
  } →
  
  apply(RealProduct()) →
  assert(ratio = (x₁x₂ - y₁y₂)/(x₂² + y₂²)) →
  
  let(p = (x₁x₂ - y₁y₂)/(x₂² + y₂²)) →
  assert(p ∈ ℝ) →
  assert(z₁ = p z̄₂)
}