theorem Binomial_Coefficient_Zero() {
  assert(
    ∀r ∈ ℝ ⇒ (r choose 0) = 1
  )
} ↔

proof Binomial_Coefficient_Zero() {
  setVar(r: ℝ) →
  
  lemma BinomialDefinition() {
    assert(
      ∀r ∈ ℝ, ∀k ∈ ℕ ⇒ (r choose k) = r↓k / k!
    )
  } →

  lemma FallingFactorialZero() {
    assert(
      ∀x ∈ ℝ ⇒ x↓0 = ∏_{j=0}^{-1} (x - j) = 1
    )
  } →

  lemma FactorialZero() {
    assert(0! = 1)
  } →

  apply(BinomialDefinition()) →
  substitute(k = 0) →
  assert((r choose 0) = r↓0 / 0!) →
  
  apply(FallingFactorialZero()) →
  apply(FactorialZero()) →
  assert((r choose 0) = 1/1) →
  
  conclude((r choose 0) = 1)
}

lemma Natural_Number_Case() {
  assert(
    ∀n ∈ ℕ ⇒ (n choose 0) = n!/(0!n!) = 1
  )
} ↔

proof Natural_Number_Case() {
  setVar(n: ℕ) →
  assert((n choose 0) = n!/(0!n!)) →
  apply(FactorialZero()) →
  assert((n choose 0) = n!/(1·n!)) →
  conclude((n choose 0) = 1)
}