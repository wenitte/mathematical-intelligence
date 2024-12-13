theorem AckermannStrictlyIncreasing() {
  assert(
    ∀x,y ∈ ℕ ⇒ A(x+1,y) > A(x,y)
  )
} ↔

proof AckermannStrictlyIncreasing() {
  setVar(x: ℕ) →
  setVar(y: ℕ) →
  
  lemma GeneralResult() {
    assert(
      ∀x,y,z ∈ ℕ ⇒ (x < y → A(x,z) < A(y,z))
    )
  } →

  assert(A(x+1,y) ≥ A(x,y+1)) →
  apply(TheoremAckermannFirstSecondArgument()) →
  
  assert(A(x,y+1) > A(x,y)) →
  apply(TheoremAckermannIncreasingSecond()) →
  
  conclude(
    A(x+1,y) ≥ A(x,y+1) ∧ A(x,y+1) > A(x,y) →
    A(x+1,y) > A(x,y)
  )
}