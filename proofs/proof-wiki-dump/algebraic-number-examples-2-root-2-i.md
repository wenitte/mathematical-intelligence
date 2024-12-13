theorem AlgebraicNumber_2MinusSqrt2i() {
  assert(
    2 - √2i ∈ A  // where A is the set of algebraic numbers
  )
} ↔

proof AlgebraicNumber_2MinusSqrt2i() {
  setVar(x = 2 - √2i) →
  
  lemma SubtractTwoFromX() {
    assert(x - 2 = √2i)
  } →

  lemma SquareBothSides() {
    assert(
      (x - 2)² = (√2i)² ∧
      (x - 2)² = 2i² ∧
      (x - 2)² = -2  // since i² = -1
    )
  } →

  lemma ExpandSquare() {
    assert(
      x² - 4x + 4 = -2
    )
  } →

  lemma RearrangeToStandardForm() {
    assert(
      x² - 4x + 4 + 2 = 0 ∧
      x² - 4x + 6 = 0
    )
  } →

  apply(Definition_AlgebraicNumber: "a complex number that is a root of a non-zero polynomial with rational coefficients") →
  
  conclude(
    x² - 4x + 6 = 0 is a polynomial with rational coefficients ∧
    2 - √2i is a root of this polynomial →
    2 - √2i ∈ A
  )
}