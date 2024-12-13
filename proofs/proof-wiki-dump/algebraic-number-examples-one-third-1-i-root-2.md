theorem IsAlgebraicNumber() {
  assert(
    ∃ p(x) ∈ ℚ[x] : p(1/3(1 + i√2)) = 0
  )
} ↔

proof IsAlgebraicNumber() {
  setVar(x := 1/3(1 + i√2)) →
  assert(3x - 1 = i√2) →
  assert((3x - 1)² = (i√2)²) →
  assert((3x - 1)² = 2i²) →
  assert((3x - 1)² = -2) →
  assert(9x² - 6x + 1 = -2) →
  assert(9x² - 6x + 3 = 0) →
  assert(3x² - 2x + 1 = 0) →
  lemma PolynomialExists() {
    assert(
      p(x) := 3x² - 2x + 1 ∈ ℚ[x] ∧
      p(1/3(1 + i√2)) = 0
    )
  } →
  apply(PolynomialExists()) →
  assert(1/3(1 + i√2) is algebraic)
}