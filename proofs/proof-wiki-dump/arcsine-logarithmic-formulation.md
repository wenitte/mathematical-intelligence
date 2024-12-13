theorem Arcsine_Logarithmic_Formulation() {
  assert(
    ∀x ∈ ℝ: -1 ≤ x ≤ 1 ⇒ 
    arcsin(x) = (1/i)ln(ix + √(1 - x²))
    where i² = -1
  )
} ↔

proof Arcsine_Logarithmic_Formulation() {
  setVar(y ∈ ℝ: -π/2 ≤ y ≤ π/2) →
  assert(y = arcsin(x)) →
  assert(x = sin(y)) →
  
  lemma Euler_Sine() {
    assert(sin(y) = (1/(2i))(e^(iy) - e^(-iy)))
  } →
  apply(Euler_Sine()) →
  
  assert(x = (1/(2i))(e^(iy) - e^(-iy))) →
  assert(2ix = e^(iy) - e^(-iy)) →
  assert(2ixe^(iy) = e^(2iy) - 1) →
  assert(e^(2iy) - 2ixe^(iy) = 1) →
  assert(e^(2iy) - 2ixe^(iy) - x² = 1 - x²) →
  assert((e^(iy) - ix)² = 1 - x²) →
  assert(e^(iy) - ix = √(1 - x²)) →
  assert(iy = ln(ix + √(1 - x²))) →
  assert(y = (1/i)ln(ix + √(1 - x²))) →
  assert(arcsin(x) = (1/i)ln(ix + √(1 - x²)))
}