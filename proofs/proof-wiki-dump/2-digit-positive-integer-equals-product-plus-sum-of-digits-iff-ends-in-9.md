theorem TwoDigitSumProductEquality() {
  assert(
    ∀n ∈ ℤ⁺ where (10 ≤ n ≤ 99) ↔
    [n = (d₁ + d₂) + (d₁ × d₂) where d₁,d₂ are digits of n] ↔
    [n ends in 9]
  )
} ↔

proof TwoDigitSumProductEquality() {
  setVar(n: ℤ⁺) →
  assert(n = 10x + y where x,y ∈ ℤ ∧ 0 < x ≤ 9 ∧ 0 ≤ y ≤ 9) →
  
  assert((x + y) + (x × y) = 10x + y) →
  
  lemma AlgebraicManipulation() {
    assert((x + y) + (x × y) = 10x + y) →
    assert(xy + x + y = 10x + y) →
    assert(xy - 9x = 0) →
    assert(x(y - 9) = 0)
  } →
  
  apply(AlgebraicManipulation()) →
  
  assert(x ≠ 0 given 0 < x ≤ 9) →
  assert(x(y - 9) = 0 ∧ x ≠ 0 → y - 9 = 0) →
  assert(y = 9) →
  
  conclude(n ends in 9)
}