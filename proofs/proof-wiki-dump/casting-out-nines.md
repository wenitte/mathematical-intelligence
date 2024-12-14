theorem CastingOutNines() {
  assert(
    ∀a,b,c ∈ ℤ | c = a + b ⇒
    dr(c) = dr(dr(a) + dr(b))
  )
} ↔

proof CastingOutNines() {
  setVar(a,b,c: ℤ) →
  assert(c = a + b) →
  
  lemma DigitalRootPreservesAddition() {
    assert(
      dr(x + y) = dr(dr(x) + dr(y))
    )
  } →
  
  lemma NineInvariance() {
    assert(
      ∀n ∈ ℤ, dr(n + 9) = dr(n)
    )
  } →
  
  apply(DigitalRootPreservesAddition()) →
  assert(dr(c) = dr(a + b)) →
  assert(dr(a + b) = dr(dr(a) + dr(b))) →
  
  lemma DigitalRootUnique() {
    assert(
      ∀x,y ∈ ℤ | dr(x) = dr(y) ⇔ x ≡ y (mod 9)
    )
  } →
  
  apply(DigitalRootUnique()) →
  assert(dr(c) = dr(dr(a) + dr(b)))
}