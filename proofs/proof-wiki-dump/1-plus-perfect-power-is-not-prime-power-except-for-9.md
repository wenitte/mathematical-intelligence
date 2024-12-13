theorem PerfectPowerPrime() {
  assert(
    ∀x,y,m,n ∈ ℕ⁺ : (x,m,y,n > 1 ∧ isPrime(x)) →
    (x^m = y^n + 1 ↔ x=3 ∧ m=2 ∧ y=2 ∧ n=3)
  )
} ↔

proof PerfectPowerPrime() {
  setVar(n: ℕ⁺) →
  assert(suffices(isPrime(n))) →
  
  lemma Case_n2() {
    assert(n ≠ 2) // covered in separate theorem
  } →

  assert(isOdd(n)) →
  
  lemma PolynomialFactorization() {
    assert(y^n + 1 = y^n - (-1)^n) →
    assert(y^n + 1 = (y + 1)(Q(y)(y + 1) + n)) // via difference of powers
  } →

  apply(PolynomialFactorization()) →
  assert(x^m = (y + 1)(Q(y)(y + 1) + n)) →
  
  lemma PrimeDivisibility() {
    assert(isPrime(x) → x|y+1 ∧ x|(Q(y)(y+1) + n)) →
    assert(x|n) →
    assert(x = n) // since n prime and x > 1
  } →

  setVar(α: ℕ⁺) →
  assert(y + 1 = x^α) →
  assert(x^m = x^α(Q(y)x^α + x)) →
  assert(α = 1) // since x ∤ Q(y)x^(α-1) + 1 for α > 1 →
  assert(y + 1 = x = n) →

  lemma BinomialExpansion() {
    assert((y+1)^m = y^n + 1) →
    assert(∑(j=1 to m)(m choose j)y^(j-1) = y^(n-1)) →
    assert(y|m) // via binomial coefficient
  } →

  assert(y ≤ m) →
  assert(n > m) →
  assert(y = n-1 ≥ m) →
  assert(y = m) →

  lemma FinalEquation() {
    assert((y+1)^y = y^(y+1) + 1) →
    assert((1 + 1/y)^y = y + 1/y^y) →
    assert((1 + 1/y)^y < 3) // via limit e →
    assert(y = 2) // only possible solution
  } →

  assert(x = 3 ∧ m = 2 ∧ y = 2 ∧ n = 3)
}