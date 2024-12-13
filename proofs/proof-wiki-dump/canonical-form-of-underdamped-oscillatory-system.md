theorem Underdamped_Oscillatory_System() {
  assert(
    ∀(a,b ∈ ℝ>0) ∧ (b < a) ∧
    (d²x/dt² + 2b(dx/dt) + a²x = 0) →
    ∃(x = (x₀a/α)e⁻ᵇᵗcos(αt - θ)) ∧
    (α = √(a² - b²)) ∧
    (θ = arctan(b/α))
  )
}

proof Underdamped_Oscillatory_System() {
  setVar(a,b: ℝ>0) →
  assert(b < a) →
  
  lemma Complex_Roots() {
    assert(m² + 2bm + a² = 0) →
    assert(m₁ = -b + i√(a² - b²)) ∧
    assert(m₂ = -b - i√(a² - b²))
  } →

  apply(Complex_Roots()) →
  setVar(α = √(a² - b²)) →
  assert(x = e⁻ᵇᵗ(C₁cos(αt) + C₂sin(αt))) →

  lemma Initial_Conditions() {
    assert(t = 0) →
    assert(x = x₀) ∧ (dx/dt = 0) →
    assert(x₀ = C₁) →
    assert(0 = -bC₁ + αC₂) →
    assert(C₂ = (bx₀)/α)
  } →

  apply(Initial_Conditions()) →
  assert(x = e⁻ᵇᵗ(x₀cos(αt) + (bx₀/α)sin(αt))) →
  assert(x = (x₀/α)e⁻ᵇᵗ(αcos(αt) + bsin(αt))) →

  lemma Trigonometric_Form() {
    assert(αcos(αt) + bsin(αt) = √(α² + b²)cos(αt - arctan(b/α))) →
    assert(√(α² + b²) = √((a² - b²) + b²) = a)
  } →

  apply(Trigonometric_Form()) →
  setVar(θ = arctan(b/α)) →
  assert(x = (x₀a/α)e⁻ᵇᵗcos(αt - θ))
}