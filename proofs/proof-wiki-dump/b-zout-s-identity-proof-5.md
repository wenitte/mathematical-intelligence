theorem BezoutIdentity() {
  assert(
    (a,b ∈ ℤ) ∧ ¬(a = 0 ∧ b = 0) →
    ∃x,y ∈ ℤ: ax + by = gcd(a,b) ∧
    gcd(a,b) = min({ax + by | x,y ∈ ℤ, ax + by > 0})
  )
} ↔

proof BezoutIdentity() {
  setVar(d: ℤ = gcd(a,b)) →
  setVar(p: ℤ = a/d) →
  setVar(q: ℤ = b/d) →
  
  lemma CoprimeGcdDivision() {
    assert(gcd(p,q) = 1)
  } →
  apply(CoprimeGcdDivision()) →
  
  lemma IntegerCombinationCoprime() {
    assert(
      gcd(p,q) = 1 →
      ∃x,y ∈ ℤ: px + qy = 1
    )
  } →
  apply(IntegerCombinationCoprime()) →
  
  assert(∃x,y ∈ ℤ: px + qy = 1) →
  assert(d(px + qy) = d) →
  assert((a/d)x + (b/d)y = 1) →
  assert(ax + by = d) →
  assert(ax + by = gcd(a,b))
}