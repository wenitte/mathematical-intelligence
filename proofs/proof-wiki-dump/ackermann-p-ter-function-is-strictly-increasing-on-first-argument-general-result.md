theorem AckermannPeterStrictlyIncreasing() {
  assert(
    ∀x,y,z ∈ ℕ ∧ (x < y) ⇒ A(x,z) < A(y,z)
  )
} ↔

proof AckermannPeterStrictlyIncreasing() {
  setVar(x,y,z: ℕ) →
  assert(y = x + k where k ∈ ℕ_{>0}) →
  
  inductionBase(k = 1) {
    assert(A(x,z) < A(x + 1,z)) →
    apply(AckermannPeterStrictlyIncreasingBase)
  } →

  inductionHyp(k ∈ ℕ_{>0}) {
    assert(A(x,z) < A(x + k,z))
  } →

  inductionStep() {
    assert(A(x + k + 1,z) > A(x + k,z)) →
    apply(AckermannPeterStrictlyIncreasingBase) →
    assert(A(x + k,z) > A(x,z)) →
    apply(inductionHyp) →
    assert(A(x + k + 1,z) > A(x,z)) →
    apply(TransitiveProperty)
  } →

  apply(MathematicalInduction) →
  assert(∀x,y,z ∈ ℕ ∧ (x < y) ⇒ A(x,z) < A(y,z))
}