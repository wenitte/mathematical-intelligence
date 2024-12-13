theorem Bertrand_Chebyshev_Lemma_4() {
  assert(
    ∀n ∈ ℕ, n ≥ 1 ⇒ (binom(2n,n) ≥ 2^(2n)/(2n))
  )
} ↔

proof Bertrand_Chebyshev_Lemma_4() {
  setVar(n: ℕ, n ≥ 1) →
  
  lemma Binomial_Sequence_Property() {
    assert(
      ∀k ∈ ℕ, 0 ≤ k ≤ n ⇒ binom(n,k) ≤ binom(n,⌊n/2⌋)
    )
  } →
  
  lemma Binomial_Max_Value() {
    assert(
      ∀k ∈ ℕ, 0 ≤ k ≤ 2n ⇒ binom(2n,k) ≤ binom(2n,n)
    )
  } →
  
  assert(2^(2n) = ∑(k=0 to 2n)(binom(2n,k))) →
  apply(Binomial_Sum_Identity()) →
  assert(
    2^(2n) = binom(2n,0) + ∑(k=1 to 2n-1)(binom(2n,k)) + binom(2n,2n)
  ) →
  assert(
    2^(2n) = 2 + ∑(k=1 to 2n-1)(binom(2n,k))
  ) →
  
  apply(Binomial_Max_Value()) →
  assert(
    2^(2n) ≤ binom(2n,n) + ∑(k=1 to 2n-1)(binom(2n,n))
  ) →
  assert(
    2^(2n) ≤ 2n·binom(2n,n)
  ) →
  assert(
    binom(2n,n) ≥ 2^(2n)/(2n)
  )
}