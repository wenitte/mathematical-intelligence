theorem Carmichael_294409() {
  assert(
    ∀a ∈ ℤ ∧ gcd(a,294409) = 1 → 
    (a^294409 ≡ a (mod 294409)) ∧
    isComposite(294409)
  )
} ↔

proof Carmichael_294409() {
  setDef(n = 294409) →
  assert(n = 37 × 73 × 109) →
  
  lemma IsSquareFree() {
    assert(∀p | n → p^2 ∤ n) →
    assert(37^2 ∤ n ∧ 73^2 ∤ n ∧ 109^2 ∤ n)
  } →
  
  lemma PrimeDivisorsProperty() {
    assert(n - 1 = 294408) →
    assert(294408 = 2^3 × 3^3 × 29 × 47) →
    assert(294408 = 8178 × 36) →
    assert(294408 = 4089 × 72) →
    assert(294408 = 2726 × 108)
  } →
  
  lemma DivisibilityProperty() {
    assert(∀p | n → p - 1 | n - 1) →
    assert(36 | 294408 ∧ 72 | 294408 ∧ 108 | 294408)
  } →
  
  apply(IsSquareFree()) →
  apply(PrimeDivisorsProperty()) →
  apply(DivisibilityProperty()) →
  apply(Korselt_Theorem()) →
  
  assert(isCarmichael(294409))
}