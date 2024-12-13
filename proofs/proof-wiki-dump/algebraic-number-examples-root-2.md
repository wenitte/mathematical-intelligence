theorem Sqrt2_Is_Algebraic() {
  assert(
    √2 ∈ AlgebraicNumbers
  )
} ↔

proof Sqrt2_Is_Algebraic() {
  define(p(x) := x² - 2) →
  
  lemma QuadraticEquation() {
    assert(
      p(x) = 0 ↔ x = ±√2
    )
  } →
  
  letVar(x = √2) →
  assert(
    p(x) = (√2)² - 2 = 2 - 2 = 0
  ) →
  
  apply(AlgebraicNumberDefinition: {
    ∀n ∈ ℝ [n ∈ AlgebraicNumbers ↔ ∃p ∈ ℚ[x] (p ≠ 0 ∧ p(n) = 0)]
  }) →
  
  assert(
    p ∈ ℚ[x] ∧ p ≠ 0 ∧ p(√2) = 0
  ) →
  
  conclude(√2 ∈ AlgebraicNumbers)
}