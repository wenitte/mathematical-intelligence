theorem Binomial_Coefficient_2_Choose_5() {
  assert(
    ∀n,k ∈ ℕ: n=2 ∧ k=5 → (n₂₅) = 0
  )
} ↔

proof Binomial_Coefficient_2_Choose_5() {
  setVar(n: ℕ, k: ℕ) →
  assert(n = 2) →
  assert(k = 5) →
  
  lemma Binomial_Coefficient_Definition() {
    assert(
      (nₖ) = {
        n!/(k!(n-k)!) : 0 ≤ k ≤ n
        0 : otherwise
      }
    )
  } →
  
  apply(Binomial_Coefficient_Definition()) →
  assert(k > n) →
  assert(5 > 2) →
  assert((n₂₅) = 0)
}