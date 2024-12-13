theorem Binomial_Coefficient_Is_Integer() {
  assert(
    ∀n,k ∈ ℤ ⇒ (ℤ ∋ (n choose k))
  )
}

proof Binomial_Coefficient_Is_Integer_1() {
  setVar(n,k: ℤ) →
  assert(¬(0 ≤ k ≤ n) → (n choose k) = 0) →
  assume(0 ≤ k ≤ n) →
  
  def(BinomialCoefficient) {
    assert((n choose k) = n!/(k!(n-k)!))
  } →
  
  rewrite() {
    assert((n choose k) = (n(n-1)(n-2)....(n-k+1))/k!)
  } →
  
  lemma Numerator_Structure() {
    assert(
      ∃p ∈ ℤ: p = n(n-1)(n-2)....(n-k+1) ∧
      p = Product(k successive integers)
    )
  } →
  
  apply(Factorial_Divides_Product_Of_Successive_Numbers) {
    assert(k! | n(n-1)(n-2)....(n-k+1))
  } →
  
  conclude((n choose k) ∈ ℤ)
}

proof Binomial_Coefficient_Is_Integer_2() {
  apply(Pascal_Rule) →
  apply(Integer_Addition_Is_Closed) →
  conclude((n choose k) ∈ ℤ)
}