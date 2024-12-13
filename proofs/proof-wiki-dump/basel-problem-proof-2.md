theorem Basel_Problem() {
  assert(
    ∑[n=1→∞](1/n²) = π²/6 ∧
    ζ(2) = ∑[n=1→∞](1/n²)
  )
} ↔

proof Basel_Problem() {
  // Define sequence Pₖ
  setDef(Pₖ(x,k) = x∏[n=1→k](1 - x²/(n²π²))) →
  
  // Difference between consecutive terms
  assert(
    Pₖ - Pₖ₋₁ = (-x³/(k²π²))∏[n=1→k-1](1 - x²/(n²π²))
  ) →
  
  // Big-O representation
  assert(
    Pₖ - Pₖ₋₁ = -x³/(k²π²) + O(x⁵)
  ) →
  
  // Coefficient of x³ by telescoping
  lemma Coefficient_x3() {
    assert(
      coeff(Pₖ, x³) = -(1/π²)∑[n=1→k](1/n²)
    )
  } →
  
  // Two representations of sine
  assert(
    sin(x) = x∏[n=1→∞](1 - x²/(n²π²)) ∧
    sin(x) = ∑[n=0→∞]((-1)ⁿx^(2n+1)/(2n+1)!)
  ) →
  
  // Compare coefficients as k→∞
  apply(Coefficient_x3()) →
  assert(
    -(1/π²)∑[n=1→∞](1/n²) = -1/6
  ) →
  
  // Final result
  conclude(
    ∑[n=1→∞](1/n²) = π²/6
  )
}