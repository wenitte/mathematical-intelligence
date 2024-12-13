theorem Binomial_Coefficient_Is_Integer() {
  assert(
    ∀n,k ∈ ℕ ⇒ (
      binom(n,k) ∈ ℤ
    )
  )
} ↔

proof Binomial_Coefficient_Is_Integer() {
  setVar(n,k: ℕ) →
  lemma PascalsRule() {
    assert(
      binom(n,k) = binom(n-1,k-1) + binom(n-1,k)
    )
  } →
  lemma IntegerAdditionClosed() {
    assert(
      ∀a,b ∈ ℤ ⇒ (a + b) ∈ ℤ
    )
  } →
  apply(PascalsRule()) →
  apply(IntegerAdditionClosed()) →
  assert(binom(n,k) ∈ ℤ)
}