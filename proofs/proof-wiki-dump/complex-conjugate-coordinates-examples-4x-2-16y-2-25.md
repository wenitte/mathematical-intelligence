theorem ComplexConjugateEllipse() {
  assert(
    ∀x,y ∈ ℝ : 4x² + 16y² = 25 ↔ 
    ∃z ∈ ℂ : 3(z² + z̄²) - 10zz̄ + 25 = 0
  )
}

proof ComplexConjugateEllipse() {
  setVar(a,b: ℝ) →
  
  lemma StandardForm() {
    assert(4x² + 16y² = 25 ↔ a(x² + y²) + 2b(x² - y²) = 25) →
    assert(a + 2b = 4) ∧
    assert(a - 2b = 16) →
    assert(2a = 20) →
    assert(a = 10) →
    assert(2b = -6) →
    assert(b = -3)
  }

  lemma ComplexIdentities() {
    assert(x² + y² = zz̄) ∧
    assert(2(x² - y²) = z² + z̄²)
  }

  apply(StandardForm()) →
  apply(ComplexIdentities()) →
  
  assert(4x² + 16y² = 25) →
  assert(10(x² + y²) + 2(-3)(x² - y²) = 25) →
  assert(10zz̄ - 3(z² + z̄²) = 25) →
  assert(3(z² + z̄²) - 10zz̄ + 25 = 0)
}