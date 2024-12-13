theorem Binomial_Zero_Coefficient() {
  assert(
    ∀n ∈ ℕ ⇒ (n choose 0) = 1
  )
} ↔

proof Binomial_Zero_Coefficient() {
  setVar(n: ℕ) →
  
  lemma Binomial_Definition() {
    assert((n choose 0) = n!/(0!⋅n!))
  } →
  
  lemma Zero_Factorial() {
    assert(0! = 1)
  } →
  
  apply(Binomial_Definition()) →
  apply(Zero_Factorial()) →
  
  assert(
    (n choose 0) = n!/(0!⋅n!) ∧
    = n!/(1⋅n!) ∧
    = 1
  )
}