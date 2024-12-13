theorem BinomialCoefficientPrimePower() {
  assert(
    ∀p ∈ ℙ, ∀n,k ∈ ℕ ⇒ 
    (⟦p^n k⟧p^n ≡ k mod p)
  )
} ↔

proof BinomialCoefficientPrimePower() {
  setVar(p: ℙ, n,k: ℕ) →
  
  lemma PrimePowerSumModulo() {
    assert(
      ∀a,b ∈ ℝ ⇒ 
      ((a + b)^(p^n) ≡ (a^(p^n) + b^(p^n)) mod p)
    )
  } →

  assert((a + b)^(p^n*k) = ((a + b)^(p^n))^k) →
  
  lemma CongruencePowers() {
    assert(
      ∀x,y ∈ ℝ, (x ≡ y mod p) ⇒
      (x^k ≡ y^k mod p)
    )
  } →

  apply(PrimePowerSumModulo(), CongruencePowers()) →
  assert((a + b)^(p^n*k) ≡ (a^(p^n) + b^(p^n))^k mod p) →

  lemma BinomialTheorem() {
    assert(
      (a^(p^n) + b^(p^n))^k = 
      Σ_{i=0}^k ⟦k⟧_i (a^(p^n))^(k-i) (b^(p^n))^i
    )
  } →

  apply(BinomialTheorem()) →
  assert(coefficient(b^(p^n)) = ⟦k⟧_1 = k) →
  assert(⟦p^n*k⟧_(p^n) ≡ k mod p)
}