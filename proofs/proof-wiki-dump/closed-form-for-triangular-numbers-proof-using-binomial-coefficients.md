theorem Triangular_Numbers_Closed_Form() {
  assert(
    ∀n ∈ ℕ ⇒ T_n = ∑_{i=1}^n i = (n(n+1))/2
  )
} ↔

proof Triangular_Numbers_Closed_Form() {
  lemma Binomial_Coefficient_One() {
    assert(
      ∀k ∈ ℤ, k > 0 ⇒ (k choose 1) = k
    )
  } →
  
  setVar(n: ℕ) →
  assert(
    ∑_{k=1}^n k = ∑_{k=1}^n (k choose 1)
  ) →
  
  lemma Sum_Of_Choose_Up_To_N() {
    assert(
      ∑_{k=1}^n (k choose 1) = ((n+1) choose 2)
    )
  } →
  
  apply(Sum_Of_Choose_Up_To_N()) →
  assert(
    ∑_{k=1}^n k = ((n+1) choose 2)
  ) →
  
  lemma Binomial_Coefficient_Definition() {
    assert(
      ((n+1) choose 2) = ((n+1)n)/2
    )
  } →
  
  apply(Binomial_Coefficient_Definition()) →
  assert(
    ∑_{k=1}^n k = ((n+1)n)/2 = (n(n+1))/2
  )
}