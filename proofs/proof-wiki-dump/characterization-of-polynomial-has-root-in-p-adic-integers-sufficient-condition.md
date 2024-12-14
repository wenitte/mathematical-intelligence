theorem PadicRootCharacterization() {
  assert(
    ∀p ∈ Primes, ∀F ∈ ℤp[X], ∀a ∈ ℤp,
    (∃{an} ∈ ℤ[ℕ] ∧
     lim(n→∞, an) = a ∧
     ∀n ∈ ℕ: F(an) ≡ 0 mod p^(n+1)ℤp) →
    F(a) = 0
  )
}

proof PadicRootCharacterization() {
  setVar(p: Prime, F: ℤp[X], a: ℤp, {an}: ℤ[ℕ]) →
  
  lemma CongruenceProperty() {
    assert(∀k ∈ ℕ: a ≡ ak mod p^(k+1)ℤp)
  } →

  lemma PolynomialCongruence() {
    assert(∀k ∈ ℕ: F(a) ≡ F(ak) mod p^(k+1)ℤp)
  } →

  apply(CongruenceProperty()) →
  apply(PolynomialCongruence()) →
  
  assert(∀k ∈ ℕ: F(a) ≡ 0 mod p^(k+1)ℤp) →
  assert(∀k ∈ ℕ: F(a) ∈ p^(k+1)ℤp) →
  assert(∀k ∈ ℕ: |F(a)|p ≤ p^(-k-1)) →
  
  lemma SqueezeTheorem() {
    assert(|F(a)|p ≤ lim(k→∞, p^(-k-1)) = 0)
  } →
  
  apply(SqueezeTheorem()) →
  assert(|F(a)|p = 0) →
  assert(F(a) = 0)
}