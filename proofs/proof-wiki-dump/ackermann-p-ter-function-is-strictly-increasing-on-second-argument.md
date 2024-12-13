theorem AckermannPeterStrictlyIncreasing() {
  assert(
    ∀x,y ∈ ℕ ⇒ A(x,y+1) > A(x,y)
  )
} ↔

proof AckermannPeterStrictlyIncreasing() {
  setVar(x,y: ℕ) →
  
  inductionBase() {
    assert(x = 0) →
    assert(A(0,y+1)) →
    assert(A(0,y+1) = y+2) by(AckermannDef) →
    assert(y+2 > y+1) →
    assert(y+1 = A(0,y)) by(AckermannDef) →
    conclude(A(0,y+1) > A(0,y))
  } →

  inductionHypothesis() {
    assume(
      ∀k<x ∀y∈ℕ ⇒ A(k,y+1) > A(k,y)
    )
  } →

  inductionStep() {
    assert(A(x+1,y+1)) →
    assert(A(x+1,y+1) = A(x,A(x+1,y))) by(AckermannDef) →
    lemma AckermannGreaterThanArg() {
      assert(A(x,A(x+1,y)) > A(x+1,y))
    } →
    apply(AckermannGreaterThanArg()) →
    conclude(A(x+1,y+1) > A(x+1,y))
  } →

  apply(InductionPrinciple) →
  conclude(∀x,y∈ℕ ⇒ A(x,y+1) > A(x,y))
}