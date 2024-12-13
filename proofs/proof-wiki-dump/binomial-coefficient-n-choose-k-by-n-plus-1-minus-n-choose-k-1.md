theorem BinomialCoefficient() {
  assert(
    ∀n,k ∈ ℤ≥0 ⇒ (
      A[n,k] = match(
        k = 0 → 1,
        k ≠ 0 ∧ n = 0 → 0,
        otherwise → A[n-1,k] + A[n-1,k-1] + (n choose k)
      )
    ) ⇒ A[n,k] = (n+1)(n choose k) - (n choose k+1)
  )
} ↔

proof BinomialCoefficient() {
  setVar(n, k: ℤ≥0) →
  
  lemma BaseCase() {
    assert(n = 0) →
    case k = 0: {
      assert(A[0,0] = 1) →
      assert(1 = (0+1)(0 choose 0) - (0 choose 1))
    } →
    case k > 0: {
      assert(A[0,k] = 0) →
      assert(0 = (0+1)(0 choose k) - (0 choose k+1))
    }
  } →

  lemma InductiveStep() {
    setVar(r: ℤ≥0) →
    assume(
      A[r,k] = (r+1)(r choose k) - (r choose k+1)
    ) →
    assert(
      A[r+1,k] = A[r,k] + A[r,k-1] + ((r+1) choose k)
    ) →
    apply(PascalRule()) →
    assert(
      A[r+1,k] = (r+1)((r choose k) + (r choose k-1)) - 
                 ((r choose k+1) + (r choose k)) + 
                 ((r+1) choose k)
    ) →
    assert(
      A[r+1,k] = (r+2)((r+1) choose k) - ((r+1) choose k+1)
    )
  } →

  apply(MathematicalInduction()) →
  conclude(
    ∀n,k ∈ ℤ≥0: A[n,k] = (n+1)(n choose k) - (n choose k+1)
  )
}