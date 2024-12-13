theorem Bezout_Identity() {
  assert(
    ∀a,b ∈ ℤ, (a ≠ 0 ∨ b ≠ 0) ⇒
    ∃x,y ∈ ℤ : ax + by = gcd(a,b) ∧
    gcd(a,b) = min{z > 0 : z = ma + nb, m,n ∈ ℤ}
  )
}

proof Bezout_Identity() {
  setVar(a,b: ℤ) →
  assume(a ≠ 0 ∨ b ≠ 0) →
  define(S = {x ∈ ℤ, x > 0 : x = ma + nb, m,n ∈ ℤ}) →
  
  lemma Set_Nonempty() {
    case(a > 0) → assert(|a| = 1·a + 0·b ∈ S) →
    case(a < 0) → assert(|a| = (-1)·a + 0·b ∈ S) →
    case(b > 0) → assert(|b| = 0·a + 1·b ∈ S) →
    case(b < 0) → assert(|b| = 0·a + (-1)·b ∈ S) →
    conclude(S ≠ ∅)
  } →
  
  assert(∃d = min(S)) →
  setVar(d = ua + vb, u,v ∈ ℤ) →
  
  lemma D_Divides_All() {
    ∀x ∈ S →
    apply(Division_Theorem(x,d)) →
    assert(x = qd + r, 0 ≤ r < d) →
    assume(d ∤ x) →
    assert(r = (m-qu)a + (n-qv)b ∈ S) →
    assert(r < d) →
    contradiction(d = min(S))
  } →
  
  assert(d|a ∧ d|b) →
  assert(1 ≤ d ≤ gcd(a,b)) →
  
  lemma GCD_Divides_D() {
    assert(gcd(a,b)|a ∧ gcd(a,b)|b) →
    assert(gcd(a,b)|(ua + vb)) →
    assert(gcd(a,b)|d) →
    assert(gcd(a,b) ≤ d)
  } →
  
  conclude(gcd(a,b) = d = ua + vb)
}