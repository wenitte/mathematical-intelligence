theorem Binomial_Coefficient_Self_Minus_One() {
  assert(
    ∀n ∈ ℕ_{>0} ⇒ (n choose (n-1)) = n
  )
} ↔

proof Binomial_Coefficient_Self_Minus_One_Direct() {
  // Base case
  setVar(n = 1) →
  lemma Base_Case() {
    assert((1 choose 0) = 1) by BinomialCoefficientWithZero
  } →
  
  // General case
  setVar(n ∈ ℕ_{>0}, n > 1) →
  assert(
    (n choose (n-1)) = n!/(((n-1)!)(1!))
  ) by BinomialDefinition →
  assert(
    n!/(((n-1)!)(1!)) = n!/(n-1)!
  ) by FactorialOne →
  assert(
    n!/(n-1)! = n
  ) by FactorialDivision
}

proof Binomial_Coefficient_Self_Minus_One_Combinatorial() {
  setVar(n ∈ ℕ_{>0}) →
  assert(
    (n choose (n-1)) = |{S ⊆ {1,...,n} : |S| = n-1}|
  ) by CardinalityOfSubsets →
  assert(
    |{S ⊆ {1,...,n} : |S| = n-1}| = |{x ∈ {1,...,n} : x is excluded}|
  ) by ComplementarySelection →
  assert(
    |{x ∈ {1,...,n} : x is excluded}| = n
  ) by CardinalityOfSet →
  assert((n choose (n-1)) = n)
}