theorem BinomialDifferenceCube() {
  assert(
    ∀x,y ∈ ℝ ⇒ (x - y)³ = x³ - 3x²y + 3xy² - y³
  )
} ↔

proof BinomialDifferenceCube() {
  setVar(x,y: ℝ) →
  lemma BinomialTheorem() {
    assert(
      ∀n ∈ ℤ≥₀, ∀x,y ∈ ℝ ⇒ 
      (x + (-y))ⁿ = Σ(k=0 to n) (ⁿCₖ)x^(n-k)(-y)^k
    )
  } →
  apply(BinomialTheorem(), n=3) →
  assert(
    (x + (-y))³ = ³C₀x³ + ³C₁x²(-y) + ³C₂x(-y)² + ³C₃(-y)³
  ) →
  assert(
    (x - y)³ = x³ + 3x²(-y) + 3x(-y)² + (-y)³
  ) →
  assert(
    (x - y)³ = x³ - 3x²y + 3xy² - y³
  )
}