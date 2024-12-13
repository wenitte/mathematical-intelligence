theorem Cancellability_Of_Congruences() {
  setVar(a,b,c,n: ℤ) →
  setVar(d: ℤ = gcd(c,n)) →
  assert(
    (c⋅a ≡ c⋅b (mod n)) ↔ (a ≡ b (mod n/d))
  )
}

proof Cancellability_Of_Congruences() {
  // Forward direction
  assume(c⋅a ≡ c⋅b (mod n)) →
  ∃k: ℤ(c⋅a - c⋅b = k⋅n) →
  
  lemma Coprime_After_GCD() {
    setVar(d = gcd(c,n)) →
    ∃r,s: ℤ(
      (c = d⋅r) ∧ 
      (n = d⋅s) ∧ 
      gcd(r,s) = 1
    )
  } →
  
  apply(Coprime_After_GCD()) →
  substitute(c = d⋅r, n = d⋅s) →
  assert(d⋅r⋅a - d⋅r⋅b = k⋅d⋅s) →
  factor() →
  assert(r⋅(a - b) = k⋅s) →
  
  lemma Euclids_Lemma() {
    assert(
      (gcd(r,s) = 1 ∧ r|(k⋅s)) → s|(a-b)
    )
  } →
  
  apply(Euclids_Lemma()) →
  assert(a ≡ b (mod s)) →
  assert(a ≡ b (mod n/d)) →
  
  // Backward direction
  assume(a ≡ b (mod n/d)) →
  ∃k: ℤ(a - b = k⋅(n/d)) →
  multiply(c) →
  assert(c⋅a - c⋅b = k⋅(c/d)⋅n) →
  
  lemma GCD_Divides() {
    assert(d = gcd(c,n) → d|c)
  } →
  
  apply(GCD_Divides()) →
  assert(c/d: ℤ) →
  assert(c⋅a ≡ c⋅b (mod n))
}

corollary Coprime_Cancellation() {
  setVar(a,b,c,n: ℤ) →
  assert(
    (gcd(c,n) = 1 ∧ c⋅a ≡ c⋅b (mod n)) → 
    (a ≡ b (mod n))
  )
}

corollary Prime_Modulus_Cancellation() {
  setVar(a,b,c: ℤ, p: Prime) →
  assert(
    (p∤c ∧ c⋅a ≡ c⋅b (mod p)) → 
    (a ≡ b (mod p))
  )
}