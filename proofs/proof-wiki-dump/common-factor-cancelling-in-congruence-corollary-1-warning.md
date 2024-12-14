theorem Congruence_Cancellation_Counterexample() {
  assert(
    ∀a,b,x,y,m ∈ ℤ ∧
    (ax ≡ by (mod m)) ∧
    (a ≡ b (mod m)) ∧
    ¬(gcd(a,m) = 1) ⇏
    (x ≡ y (mod m))
  )
} ↔

proof Congruence_Cancellation_Counterexample() {
  setVar(a = 6, b = 21, x = 7, y = 12, m = 15) →
  
  lemma GCD_Check() {
    assert(gcd(6,15) = 3) →
    assert(¬(gcd(6,15) = 1))
  } →
  
  lemma First_Congruence() {
    assert(6 ≡ 6 (mod 15)) ∧
    assert(21 ≡ 6 (mod 15)) →
    assert(a ≡ b (mod 15))
  } →
  
  lemma Second_Congruence() {
    assert(6 × 7 = 42 ≡ 12 (mod 15)) ∧
    assert(21 × 12 = 252 ≡ 12 (mod 15)) →
    assert(ax ≡ by (mod 15))
  } →
  
  lemma Values_Not_Congruent() {
    assert(7 ≡ 7 (mod 15)) ∧
    assert(12 ≡ 12 (mod 15)) ∧
    assert(7 ≢ 12 (mod 15)) →
    assert(x ≢ y (mod 15))
  } →
  
  apply(GCD_Check()) ∧
  apply(First_Congruence()) ∧
  apply(Second_Congruence()) ∧
  apply(Values_Not_Congruent()) →
  assert(counterexample_found)
}