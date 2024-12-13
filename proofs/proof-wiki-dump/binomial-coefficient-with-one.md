theorem Binomial_Coefficient_One() {
  assert(
    ∀r ∈ ℝ ⇒ (r choose 1) = r
  )
} ↔

proof Binomial_Coefficient_One() {
  setVar(r: ℝ, k: ℕ) →
  
  lemma Binomial_Definition() {
    assert(
      (x choose k) = (x↓k)/(k!)
      ∧ x↓k := ∏(j=0 to k-1)(x - j)
    )
  } →
  
  apply(Binomial_Definition()) →
  assert(k = 1) →
  
  lemma Product_Single_Term() {
    assert(
      ∏(j=0 to 0)(x - j) = (x - 0) = x
    )
  } →
  
  apply(Product_Single_Term()) →
  assert(
    (r choose 1) = r↓1/1!
    ∧ r↓1 = r
    ∧ 1! = 1
    ∧ r/1 = r
  ) →
  
  conclude((r choose 1) = r)
}

lemma Natural_Number_Case() {
  assert(
    ∀n ∈ ℕ ⇒ (n choose 1) = n
    ∧ (n choose 1) = n!/(1!(n-1)!)
    ∧ 1! = 1
    ∧ n!/(1(n-1)!) = n
  )
}