theorem GCD_Bounds_Sum_Diff_Squares() {
  assert(
    ∀x,y,n ∈ ℤ ⇒ (
      (x ≢ ±y (mod n)) ∧ 
      (x² ≡ y² (mod n)) ⇒
      (1 < gcd(x-y,n) < n) ∧ 
      (1 < gcd(x+y,n) < n)
    )
  )
} ↔

proof GCD_Bounds_Sum_Diff_Squares() {
  setVar(x,y,n: ℤ) →
  assert(x² ≡ y² (mod n)) →
  assert(n | (x² - y²)) →
  assert(n | ((x+y)(x-y))) →
  
  lemma Prime_Divisor_Property() {
    assert(
      ∀p ∈ Primes: p|n ⇒ 
      p|((x+y)(x-y)) ⇒
      (p|(x-y)) ∨ (p|(x+y))
    )
  } →

  apply(Prime_Divisor_Property()) →
  
  assert(x ≢ y (mod n) ⇒ n ∤ (x-y)) →
  assert(x ≢ -y (mod n) ⇒ n ∤ (x+y)) →
  
  lemma GCD_Property() {
    assert(
      (p|(x-y) ⇒ (
        1 < gcd(x-y,n) < n ∧
        ∃q: (q|n ∧ q|(x+y) ∧ 1 < q ≤ gcd(x+y,n))
      )) ∧
      (p|(x+y) ⇒ (
        1 < gcd(x+y,n) < n ∧
        ∃q: (q|n ∧ q|(x-y) ∧ 1 < q ≤ gcd(x-y,n))
      ))
    )
  } →
  
  apply(GCD_Property()) →
  assert((1 < gcd(x-y,n) < n) ∧ (1 < gcd(x+y,n) < n))
}