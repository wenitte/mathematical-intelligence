theorem AlgebraicNumber_CubeRoot4Minus2i() {
  assert(
    ∃p(x) ∈ ℚ[x] ∧ p(x) ≠ 0 ∧ p(√∛4 - 2i) = 0
  )
} ↔

proof AlgebraicNumber_CubeRoot4Minus2i() {
  setVar(x: ℂ) →
  assert(x = √∛4 - 2i) →
  assert(x + 2i = √∛4) →
  
  step1: {
    assert((x + 2i)³ = 4) →
    expand() →
    assert(x³ + 6ix² + 12i²x + 8i³ = 4)
  } →
  
  step2: {
    substitute(i² = -1) →
    substitute(i³ = -i) →
    assert(x³ - 12x - 4 = i(8 - 6x²))
  } →
  
  step3: {
    square_both_sides() →
    assert((x³ - 12x - 4)² = -(8 - 6x²)²)
  } →
  
  step4: {
    expand() →
    assert(x⁶ - 24x⁴ - 8x³ + 144x² + 96x + 16 = -(64 - 96x² + 36x⁴))
  } →
  
  step5: {
    simplify() →
    assert(x⁶ + 12x⁴ - 8x³ + 48x² + 96x + 80 = 0)
  } →
  
  conclude: {
    assert(∃p(x) = x⁶ + 12x⁴ - 8x³ + 48x² + 96x + 80) →
    assert(p(x) ∈ ℚ[x] ∧ p(x) ≠ 0 ∧ p(√∛4 - 2i) = 0) →
    assert(√∛4 - 2i is algebraic)
  }
}