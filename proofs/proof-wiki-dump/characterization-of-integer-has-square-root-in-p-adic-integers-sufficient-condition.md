theorem PadicSquareRoot() {
  assert(
    ∀p ∈ ℙ\{2} ∧
    ∀a ∈ ℤ ∧
    p ∤ a ∧
    isQuadraticResidue(a,p) →
    ∃x ∈ ℤ_p : x² = a
  )
} ↔

proof PadicSquareRoot() {
  setVar(F: ℤ[X]) →
  assert(F(X) = X² - a) →
  assert(F'(X) = 2X) →
  
  lemma QuadraticResidue() {
    assert(∃b ∈ ℤ : a ≡ b² (mod p)) →
    assert(F(b) ≡ b² - a ≡ 0 (mod p)) ∧
    assert(F'(b) = 2b)
  } →

  lemma NonDivisibility() {
    assert(p ∤ 2) ∧
    assert(p ∤ b²) →
    apply(ContrapositiveDivisorDividesMultiple()) →
    assert(p ∤ b) →
    apply(ContraposiveEuclidLemma()) →
    assert(p ∤ 2b) →
    assert(F'(b) ≢ 0 (mod p))
  } →

  apply(CongruenceModuloEquivalence()) →
  assert(
    F(b) ≡ 0 (mod pℤ) ∧
    F'(b) ≢ 0 (mod pℤ)
  ) →

  apply(HenselsLemma()) →
  assert(∃x ∈ ℤ_p : F(x) = 0) →
  assert(∃x ∈ ℤ_p : x² = a)
}