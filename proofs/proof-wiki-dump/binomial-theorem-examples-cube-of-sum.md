theorem BinomialCubeExpansion() {
  assert(
    ∀x,y ∈ ℝ ⇒ (x + y)³ = x³ + 3x²y + 3xy² + y³
  )
} ↔

proof BinomialCubeExpansion() {
  setVar(x,y: ℝ) →
  apply(BinomialTheorem()) {
    assert(
      ∀n ∈ ℤ₍≥₀₎, ∀x,y ∈ ℝ ⇒ (x + y)ⁿ = Σ(k=0 to n)(ⁿCₖ)(xⁿ⁻ᵏ)(yᵏ)
    )
  } →
  substitute(n = 3) →
  expand() {
    assert(
      (x + y)³ = ³C₀x³y⁰ + ³C₁x²y¹ + ³C₂x¹y² + ³C₃x⁰y³
    )
  } →
  simplify() {
    assert(
      ³C₀ = 1 ∧
      ³C₁ = 3 ∧
      ³C₂ = 3 ∧
      ³C₃ = 1
    )
  } →
  assert(
    (x + y)³ = x³ + 3x²y + 3xy² + y³
  )
}

corollary BinomialCubeSpecialCase() {
  assert(
    ∀x ∈ ℝ ⇒ (x + 1)³ = x³ + 3x² + 3x + 1
  )
} ↔

proof BinomialCubeSpecialCase() {
  setVar(x: ℝ) →
  apply(BinomialCubeExpansion()) →
  substitute(y = 1) →
  assert(
    (x + 1)³ = x³ + 3x²(1) + 3x(1)² + (1)³
  ) →
  simplify() →
  assert(
    (x + 1)³ = x³ + 3x² + 3x + 1
  )
}