theorem NthPrimeApproximation() {
  assert(
    ∀n ∈ ℕ ⇒ p_n ≈ n ln(n)
    where p_n := nth_prime(n)
  )
} ↔

proof NthPrimeApproximation() {
  setGoal(
    lim[n→∞](p_n/(n ln(n))) = 1
  ) →
  
  lemma PrimeCountingFunction() {
    assert(π(p_n) = n)
  } →
  
  lemma PrimeNumberTheorem() {
    assert(
      lim[x→∞](π(x)/(x/ln(x))) = 1
    )
  } →
  
  apply(PrimeNumberTheorem()) →
  assert(lim[x→∞](n/(p_n/ln(p_n))) = 1) →
  assert(lim[n→∞](p_n/(n ln(p_n))) = 1) →
  
  applyOperation(ln, bothSides) →
  assert(lim[n→∞](ln(p_n) - ln(n) - ln(ln(p_n))) = 0) →
  
  factor(ln(p_n)) →
  assert(lim[n→∞](ln(p_n)(1 - ln(n)/ln(p_n) - ln(ln(p_n))/ln(p_n))) = 0) →
  
  lemma AsymptoticBehavior() {
    assert(lim[n→∞](ln(ln(p_n))/ln(p_n)) = 0)
  } →
  
  apply(AsymptoticBehavior()) →
  assert(lim[n→∞](ln(p_n)(1 - ln(n)/ln(p_n))) = 0) →
  assert(lim[n→∞](1 - ln(n)/ln(p_n)) = 0) →
  assert(lim[n→∞](ln(n)/ln(p_n)) = 1) →
  
  substitute(
    lim[n→∞](p_n/(n ln(n))) = 
    lim[n→∞]((p_n/(n ln(p_n))) * (ln(p_n)/ln(n)))
  ) →
  
  apply(PrimeNumberTheorem()) →
  assert(lim[n→∞](p_n/(n ln(n))) = 1)
}