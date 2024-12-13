theorem Ackermann_Peter_At_1y() {
  assert(
    ∀y ∈ ℕ ⇒ A(1,y) = y + 2
    where A: ℕ × ℕ → ℕ is Ackermann-Péter function
  )
} ↔

proof Ackermann_Peter_At_1y() {
  apply(InductionPrinciple(y ∈ ℕ)) →

  baseCase(y = 0) {
    assert(A(1,0)) →
    assert(A(1,0) = A(0,1)) by AckermannDef →
    assert(A(0,1) = 2) by AckermannDef →
    conclude(A(1,0) = 2) 
  } ∧

  inductiveStep() {
    setVar(y: ℕ) →
    assume(A(1,y) = y + 2) as InductionHypothesis →
    
    assert(A(1,y+1)) →
    assert(A(1,y+1) = A(0,A(1,y))) by AckermannDef →
    assert(A(0,A(1,y)) = A(0,y+2)) by InductionHypothesis →
    assert(A(0,y+2) = y+3) by AckermannDef →
    conclude(A(1,y+1) = y+3)
  } →

  conclude(∀y ∈ ℕ ⇒ A(1,y) = y + 2) by InductionPrinciple
}