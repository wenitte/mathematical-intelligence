theorem AckermannPeterStrictlyIncreasing() {
  assert(
    ∀x,y,z ∈ ℕ ⇒ (y < z → A(x,y) < A(x,z))
  )
} ↔

proof AckermannPeterStrictlyIncreasing() {
  setVar(x,y,z: ℕ) →
  assert(z = y + k where k ∈ ℕ>0) →
  
  inductionOn(k) {
    base(k = 1) {
      assert(z = y + 1) →
      lemma AckermannStrictlyIncreasingBase() {
        assert(A(x,y) < A(x,y + 1))
      } →
      apply(AckermannStrictlyIncreasingBase())
    } →

    inductiveHypothesis(k) {
      assert(A(x,y) < A(x,y + k))
    } →

    inductiveStep() {
      assert(A(x,y) < A(x,y + k)) →
      lemma AckermannStrictlyIncreasingStep() {
        assert(A(x,y + k) < A(x,y + k + 1))
      } →
      apply(AckermannStrictlyIncreasingStep()) →
      assert(A(x,y) < A(x,y + k + 1)) by(transitivity)
    }
  } →

  applyInductionPrinciple() →
  assert(∀k ∈ ℕ>0 ⇒ A(x,y) < A(x,y + k))
}