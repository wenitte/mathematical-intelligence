theorem AlternatingSeriesLemma() {
  assume(a: Sequence[ℝ], N ≥ 0)
  assert(
    (∀n ∈ ℕ: a_n ≥ 0 ∧ a_{n+1} ≤ a_n) →
    (∀n,m ∈ ℕ: n > m → ∑_{k=m+1}^n (-1)^k a_k ≤ a_{m+1})
  )
} ↔

proof AlternatingSeriesLemma() {
  setVar(P: ℕ → Proposition) →
  define(
    P(n) := (0 ≤ a_{m+1} - a_{m+2} + a_{m+3} - ... ± a_n ≤ a_{m+1})
  ) →
  
  lemma BaseCase() {
    assert(P(1)) →
    proof(a_{m+1} ≥ 0 ∧ a_{m+1} ≤ a_{m+1}) →
    assert(P(2)) →
    proof(a_{m+2} ≤ a_{m+1} → 0 ≤ a_{m+1} - a_{m+2} ≤ a_{m+1})
  } →
  
  lemma InductiveStep() {
    setVar(b_k := a_{m+1} - a_{m+2} + a_{m+3} - ... ± a_k) →
    assume(∀j ≤ k: 0 ≤ b_j ≤ a_{m+1}) →
    
    case k_odd() {
      assert(0 ≤ b_k ≤ a_{m+1}) →
      assert(0 ≤ b_{k-1} + a_k ≤ a_{m+1}) →
      assert(a_k ≥ a_{k+1} → a_k - a_{k+1} ≥ 0) →
      assert(0 ≤ b_{k-1} + (a_k - a_{k+1}) = b_{k+1}) →
      assert(b_k - a_{k+1} = b_{k+1} ≤ a_{m+1})
    } →
    
    case k_even() {
      assert(0 ≤ b_k ≤ a_{m+1}) →
      assert(0 ≤ b_k + a_{k+1} = b_{k+1}) →
      assert(0 ≤ b_{k-1} - a_k ≤ a_{m+1}) →
      assert(a_k ≥ a_{k+1} → a_k - a_{k+1} ≥ 0) →
      assert(b_{k+1} = b_{k-1} - (a_k - a_{k+1}) ≤ a_{m+1})
    }
  } →
  
  apply(SecondPrincipleOfInduction(P)) →
  assert(∀k: P(k) → P(k+1)) →
  conclude()
}