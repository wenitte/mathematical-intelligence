theorem Padic_Square_Root_Characterization() {
  assert(
    ∀p ∈ ℙ\{2}, ∀a ∈ ℤ : (p ∤ a) ⇒
    [(∃x ∈ ℤ_p : x² = a) ↔ (a is_quadratic_residue_of p)]
  )
} ↔

proof Padic_Square_Root_Characterization() {
  setVar(F: ℤ[X]) →
  assert(F(X) = X² - a) →
  assert(F'(X) = 2X) →

  lemma Necessary_Condition() {
    assume(∃x ∈ ℤ_p : x² = a) →
    assert(F has_root_in ℤ_p) →
    apply(Integer_Polynomial_Padic_Root_Characterization) →
    assert(∃{aₙ} ∈ ℤ: [
      lim(n→∞)(aₙ) = a ∧
      F(aₙ) ≡ 0 (mod p^(n+1))
    ]) →
    assert(a₀² - a ≡ 0 (mod p)) →
    assert(a₀² ≡ a (mod p)) →
    conclude(a is_quadratic_residue_of p)
  } →

  lemma Sufficient_Condition() {
    assume(a is_quadratic_residue_of p) →
    assert(∃b ∈ ℤ : a ≡ b² (mod p)) →
    assert(F(b) ≡ 0 (mod p)) →
    assert(F'(b) = 2b) →
    assert(p ∤ 2 ∧ p ∤ b²) →
    apply(Divisor_Multiple_Contrapositive) →
    assert(p ∤ b) →
    apply(Euclid_Lemma_Prime_Divisors_Contrapositive) →
    assert(p ∤ 2b) →
    assert(F'(b) ≢ 0 (mod p)) →
    apply(Padic_Congruence_Equivalence) →
    assert(F(b) ≡ 0 (mod pℤ) ∧ F'(b) ≢ 0 (mod pℤ)) →
    apply(Hensel_Lemma_Padic) →
    conclude(∃x ∈ ℤ_p : x² = a)
  } →

  apply(Necessary_Condition()) →
  apply(Sufficient_Condition()) →
  conclude(
    (∃x ∈ ℤ_p : x² = a) ↔ (a is_quadratic_residue_of p)
  )
}