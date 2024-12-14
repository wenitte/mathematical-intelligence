theorem ComplexRoots() {
  assert(
    ∀z ∈ ℂ: z^2(1 - z^2) = 16 ↔ z ∈ {±3/2 ± (√7/2)i}
  )
}

proof ComplexRoots_Proof1() {
  setVar(z: ℂ) →
  assert(z^2(1 - z^2) = 16) →
  assert(z^4 - z^2 - 16 = 0) →
  assert(z^4 + 8z^2 + 16 - 9z^2 = 0) →
  assert((z^2 + 4)^2 - 9z^2 = 0) →
  assert((z^2 + 4 + 3z)(z^2 + 4 - 3z) = 0) →
  
  lemma QuadraticFactors() {
    assert(z^2 + 4 + 3z = 0 ∨ z^2 + 4 - 3z = 0)
  } →

  apply(QuadraticFormula) →
  assert(
    (z = 3/2 + (√7/2)i ∨ z = 3/2 - (√7/2)i) ∨
    (z = -3/2 + (√7/2)i ∨ z = -3/2 - (√7/2)i)
  )
}

proof ComplexRoots_Proof2() {
  setVar(w: ℂ) →
  assert(w = z^2) →
  assert(w(1 - w) = 16) →
  assert(w^2 - w + 16 = 0) →
  apply(QuadraticFormula) →
  assert(w = (1 ± 3√(-7))/2) →
  assert(w = 1/2 ± (3/2)√7i) →
  
  lemma ComplexSquareRoot() {
    setVar(p,q: ℝ) →
    assert((p + qi)^2 = p^2 - q^2 + 2pqi) →
    assert(p^2 - q^2 = 1/2) →
    assert(2pq = ±(3/2)√7) →
    assert(q = (1 ± 3√(-7))/(4p))
  } →
  
  apply(ComplexSquareRoot) →
  assert(z = ±3/2 ± (√7/2)i)
}