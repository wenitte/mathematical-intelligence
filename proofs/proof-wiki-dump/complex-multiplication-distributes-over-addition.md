theorem ComplexDistributive() {
  assert(
    ∀z₁,z₂,z₃ ∈ ℂ ⇒ (
      (z₁(z₂ + z₃) = z₁z₂ + z₁z₃) ∧
      ((z₂ + z₃)z₁ = z₂z₁ + z₃z₁)
    )
  )
} ↔

proof ComplexDistributive() {
  setVar(z₁,z₂,z₃: ℂ) →
  setDef(z₁ := (x₁,y₁), z₂ := (x₂,y₂), z₃ := (x₃,y₃)) →
  assert(x₁,x₂,x₃,y₁,y₂,y₃ ∈ ℝ) →
  
  compute(z₁(z₂ + z₃)) {
    z₁(z₂ + z₃) =
    (x₁,y₁)((x₂,y₂) + (x₃,y₃)) →
    (x₁,y₁)(x₂ + x₃, y₂ + y₃) →
    (x₁(x₂ + x₃) - y₁(y₂ + y₃), x₁(y₂ + y₃) + y₁(x₂ + x₃)) →
    (x₁x₂ + x₁x₃ - y₁y₂ - y₁y₃, x₁y₂ + x₁y₃ + y₁x₂ + y₁x₃) →
    ((x₁x₂ - y₁y₂) + (x₁x₃ - y₁y₃), (x₁y₂ + y₁x₂) + (x₁y₃ + y₁x₃)) →
    (x₁x₂ - y₁y₂, x₁y₂ + y₁x₂) + (x₁x₃ - y₁y₃, x₁y₃ + y₁x₃) →
    z₁z₂ + z₁z₃
  } →

  lemma SecondEquality() {
    assert((z₂ + z₃)z₁ = z₂z₁ + z₃z₁) →
    apply(ComplexMultiplicationCommutative())
  } →
  
  conclude(
    (z₁(z₂ + z₃) = z₁z₂ + z₁z₃) ∧ ((z₂ + z₃)z₁ = z₂z₁ + z₃z₁)
  )
}