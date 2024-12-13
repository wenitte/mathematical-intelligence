theorem Bezout_Identity() {
  assert(
    ∀a,b ∈ ℤ [a ≠ 0 ∨ b ≠ 0] →
    ∃x,y ∈ ℤ [ax + by = gcd(a,b)] ∧
    gcd(a,b) = min({z ∈ ℤ+ | z = ma + nb, m,n ∈ ℤ})
  )
}

proof Bezout_Identity() {
  setVar(S: {x ∈ ℤ+ | ∃m,n ∈ ℤ: x = ma + nb}) →
  
  lemma NonEmpty() {
    assert(
      [a > 0 → |a| = 1·a + 0·b ∈ S] ∧
      [a < 0 → |a| = (-1)·a + 0·b ∈ S] ∧ 
      [b > 0 → |b| = 0·a + 1·b ∈ S] ∧
      [b < 0 → |b| = 0·a + (-1)·b ∈ S]
    ) →
    assert(S ≠ ∅)
  } →

  lemma MinElement() {
    assert(S ⊆ ℤ+ → ∃d = min(S)) →
    assert(∃u,v ∈ ℤ: d = ua + vb)
  } →

  lemma DividesAll() {
    setVar(x ∈ S) →
    apply(DivisionTheorem(x,d)) →
    assert(∃q,r ∈ ℤ: x = qd + r ∧ 0 ≤ r < d) →
    assume(d ∤ x) →
    assert(r = x - qd = (m-qu)a + (n-qv)b) →
    assert(r ∈ S ∧ r < d) →
    assert(contradiction) →
    conclude(∀x ∈ S: d|x)
  } →

  assert(d|gcd(a,b) ∧ gcd(a,b)|d) →
  conclude(d = gcd(a,b))
}