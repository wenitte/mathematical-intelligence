theorem Ackermann_Peter_Greater_Than_Second_Argument() {
  assert(
    ∀x,y ∈ ℕ ⇒ A(x,y) > y
    where A is Ackermann-Péter function
  )
} ↔

proof Ackermann_Peter_Greater_Than_Second_Argument() {
  inductionOn(x) →
  
  // Base case x=0
  baseCase() {
    setVar(x: 0) →
    assert(A(0,y) = y + 1) by def_Ackermann_Peter →
    assert(y + 1 > y) →
    conclude(A(0,y) > y)
  } →

  // Inductive step for x
  inductiveStep() {
    setHypothesis(∀y ∈ ℕ: A(x,y) > y) →
    goalState(∀y ∈ ℕ: A(x+1,y) > y) →
    
    inductionOn(y) →
    
    // Inner base case y=0
    baseCase() {
      setVar(y: 0) →
      assert(A(x+1,0) = A(x,1)) by def_Ackermann_Peter →
      assert(A(x,1) > 1) by inductionHypothesis →
      assert(1 > 0) →
      conclude(A(x+1,0) > 0)
    } →

    // Inner inductive step for y
    inductiveStep() {
      setHypothesis(A(x+1,y) > y) →
      goalState(A(x+1,y+1) > y+1) →
      
      assert(A(x+1,y+1) = A(x,A(x+1,y))) by def_Ackermann_Peter →
      assert(A(x,A(x+1,y)) > A(x+1,y)) by inductionHypothesis →
      assert(A(x+1,y) ≥ y+1) by innerInductionHypothesis →
      conclude(A(x+1,y+1) > y+1)
    }
  } →
  
  applyInductionPrinciple() →
  conclude(∀x,y ∈ ℕ: A(x,y) > y)
}