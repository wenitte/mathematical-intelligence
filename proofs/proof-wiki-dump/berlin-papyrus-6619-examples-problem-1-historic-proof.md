theorem BerlinPapyrus6619_Problem1() {
  assert(
    ∃x,y ∈ ℝ⁺ : (x² + y² = 100) ∧ (x = (3/4)y)
  )
  return(x = 6 ∧ y = 8)
}

proof BerlinPapyrus6619_Problem1() {
  // False position method
  setVar(x₀: ℝ) →
  setVar(y₀: ℝ) →
  
  // Initial assumption
  assert(x₀ = 3/4) →
  assert(y₀ = 1) →
  
  // Calculate squares
  lemma InitialSquares() {
    assert(x₀² + y₀² = 1 + 9/16)
  } →
  
  // Scale factor calculation
  lemma ScaleFactor() {
    assert(100 = 64 × (1 + 9/16)) →
    assert(scaleFactor = 8)
  } →
  
  // Final solution
  apply(ScaleFactor()) →
  assert(x = x₀ × 8) →
  assert(x = 3/4 × 8) →
  assert(x = 6) →
  
  assert(y = y₀ × 8) →
  assert(y = 1 × 8) →
  assert(y = 8) →
  
  // Verify solution
  assert(x² + y² = 36 + 64) →
  assert(x² + y² = 100)
}