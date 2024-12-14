theorem ComplexAlgebraRoots() {
  assert(
    ∀z ∈ ℂ: z^2(1 - z^2) = 16 ↔ z ∈ {±3/2 ± (√7/2)i}
  )
}

proof ComplexAlgebraRoots() {
  setVar(w: ℂ) →
  assert(w := z^2) →
  
  assert(w(1 - w) = 16) →
  assert(w^2 - w + 16 = 0) →
  
  lemma QuadraticFormula() {
    assert(w = (1 ± √(1^2 - 4×1×16))/2)
  } →
  apply(QuadraticFormula()) →
  
  assert(w = (1 ± 3√(-7))/2) →
  assert(w = 1/2 ± (3/2)√7i) →
  
  setVar(p, q: ℝ) →
  assert((p + qi)^2 = 1/2 ± (3/2)√7i) →
  assert(p^2 - q^2 + 2pqi = 1/2 ± (3/2)√7i) →
  
  assert(p^2 - q^2 = 1/2) ∧
  assert(2pq = ±(3/2)√7) →
  
  assert(q = (1 ± 3√(-7))/(4p)) →
  assert(p^2 - ((1 ± 3√(-7))/(4p))^2 = 16) →
  
  lemma AlgebraicSolution() {
    assert(p + qi = ±3/2 ± (√7/2)i)
  } →
  apply(AlgebraicSolution()) →
  
  assert(z = ±3/2 ± (√7/2)i)
}