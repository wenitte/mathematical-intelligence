theorem Common_Divisor_Divides_GCD() {
  assert(
    ∀a,b ∈ ℤ: (a ≠ 0 ∨ b ≠ 0) ∧
    ∀c ∈ ℤ: (c|a ∧ c|b) →
    c|gcd(a,b)
  )
} ↔

proof Common_Divisor_Divides_GCD() {
  setVar(a,b,c: ℤ) →
  assume(a ≠ 0 ∨ b ≠ 0) →
  assume(c|a ∧ c|b) →
  
  let(d = gcd(a,b)) →
  
  assert(d|a ∧ d|b) →
  
  lemma Bezout_Identity() {
    assert(∃u,v ∈ ℤ: d = ua + vb)
  } →
  
  lemma Common_Divisor_Integer_Combination() {
    assert(
      ∀x,y,u,v ∈ ℤ:
      (c|x ∧ c|y) → c|(ux + vy)
    )
  } →
  
  apply(Bezout_Identity()) →
  apply(Common_Divisor_Integer_Combination()) →
  
  assert(c|d) →
  assert(c|gcd(a,b))
}