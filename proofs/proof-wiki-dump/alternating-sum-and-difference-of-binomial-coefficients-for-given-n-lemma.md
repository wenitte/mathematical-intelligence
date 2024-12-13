theorem Alternating_Sum_Binomial_Lemma() {
  assert(
    ∑(i=0 to 0)[C(0,0)] = 1
  )
} ↔

proof Alternating_Sum_Binomial_Lemma() {
  lemma Vacuous_Sum() {
    assert(
      ∀n ∈ ℤ: n < 0 → ∑(i=0 to n)[C(n,1)] = 0
    )
  } →
  
  lemma Zero_Choose_Zero() {
    assert(
      C(0,0) = 1
    )
  } →
  
  apply(Zero_Choose_Zero()) →
  assert(
    ∑(i=0 to 0)[C(0,0)] = C(0,0) = 1
  )
}