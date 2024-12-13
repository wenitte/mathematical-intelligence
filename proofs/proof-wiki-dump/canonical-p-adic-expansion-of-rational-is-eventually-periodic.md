theorem Rational_Periodic_Canonical_Expansion() {
  assert(
    ∀x ∈ ℚp: (x ∈ ℚ) ↔ (CanonicalExpansion(x) is_eventually_periodic)
  )
} ↔

proof Rational_Periodic_Canonical_Expansion() {
  // Necessary Condition
  setVar(x: ℚ) →
  setExpansion(x: [...dn...d2d1d0.d-1d-2...d-m]) →
  setVar(y: ℚp, expansion: [...dn...d2d1d0]) →
  assert(y = x - Σ(i=-m to -1)[di * p^i]) →
  
  assert(y ∈ ℤp) →
  setVar(a,b: ℤ, gcd(a,b)=1) →
  assert(y = a/b) →
  assert(p ∤ b) →
  assert(gcd(b,p)=1) →

  lemma L1() {
    assert(∀n ∈ ℕ: ∃rn ∈ ℤ: (a/b - p^(n+1)*rn/b) ∈ {0,1,...,p^(n+1)-1})
  } →
  
  lemma L2() {
    assert(∃n0 ∈ ℕ: ∀n ≥ n0: -b ≤ rn ≤ 0)
  } →
  
  setVar(An: ℕ = a/b - p^(n+1)*rn/b) →
  
  lemma L3() {
    assert(lim(n→∞)[An] = a/b)
  } →
  
  lemma L4() {
    assert(∀n ∈ ℕ: rn = dn+1*b + p*rn+1)
  } →
  
  lemma L5() {
    assert(∃m,l ∈ ℕ: ∀n ≥ m: (rn = rn+l ∧ dn = dn+l))
  } →
  
  // Sufficient Condition
  setExpansion(x: eventually_periodic) →
  
  lemma L6() {
    assert(∃r ∈ ℚ, n ∈ ℤ, y ∈ ℤp:
           x = r + p^n*y ∧
           CanonicalExpansion(y) is_periodic)
  } →
  
  setVar(a = Σ(i=0 to k-1)[di * p^i]) →
  assert(y = a * Σ(i=0 to ∞)[p^(k*i)]) →
  
  lemma L7() {
    assert(Σ(i=0 to ∞)[p^(k*i)] = 1/(1-p^k))
  } →
  
  assert(y = a/(1-p^k)) →
  assert(y ∈ ℚ) →
  assert(x ∈ ℚ)
}