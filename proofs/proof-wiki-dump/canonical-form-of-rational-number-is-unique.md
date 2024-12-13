theorem Rational_Canonical_Form_Uniqueness() {
  assert(
    ∀r ∈ ℚ, ∀p,q,p',q' ∈ ℤ: (
      isCanonical(p/q, r) ∧ isCanonical(p'/q', r) →
      p/q = p'/q'
    )
  )
} ↔

proof Rational_Canonical_Form_Uniqueness() {
  setVar(r: ℚ) →
  setVar(p,q,p',q': ℤ) →
  assume(isCanonical(p/q, r) ∧ isCanonical(p'/q', r)) →
  assume(q ≤ q') →  // WLOG
  
  lemma RationalEquality() {
    assert(p/q = p'/q' → pq' = p'q)
  } →
  apply(RationalEquality()) →
  
  lemma EuclidLemma() {
    assert(
      gcd(p',q') = 1 ∧ q'|p'q →
      q'|q
    )
  } →
  
  lemma DivisorProperty() {
    assert(
      a|b ∧ a>0 ∧ b>0 →
      a ≤ b
    )
  } →
  
  assert(q' > 0 ∧ q > 0) →  // By canonical form definition
  apply(DivisorProperty()) →
  assert(q' ≤ q) →
  
  assert(q' ≤ q ∧ q ≤ q' → q = q') →
  assert(q = q') →
  assert(pq' = p'q ∧ q = q' → p = p') →
  
  conclude(p/q = p'/q')
}