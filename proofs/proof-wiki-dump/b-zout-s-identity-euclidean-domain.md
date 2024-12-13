theorem Bezout_Identity() {
  assert(
    let D: EuclideanDomain ∧
    let ν: (D\{0} → ℕ) ∧ // Euclidean valuation
    let a,b ∈ D ∧ (¬(a=0 ∧ b=0)) ∧
    let gcd{a,b}: GreatestCommonDivisor(a,b) →
    ∃x,y ∈ D: (a×x + b×y = gcd{a,b}) ∧
    ∀c ∈ D: (c = a×x + b×y) → ν(gcd{a,b}) ≤ ν(c)
  )
} ↔

proof Bezout_Identity() {
  assume(b ≠ 0) →
  define(S ⊆ D) {
    S = {x ∈ D\{0} | ∃m,n ∈ D: x = m×a + n×b}
  } →
  assert(b ∈ S) → // via m=0, n=1
  assert(S ≠ ∅) →

  lemma EuclideanProperties() {
    assert(
      ∀a,b ∈ D, b≠0: ∃q,r ∈ D: 
        (ν(r) < ν(b) ∨ r=0) ∧ 
        (a = q×b + r)
    ) ∧
    assert(
      ∀a,b ∈ D, b≠0:
        ν(a) ≤ ν(a×b)
    )
  } →

  assert(ν[S] ⊆ ℕ) →
  apply(WellOrderingPrinciple(ν[S])) →
  let d ∈ S: MinElement(ν(d), ν[S]) →
  ∃u,v ∈ D: d = u×a + v×b →

  proof MinimalityOfD() {
    ∀x ∈ S:
      ∃q,r ∈ D: x = q×d + r ∧
      (ν(r) < ν(d) ∨ r=0) →
    assume(r ≠ 0) →
    ∃m,n ∈ D: x = m×a + n×b →
    r = x - q×d →
    r = (m×a + n×b) - q×(u×a + v×b) →
    r = (m-q×u)×a + (n-q×v)×b →
    assert(r ∈ S ∧ ν(r) < ν(d)) // contradiction
  } →

  conclude(∀x ∈ S: ∃q ∈ D: x = q×d) →
  assert(d|a ∧ d|b) →
  assert(ν(1) ≤ ν(d) ≤ ν(gcd{a,b})) →
  assert(gcd{a,b}|d) →
  assert(ν(gcd{a,b}) ≤ ν(d)) →
  conclude(gcd{a,b} = d = u×a + v×b)
}