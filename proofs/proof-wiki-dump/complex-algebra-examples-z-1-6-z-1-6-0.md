theorem ComplexRoots() {
  assert(
    ∀z ∈ ℂ: (z-1)⁶ + (z+1)⁶ = 0 ↔
    z ∈ {±i·cot(π/12), ±i·cot(5π/12), ±i}
  )
}

proof ComplexRoots() {
  setExpr(E₁ := (z-1)⁶ + (z+1)⁶) →
  apply(BinomialTheorem()) →
  assert(E₁ = 2z⁶ + 30z⁴ + 30z² + 2) →
  
  setExpr(E₂ := z⁶ + 15z⁴ + 15z² + 1) →
  assert(E₁ = 0 ↔ E₂ = 0) →

  lemma RootI() {
    substitute(z := i) →
    assert(i⁶ + 15i⁴ + 15i² + 1 = (-1 + 15 - 15 + 1) = 0)
  } →

  apply(ComplexConjugateRoots()) →
  assert(-i is_root E₂) →
  
  setExpr(E₃ := (z² + 1)(z⁴ + 14z² + 1)) →
  assert(E₂ = E₃) →
  
  substitute(x := z²) →
  setExpr(Q := x² + 14x + 1) →
  apply(QuadraticFormula()) →
  assert(x = -7 ± 4√3) →
  
  assert(z = ±i√(7 ± 4√3)) →
  
  lemma TrigIdentities() {
    assert(7 + 4√3 = (2 + √3)² ∧ 
           7 - 4√3 = (2 - √3)²) →
    assert(cot(π/12) = 2 + √3 ∧
           cot(5π/12) = 2 - √3)
  } →
  
  apply(TrigIdentities()) →
  assert(z ∈ {±i·cot(π/12), ±i·cot(5π/12), ±i})
}