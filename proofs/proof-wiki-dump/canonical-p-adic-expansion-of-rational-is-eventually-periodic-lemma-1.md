theorem CanonicalPAdicExpansion_Lemma1() {
  assert(
    ∀p ∈ ℙ ∧ ∀b ∈ ℤ_{>0} ∧ gcd(b,p) = 1 ∧ ∀a ∈ ℤ ⇒
    (∀n ∈ ℕ ∃r_n ∈ ℤ : (a/b - p^{n+1}(r_n/b)) ∈ {0,1,...,p^{n+1}-1})
  )
} ↔

proof CanonicalPAdicExpansion_Lemma1() {
  setVar(n: ℕ) →
  
  lemma CoprimeToFactors() {
    assert(gcd(b,p) = 1 ⇒ gcd(b,p^{n+1}) = 1)
  } →
  
  lemma IntegerCombination() {
    assert(gcd(b,p^{n+1}) = 1 ⇒ ∃c_n,d_n ∈ ℤ : c_n b + d_n p^{n+1} = 1)
  } →
  
  apply(CoprimeToFactors()) →
  apply(IntegerCombination()) →
  
  assert(a = a c_n b + a d_n p^{n+1}) →
  
  setDef(A_n := minPosResidue(a c_n, p^{n+1})) →
  assert(0 ≤ A_n ≤ p^{n+1} - 1) →
  assert(p^{n+1} | (a c_n - A_n)) →
  
  assert(∃x_n ∈ ℤ : x_n p^{n+1} = a c_n - A_n) →
  assert(a c_n = x_n p^{n+1} + A_n) →
  
  assert(a = (x_n p^{n+1} + A_n)b + a d_n p^{n+1}) →
  assert(a = A_n b + (b x_n + a d_n)p^{n+1}) →
  
  setVar(r_n := b x_n + a d_n) →
  assert(a = A_n b + r_n p^{n+1}) →
  assert(a/b = A_n + p^{n+1}(r_n/b)) →
  assert(A_n = a/b - p^{n+1}(r_n/b)) →
  
  assert(A_n ∈ {0,1,...,p^{n+1}-1}) →
  conclude()
}