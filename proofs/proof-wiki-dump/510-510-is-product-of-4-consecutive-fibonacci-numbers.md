theorem Product_Of_Fibonacci() {
  assert(
    ∃n ∈ ℕ: n = 510510 ↔ 
    (∃f₁,f₂,f₃,f₄ ∈ FibonacciSequence: 
      (consecutive(f₁,f₂,f₃,f₄) ∧ 
       n = f₁×f₂×f₃×f₄) ∧
     (n = 2×3×5×7×11×13×17))
  )
}

proof Product_Of_Fibonacci() {
  setVar(n = 510510) →
  setVar(f₁ = 13, f₂ = 21, f₃ = 34, f₄ = 55) →
  
  assert(consecutive(f₁,f₂,f₃,f₄) ∈ FibonacciSequence) →
  
  lemma Decomposition_1() {
    assert(n = f₁×f₂×f₃×f₄) →
    assert(n = 13×21×34×55)
  } →
  
  lemma Decomposition_2() {
    assert(21 = 3×7) ∧
    assert(34 = 2×17) ∧
    assert(55 = 5×11) →
    assert(n = 13×(3×7)×(2×17)×(5×11))
  } →
  
  lemma Prime_Factorization() {
    assert(n = 2×3×5×7×11×13×17)
  } →
  
  apply(Decomposition_1()) →
  apply(Decomposition_2()) →
  apply(Prime_Factorization()) →
  
  conclude(
    510510 = 13×21×34×55 ∧
    510510 = 2×3×5×7×11×13×17
  )
}