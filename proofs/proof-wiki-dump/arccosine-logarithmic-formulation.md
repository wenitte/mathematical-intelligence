theorem Arccosine_Logarithmic_Formulation() {
  assert(
    ∀x ∈ ℝ: -1 ≤ x ≤ 1 ⇒
    arccos(x) = (1/i)ln(x + √(x² - 1))
  )
} ↔

proof Arccosine_Logarithmic_Formulation() {
  setVar(y ∈ ℝ: 0 ≤ y ≤ π) →
  assert(y = arccos(x)) →
  assert(x = cos(y)) →
  
  lemma Euler_Cosine() {
    assert(cos(y) = (1/2)(e⁻ⁱʸ + eⁱʸ))
  } →
  
  apply(Euler_Cosine()) →
  assert(x = (1/2)(e⁻ⁱʸ + eⁱʸ)) →
  assert(2x = e⁻ⁱʸ + eⁱʸ) →
  assert(2x·eⁱʸ = 1 + e²ⁱʸ) →
  assert(e²ⁱʸ - 2x·eⁱʸ = -1) →
  assert(e²ⁱʸ - 2x·eⁱʸ + x² = x² - 1) →
  assert((eⁱʸ - x)² = x² - 1) →
  assert(eⁱʸ - x = √(x² - 1)) →
  assert(eⁱʸ = x + √(x² - 1)) →
  assert(iy = ln(x + √(x² - 1))) →
  assert(y = (1/i)ln(x + √(x² - 1))) →
  
  conclude(arccos(x) = (1/i)ln(x + √(x² - 1)))
}