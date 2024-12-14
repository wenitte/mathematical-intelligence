theorem PadicPolynomialRoot() {
  assert(
    ∀p ∈ Primes, ∀F ∈ ℤ[X], ∀a ∈ ℤ_p ⇒
    (F(a) = 0) ↔ 
    (∃{aₙ} ∈ ℤ^ℕ: 
      (lim_{n→∞} aₙ = a) ∧
      (∀n ∈ ℕ_{>0}: F(aₙ) ≡ 0 mod p^{n+1})
    )
  )
}

proof PadicPolynomialRoot() {
  setVar(p: Prime, F: ℤ[X], a: ℤ_p) →
  
  lemma PolynomialCharacterization() {
    assert(
      (F(a) = 0) ↔ 
      (∃{aₙ} ∈ ℤ^ℕ:
        (lim_{n→∞} aₙ = a) ∧
        (F(aₙ) ≡ 0 mod p^{n+1}ℤ_p)
      )
    )
  } →
  
  lemma IntegerCoefficients() {
    assert(
      ∀n ∈ ℕ_{>0}: F(aₙ) ∈ ℤ
    )
  } →
  
  lemma CongruenceEquivalence() {
    assert(
      ∀x ∈ ℤ, ∀n ∈ ℕ_{>0}:
      (x ≡ 0 mod p^{n+1}ℤ_p) ↔ (x ≡ 0 mod p^{n+1})
    )
  } →
  
  apply(PolynomialCharacterization()) →
  apply(IntegerCoefficients()) →
  apply(CongruenceEquivalence()) →
  
  assert(
    (F(a) = 0) ↔ 
    (∃{aₙ} ∈ ℤ^ℕ:
      (lim_{n→∞} aₙ = a) ∧
      (F(aₙ) ≡ 0 mod p^{n+1})
    )
  )
}