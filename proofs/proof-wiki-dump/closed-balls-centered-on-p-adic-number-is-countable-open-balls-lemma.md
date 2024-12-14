theorem PadicBallEpsilonBound(p: ℕ, ε: ℝ) {
  require(isPrime(p)) ∧
  require(ε > 0) →
  assert(
    ∃n ∈ ℤ : p^(-(n + 1)) < ε ≤ p^(-n)
  )
}

proof PadicBallEpsilonBound() {
  lemma ClosedBalls() {
    assert(∃m ∈ ℤ : p^(-m) ≤ ε < p^(-(m - 1)))
  } →
  apply(ClosedBalls()) →
  
  case ε ≠ p^(-m) {
    assert(p^(-m) < ε < p^(-(m - 1))) →
    setVar(n = m - 1) →
    assert(p^(-(n + 1)) < ε ≤ p^(-n))
  } ∨

  case ε = p^(-m) {
    lemma PowerFunctionDecreasing() {
      assert(0 < p^(-1) < 1) →
      assert(p^(-(m + 1)) < p^(-m))
    } →
    apply(PowerFunctionDecreasing()) →
    setVar(n = m) →
    assert(p^(-(n + 1)) < ε ≤ p^(-n))
  }
}