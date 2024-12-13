theorem Bernoulli_Numbers_Rational() {
  assert(
    ∀n ∈ ℕ ⇒ B_n ∈ ℚ
  )
} ↔

proof Bernoulli_Numbers_Rational() {
  define(BernoulliRecurrence) {
    B_n = match(n) {
      case(n = 0): 1
      case(n > 0): -∑_{k=0}^{n-1} (binom(n,k) * B_k)/(n-k+1)
    }
  } →
  
  let(P(n): B_n ∈ ℚ) →
  
  baseCase() {
    assert(B_0 = 1) →
    assert(1 ∈ ℚ) →
    conclude(P(0))
  } →
  
  inductiveHypothesis() {
    assume(∀j ∈ ℕ: 0 ≤ j ≤ k ⇒ P(j)) →
    prove(P(k+1))
  } →
  
  inductiveStep() {
    apply(BernoulliRecurrence, k+1) →
    assert(B_{k+1} = -∑_{j=0}^k (binom(k+1,j) * B_j)/(k-j+2)) →
    
    lemma Components_Rational() {
      assert(∀j ∈ [0,k]: binom(k+1,j) ∈ ℤ) ∧
      assert(∀j ∈ [0,k]: B_j ∈ ℚ) ∧  // From inductive hypothesis
      assert(∀j ∈ [0,k]: k-j+2 ∈ ℤ) →
      conclude(∀j ∈ [0,k]: (binom(k+1,j) * B_j)/(k-j+2) ∈ ℚ)
    } →
    
    apply(Components_Rational()) →
    assert(finite_sum_of_rationals ∈ ℚ) →
    conclude(B_{k+1} ∈ ℚ)
  } →
  
  apply(SecondPrincipleOfInduction()) →
  conclude(∀n ∈ ℕ ⇒ B_n ∈ ℚ)
}