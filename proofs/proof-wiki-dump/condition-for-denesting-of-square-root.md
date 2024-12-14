theorem DenestingSquareRoot() {
  assert(
    ∀a,b ∈ ℚ≥0 ∧ √b ∉ ℚ →
    (∃p,q ∈ ℚ: √(a + √b) = √p + √q) ↔
    (∃n ∈ ℚ: a² - b = n²)
  )
}

lemma SquareRootEquality() {
  assert(
    ∀a,b,c,d ∈ ℚ≥0 ∧ √b ∉ ℚ →
    (√(a + √b) = √(c + √d)) → (a = c ∧ b = d)
  )
}

proof DenestingSquareRoot() {
  // Necessary condition
  setVar(p,q ∈ ℚ) →
  assume(√(a + √b) = √p + √q) →
  assert(√p + √q = √(p + q + √(4pq))) by SquareOfSum() →
  apply(SquareRootEquality()) →
  assert(a = p + q) →
  assert(b = 4pq) →
  
  assert(0 = b - 4pq) →
  assert(0 = b - 4p(a - p)) →
  assert(0 = b - 4ap + 4p²) →
  
  apply(QuadraticFormula()) →
  assert(p = (a/2) ± (√(a² - b))/2) →
  assert(p ∈ ℚ → √(a² - b) ∈ ℚ) →
  assert(∃n ∈ ℚ: n² = a² - b) →

  // Sufficient condition
  setVar(n ∈ ℚ) →
  assume(n² = a² - b) →
  assert(a² = b + n² → a ≥ √b) →
  
  assert(√(a + √b) = √((a/2) + (√(a² - b))/2) + √((a/2) - (√(a² - b))/2)) →
  assert(√(a + √b) = √((a/2) + n/2) + √((a/2) - n/2)) →
  
  apply(RationalAdditionClosed()) →
  apply(RationalSubtractionClosed()) →
  assert((a/2 + n/2) ∈ ℚ ∧ (a/2 - n/2) ∈ ℚ) →
  assert(∃p,q ∈ ℚ: √(a + √b) = √p + √q)
}