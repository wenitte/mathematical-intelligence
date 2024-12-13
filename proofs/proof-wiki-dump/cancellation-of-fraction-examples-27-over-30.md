theorem Fraction_Cancellation() {
  assert(
    ∀n,d ∈ ℤ⁺ | (n = 27 ∧ d = 30) →
    (∃x ∈ ℤ⁺ | x = gcd(n,d)) →
    (n/d = (n/x)/(d/x)) →
    (27/30 = 9/10)
  )
}

proof Fraction_Cancellation() {
  setVar(n: 27, d: 30) →
  assert(27/30) →
  
  lemma Prime_Decomposition() {
    assert(27 = 3 × 3² ∧ 30 = 2 × 3 × 5)
  } →
  apply(Prime_Decomposition()) →
  assert((3 × 3²)/(2 × 3 × 5)) →
  
  lemma Common_Divisor() {
    assert(∃x = 3 | x divides n ∧ x divides d)
  } →
  apply(Common_Divisor()) →
  assert(3²/(2 × 5)) →
  
  lemma Simplify() {
    assert(3² = 9)
  } →
  apply(Simplify()) →
  assert(9/10)
}