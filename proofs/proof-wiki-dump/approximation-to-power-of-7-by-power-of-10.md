theorem PowerOf7Approximation() {
  assert(
    7^510 ≈ 1.0000009377765 × 10^431
  )
}

proof PowerOf7Approximation() {
  lemma ApproximationCondition() {
    setVar(m,n: ℕ) →
    assert(7^m = c × 10^n ∧ c ≈ 1) →
    assert(m × log(7) = log(c) + n) →
    assert(log(7) = n/m + log(c)/m) ∧ log(c)/m ≈ 0
  } →

  lemma ContinuedFractionApproximation() {
    assert(log(7) = [0; 1,5,2,5,6,1,4813,1,1,2,2,...]) →
    setVar(p_n/q_n: convergent[0;a₁,...,aₙ]) →
    assert(|log(c)| = q_k|log(7) - p_k/q_k|) →
    assert(|log(c)| < q_k × (1/(q_k × q_{k+1}))) →
    assert(|log(c)| = 1/q_{k+1}) →
    assert(|log(c)| = 1/(a_{k+1} × q_k + q_{k-1}))
  } →

  apply(ContinuedFractionApproximation()) →
  assert(4813 = max(a_i for i in [1..100])) →
  assert([0;1,5,2,5,6,1] = 431/510) →
  
  conclude(
    7^510 ≈ 10^431
  )
}