theorem Binomial_Coefficient_Prime_Power() {
  assert(
    ∀p,n,k ∈ ℤ, p prime →
    (⟦p^n k⟧ choose p^n) ≡ k (mod p)
  )
} ↔

proof Binomial_Coefficient_Prime_Power() {
  lemma Lucas_Theorem() {
    assert(
      ∀n,k,p ∈ ℤ, p prime →
      [n = Σ(j=0 to r)(a_j * p^j) ∧
       k = Σ(j=0 to r)(b_j * p^j)] →
      (n choose k) ≡ ∏(j=0 to r)((a_j choose b_j)) (mod p)
    )
  } →
  
  setVar(x := p^n * k) →
  setVar(y := p^n) →
  
  assert(
    x = k * p^n = (k * 1) * p^n →
    y = p^n = (1) * p^n
  ) →
  
  apply(Lucas_Theorem()) →
  
  assert(
    (p^n * k choose p^n) ≡ (k choose 1) * ∏(j=0 to n-1)((0 choose 0)) (mod p)
  ) →
  
  lemma Binomial_Basic() {
    assert(
      (k choose 1) = k ∧
      (0 choose 0) = 1
    )
  } →
  
  apply(Binomial_Basic()) →
  
  assert(
    (p^n * k choose p^n) ≡ k * ∏(j=0 to n-1)(1) (mod p)
  ) →
  
  assert(
    (p^n * k choose p^n) ≡ k (mod p)
  )
}