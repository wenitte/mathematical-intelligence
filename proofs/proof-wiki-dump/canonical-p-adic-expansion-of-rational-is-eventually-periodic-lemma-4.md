theorem CanonicalPAdicRationalLemma4() {
  assert(
    ∀p ∈ Primes, ∀y ∈ ℚₚ, ∀a ∈ ℤ, ∀b ∈ ℤ₊ (
      (y = a/b ∧ y ∈ PAdicIntegers) ∧
      (∀n ∈ ℕ, ∃A_n,r_n ∈ ℤ: 
        ((a/b = A_n + p^(n+1) * r_n/b) ∧
         (0 ≤ A_n ≤ p^(n+1) - 1) ∧
         (lim[n→∞](A_n) = a/b)))
      ⇒
      ∀n ∈ ℕ: r_n = d_(n+1)*b + p*r_(n+1)
    )
  )
} ↔

proof CanonicalPAdicRationalLemma4() {
  setVar(n: ℕ) →
  assert(a/b = A_n + p^(n+1) * r_n/b) →
  assert(a/b = A_(n+1) + p^(n+2) * r_(n+1)/b) →
  
  assert(A_(n+1) + p^(n+2) * r_(n+1)/b = A_n + p^(n+1) * r_n/b) →
  assert(A_(n+1) - A_n = p^(n+1) * (r_n - p*r_(n+1))/b) →
  assert(b*(A_(n+1) - A_n) = p^(n+1) * (r_n - p*r_(n+1))) →

  lemma CoprimeToPrime() {
    assert(p ∤ b) →
    assert(gcd(b,p) = 1) →
    assert(gcd(b,p^(n+1)) = 1) →
    assert(b ∤ p^(n+1))
  } →

  apply(EuclidsLemma()) →
  assert(b | (r_n - p*r_(n+1))) →
  assert((r_n - p*r_(n+1))/b ∈ ℤ) →
  assert(A_(n+1) ≡ A_n (mod p^(n+1))) →

  lemma CoherentSequence() {
    assert({A_n} is coherent) →
    assert(∃{e_n}: A_n = Σ[i=0→n](e_i * p^i)) →
    assert(y = a/b = Σ[n=0→∞](e_n * p^n)) →
    assert(∀n ∈ ℕ: e_n = d_n) →
    assert(∀n ∈ ℕ: A_(n+1) = A_n + d_(n+1) * p^(n+1))
  } →

  assert(d_(n+1) * p^(n+1) = A_(n+1) - A_n) →
  assert(d_(n+1) * p^(n+1) = p^(n+1) * (r_n - p*r_(n+1))/b) →
  assert(d_(n+1) = (r_n - p*r_(n+1))/b) →
  assert(r_n = d_(n+1)*b + p*r_(n+1))
}