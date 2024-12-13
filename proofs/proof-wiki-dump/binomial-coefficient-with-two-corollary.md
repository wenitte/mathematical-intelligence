theorem Binomial_Coefficient_Two() {
  assert(
    ∀n ∈ ℕ ⇒ (n choose 2) = T_{n-1} = (n(n-1))/2
    where T_n defines nth triangular number
  )
} ↔

proof Binomial_Coefficient_Two() {
  setVar(n: ℕ) →
  
  lemma Binomial_Definition() {
    assert((n choose 2) = n!/(2!(n-2)!))
  } →
  
  lemma Factorial_Two() {
    assert(2! = 1 × 2)
  } →
  
  apply(Binomial_Definition()) →
  substitute(n!/(2!(n-2)!)) →
  substitute(n!/(2(n-2)!)) →
  simplify() →
  assert((n(n-1))/2) →
  
  lemma Triangular_Number() {
    assert(T_{n-1} = (n(n-1))/2)
  } →
  
  apply(Triangular_Number()) →
  assert((n choose 2) = T_{n-1} = (n(n-1))/2)
}