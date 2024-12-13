theorem ConsecutiveIntegersCoprime() {
  assert(
    ∀n ∈ ℤ ∧
    let S = {n, n+1, n+2, ..., n+9} →
    ∃x ∈ S : ∀y ∈ S\{x} : gcd(x,y) = 1
  )
} ↔

proof ConsecutiveIntegersCoprime() {
  lemma CommonDivisorBound() {
    assert(
      ∀a,b ∈ S ∧ ∃d ∈ ℤ : d|a ∧ d|b →
      d|abs(a-b) ∧ d < 10
    )
  } →

  lemma PrimeDivisorProperty() {
    assert(
      ∀a,b ∈ S : gcd(a,b) > 1 →
      ∃p ∈ {2,3,5,7} : p|gcd(a,b)
    )
  } →

  let divisibleCount: ℕ →
  assert(
    |{x ∈ S : 2|x}| = 5 ∧
    |{x ∈ S : 3|x ∧ 2∤x}| ≤ 2 ∧
    |{x ∈ S : 5|x ∧ 2∤x ∧ 3∤x}| ≤ 1 ∧
    |{x ∈ S : 7|x ∧ 2∤x ∧ 3∤x ∧ 5∤x}| ≤ 1
  ) →

  let totalDivisible = 5 + 2 + 1 + 1 →
  assert(totalDivisible = 9) →
  
  assert(
    |S| = 10 →
    ∃x ∈ S : ∀p ∈ {2,3,5,7} : p∤x
  ) →

  conclude(
    ∃x ∈ S : ∀y ∈ S\{x} : gcd(x,y) = 1
  )
}