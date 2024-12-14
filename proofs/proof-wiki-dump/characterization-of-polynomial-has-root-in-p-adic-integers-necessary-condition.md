theorem Polynomial_Root_Padic_Integers_Necessary() {
  let(p: Prime) →
  let(Zp: p_adic_integers) →
  let(F: Polynomial(Zp[X])) →
  let(a: Zp) →
  assert(
    F(a) = 0 ⇒ 
    ∃{an: Sequence(ℤ)} [
      lim(n→∞)(an) = a ∧
      ∀n∈ℕ>0: F(an) ≡ 0 (mod p^(n+1)Zp)
    ]
  )
}

proof Polynomial_Root_Padic_Necessary() {
  assume(F(a) = 0) →
  let(a = ∑(j=0→∞)(dj·p^j)) {
    // p-adic expansion of a
  } →
  
  define(an: ℕ>0 → ℤ) {
    an := ∑(j=0→n-1)(dj·p^j)
  } →
  
  assert(lim(n→∞)(an) = a) {
    by(p_adic_expansion_definition)
  } →
  
  assert(∀n∈ℕ>0: an ∈ ℤ) {
    by(p_adic_integer_expansion_property)
  } →
  
  lemma Congruence_Chain() {
    assert(∀n∈ℕ>0: an ≡ a (mod p^n·Zp)) →
    assert(∀n∈ℕ>0: F(an) ≡ F(a) (mod p^n·Zp)) {
      by(polynomial_congruence_property)
    } →
    assert(∀n∈ℕ>0: F(an) ≡ 0 (mod p^n·Zp)) {
      by(assumption(F(a) = 0))
    }
  } →
  
  apply(Congruence_Chain()) →
  assert(∀n∈ℕ>0: F(an) ≡ 0 (mod p^(n+1)·Zp)) {
    by(p_adic_congruence_equivalence)
  }
}