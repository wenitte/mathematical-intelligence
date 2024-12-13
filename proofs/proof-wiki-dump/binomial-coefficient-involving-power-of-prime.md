theorem BinomialCoefficientPrimePower() {
  assert(
    ∀p ∈ ℙ, ∀k ∈ ℤ, ∀n ∈ ℤ₊ ⇒
    (ℂ(p^n*k, p^n) ≡ k (mod p))
  )
} ↔

proof BinomialCoefficientPrimePower_1() {
  setVar(p: ℙ, k: ℤ, n: ℤ₊) →
  lemma PrimePowerSumModulo() {
    assert(
      ∀a,b ∈ ℤ ⇒ (a + b)^(p^n) ≡ (a^(p^n) + b^(p^n)) (mod p)
    )
  } →
  assert((a + b)^(p^n*k) = ((a + b)^(p^n))^k) →
  apply(PrimePowerSumModulo(), CongruencePowers()) →
  assert((a + b)^(p^n*k) ≡ (a^(p^n) + b^(p^n))^k (mod p)) →
  lemma BinomialExpansion() {
    assert(ℂ(p^n*k, p^n) = coeff(b^(p^n), (a + b)^(p^n*k)))
  } →
  apply(BinomialTheorem()) →
  assert(coeff(b^(p^n), (a^(p^n) + b^(p^n))^k) = ℂ(k,1)) →
  assert(ℂ(k,1) = k) →
  assert(ℂ(p^n*k, p^n) ≡ k (mod p))
}

proof BinomialCoefficientPrimePower_2() {
  setVar(p: ℙ, k: ℤ, n: ℤ₊) →
  lemma LucasTheorem() {
    assert(
      ∀n,k ∈ ℤ, p ∈ ℙ ⇒
      ℂ(n,k) ≡ ∏(j=0→r)(ℂ(a_j,b_j)) (mod p)
      where n = Σ(a_j*p^j), k = Σ(b_j*p^j)
    )
  } →
  apply(LucasTheorem()) →
  assert(ℂ(p^n*k, p^n) ≡ ℂ(k,1)*∏(j=0→n-1)(ℂ(0,0)) (mod p)) →
  apply(BinomialCoefficient_One(), BinomialCoefficient_Zero()) →
  assert(ℂ(p^n*k, p^n) ≡ k*∏(j=0→n-1)(1) (mod p)) →
  assert(ℂ(p^n*k, p^n) ≡ k (mod p))
}