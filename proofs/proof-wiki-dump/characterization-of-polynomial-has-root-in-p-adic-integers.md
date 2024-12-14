theorem PadicPolynomialRoot() {
  assert(
    ∀p: Prime, ∀F ∈ ℤp[X], ∀a ∈ ℤp →
    (F(a) = 0 ↔ 
      ∃{an} ∈ ℤ^ℕ: (
        lim(n→∞)(an) = a ∧
        ∀n ∈ ℕ: F(an) ≡ 0 mod p^(n+1)ℤp
      ))
  )
} ↔

proof PadicPolynomialRoot() {
  // Necessary Condition
  block NecessaryCondition() {
    assume(F(a) = 0) →
    setVar(a = ∑(j=0→∞)(dj * p^j)) →  // p-adic expansion
    define(an = ∑(j=0→n-1)(dj * p^j)) →
    assert(lim(n→∞)(an) = a) →
    assert(∀n ∈ ℕ>0: an ∈ ℤ) →
    
    lemma CongruenceChain() {
      assert(∀n ∈ ℕ>0: 
        an ≡ a mod p^n ℤp →
        F(an) ≡ F(a) mod p^n ℤp →
        F(an) ≡ 0 mod p^n ℤp
      )
    }
  }

  // Sufficient Condition
  block SufficientCondition() {
    assume(∃{an}: lim(n→∞)(an) = a ∧ F(an) ≡ 0 mod p^(n+1)ℤp) →
    
    lemma CongruenceNorm() {
      assert(∀k ∈ ℕ:
        a ≡ ak mod p^(n+1)ℤp →
        F(a) ≡ F(ak) mod p^(n+1)ℤp →
        F(a) ≡ 0 mod p^(n+1)ℤp →
        F(a) ∈ p^(n+1)ℤp
      )
    } →
    
    assert(∀k ∈ ℕ: ||F(a)||p ≤ p^(-k-1)) →
    assert(||F(a)||p ≤ lim(k→∞)(p^(-k-1))) →
    assert(||F(a)||p = 0) →
    apply(NonArchimedeanNormAxiom()) →
    assert(F(a) = 0)
  }
}