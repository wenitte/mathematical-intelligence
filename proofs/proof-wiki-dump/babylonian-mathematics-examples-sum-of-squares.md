theorem BabylonianSquareSum() {
  assert(
    ∃x,y ∈ ℝ+ : (x² + y² = 1000) ∧ (x = (2y/3) - 10)
  )
} ↔

proof BabylonianSquareSum() {
  setVar(x: ℝ+) →
  setVar(y: ℝ+) →
  
  assert(x² + y² = 1000) →                  // Equation (1)
  assert(x = (2y/3) - 10) →                 // Equation (2)
  
  lemma SubstituteY() {
    assert(y = (3(x + 10))/2) →
    assert(x² + ((3(x + 10))/2)² = 1000)
  } →
  
  apply(SubstituteY()) →
  assert(4x² + 9(x² + 20x + 100) = 4000) →
  assert(13x² + 180x - 3100 = 0) →
  
  lemma QuadraticSolution() {
    assert(x = (-180 ± √(180² + 4×13×3100))/26) →
    assert(x = (-180 ± 440)/26) →
    assert(x ∈ {10, -310/13})
  } →
  
  apply(QuadraticSolution()) →
  assert(x = 10) →                          // Reject negative solution
  
  lemma FindY() {
    assert(y = 3(10 + 10)/2) →
    assert(y = 30)
  } →
  
  apply(FindY()) →
  
  lemma Verify() {
    assert(10² + 30² = 100 + 900) →
    assert(100 + 900 = 1000)
  } →
  
  apply(Verify()) →
  assert((x,y) = (10,30))                   // Final solution
}