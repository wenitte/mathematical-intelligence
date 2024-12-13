theorem Aurifeuillian_Factorization(n: ℤ) {
  assert(
    2^(4n + 2) + 1 = (2^(2n + 1) - 2^(n + 1) + 1)(2^(2n + 1) + 2^(n + 1) + 1)
  )
} ↔

proof Aurifeuillian_Factorization(n: ℤ) {
  lemma Square_Sum_Factorization(x: ℝ, y: ℝ) {
    assert(
      x^2 + y^2 = (x + √(2xy) + y)(x - √(2xy) + y)
    )
  } →
  
  setVar(x ≔ 2^(2n + 1)) →
  setVar(y ≔ 1) →
  
  assert(2^(4n + 2) + 1) →
  assert(= (2^(2n + 1))^2 + 1^2) →
  
  apply(Square_Sum_Factorization(2^(2n + 1), 1)) →
  
  assert(= (2^(2n + 1) + √(2 × 2^(2n + 1) × 1) + 1)
          (2^(2n + 1) - √(2 × 2^(2n + 1) × 1) + 1)) →
          
  assert(= (2^(2n + 1) + √(2^(2n + 2)) + 1)
          (2^(2n + 1) - √(2^(2n + 2)) + 1)) →
          
  assert(= (2^(2n + 1) + 2^(n + 1) + 1)
          (2^(2n + 1) - 2^(n + 1) + 1))
}