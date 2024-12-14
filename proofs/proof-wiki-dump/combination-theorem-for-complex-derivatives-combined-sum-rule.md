theorem Complex_Derivative_Sum_Rule() {
  assert(
    ∀D ⊆ ℂ[open] ∧
    ∀f,g: D → ℂ[complex_differentiable] ∧
    ∀c,w ∈ ℂ ⇒
    (∀z ∈ D ⇒ 
      (d/dz)(cf + wg)(z) = c(d/dz)f(z) + w(d/dz)g(z))
  )
}

proof Complex_Derivative_Sum_Rule() {
  setVar(D: open_subset(ℂ)) →
  setVar(f,g: D → ℂ) →
  setVar(c,w: ℂ) →
  setVar(z: D) →
  
  assert(c(d/dz)f(z) + w(d/dz)g(z)) →
  
  lemma Complex_Multiple_Rule() {
    assert(
      (d/dz)(cf)(z) = c(d/dz)f(z) ∧
      (d/dz)(wg)(z) = w(d/dz)g(z)
    )
  } →
  
  apply(Complex_Multiple_Rule()) →
  assert((d/dz)(cf)(z) + (d/dz)(wg)(z)) →
  
  lemma Complex_Sum_Rule() {
    assert(
      (d/dz)(cf + wg)(z) = (d/dz)(cf)(z) + (d/dz)(wg)(z)
    )
  } →
  
  apply(Complex_Sum_Rule()) →
  assert((d/dz)(cf + wg)(z))
}