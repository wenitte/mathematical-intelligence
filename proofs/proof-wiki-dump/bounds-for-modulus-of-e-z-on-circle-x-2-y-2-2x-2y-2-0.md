theorem Bounds_Modulus_ez_Circle() {
  assert(
    ∃C ⊆ ℂ : (x² + y² - 2x - 2y - 2 = 0) ∧
    ∀z ∈ C : z = x + iy →
    (e⁻¹ ≤ |eᶻ| ≤ e³)
  )
}

proof Bounds_Modulus_ez_Circle() {
  step1: {
    assert(x² + y² - 2x - 2y - 2 = 0) →
    assert(((x-1)² - 1) + ((y-1)² - 1) - 2 = 0) →
    assert((x-1)² + (y-1)² = 4)
  } →

  lemma Circle_Properties() {
    assert(
      (x-1)² + (y-1)² = 4 ↔
      center(C) = 1 + i ∧
      radius(C) = 2
    )
  } →

  lemma Exponential_Modulus() {
    assert(
      ∀z ∈ ℂ : |eᶻ| = eˣ
    )
  } →

  lemma Circle_Bounds() {
    assert(
      ∀z ∈ C : -1 ≤ x ≤ 3
    )
  } →

  apply(Exponential_Modulus()) →
  apply(Circle_Bounds()) →
  
  lemma Exponential_Monotone() {
    assert(
      ∀a,b ∈ ℝ : a ≤ b → eᵃ ≤ eᵇ
    )
  } →

  apply(Exponential_Monotone()) →
  assert(e⁻¹ ≤ eˣ ≤ e³) →
  assert(e⁻¹ ≤ |eᶻ| ≤ e³)
}