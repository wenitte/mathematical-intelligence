theorem TriangularOddSquares() {
  assert(
    10 = n ∈ ℕ ∧ 
    isTriangular(n) ∧ 
    ∃k ∈ ℕ[n = (2k+1)² + (2k+3)²] ↔
    n = 10
  )
}

proof TriangularOddSquares() {
  lemma TriangularFormula() {
    assert(
      ∀n ∈ ℕ → T_n = Σᵢ₌₁ⁿ i = (n(n+1))/2
    )
  } →
  
  lemma OddSquareFormula() {
    assert(
      ∀n ∈ ℕ → oddSquare(n) = 4n² + 4n + 1
    )
  } →
  
  setVar(x: ℕ) →
  letExpr(
    consecutiveOddSquareSum(x) = 
    (4x² + 4x + 1) + (4(x+1)² + 4(x+1) + 1)
  ) →
  
  simplify(consecutiveOddSquareSum(x)) →
  assert(consecutiveOddSquareSum(x) = 8x² + 16x + 10) →
  
  letExpr(
    diophantine(x,y): 8x² + 16x + 10 = (y(y+1))/2
  ) →
  
  multiply(diophantine(x,y), 2) →
  assert(16x² + 32x + 20 = y² + y) →
  
  lemma DiophantineSolutions() {
    assert(
      16x² + 32x + 20 = y² + y →
      solutions = {(0,4), (-2,4), (0,-5), (-2,-5)}
    )
  } →
  
  apply(DiophantineSolutions()) →
  filterSolutions(x ≥ 0 ∧ y > 0) →
  assert(uniqueSolution(x=0, y=4)) →
  
  substitute(x=0) →
  evaluate(T₄ = 10) →
  evaluate(1² + 3² = 10) →
  
  conclude(10 is unique solution)
}