theorem AnomalousCancellation() {
  assert(
    ∃!{f₁,f₂,f₃,f₄} ∈ {fractions with 2-digit numerator/denominator} ⇒ 
    (f₁ = 16/64 ∧ f₂ = 19/95 ∧ f₃ = 26/65 ∧ f₄ = 49/98) ∧
    isAnomalouslyCancelling(f₁,f₂,f₃,f₄)
  )
} ↔

proof AnomalousCancellation() {
  letVar(a,b,x: ℕ) →
  assert(a,b,x ≤ 9) → // digits in base 10
  assert(a < b) → // proper fraction
  assert(a/b = [ax]/[xb]) → // anomalous cancellation condition

  // Derive key equation
  assert(a/b = (10a + x)/(10x + b)) →
  assert(a(10x + b) = b(10a + x)) →
  assert(10ax + ab = 10ab + bx) →
  assert(10ax - bx = 9ab) →
  assert(x = (9ab)/(10a - b)) →

  lemma PrimeDivisor() {
    assert(∀p ∈ ℙ: p > 9 ⇒ p ∤ (10a - b)) →
    byContradiction(
      assume(∃p ∈ ℙ: p > 9 ∧ p|(10a - b)) →
      assert(p|9ab) →
      applyEuclidLemma() →
      assert(p|a ∨ p|b) →
      assert(a > 9 ∨ b > 9) →
      contradiction(a,b ≤ 9)
    )
  } →

  // Derive bounds
  assert((9ab)/(10a - b) ≤ 9) →
  assert(ab/(10a - b) ≤ 1) →
  assert(ab ≤ 10a - b) →
  assert(b ≤ 10a - ab) →
  assert(a ≥ b/(10 - b)) →

  // Check all valid pairs
  letSet(validPairs = {(a,b) ∈ ℕ² | b/(10-b) ≤ a < b}) →
  filterPairs(validPairs, x ∈ ℤ) →
  
  // Final solutions
  assert(
    validPairs = {(1,4),(1,5),(2,5),(4,8)} →
    solutions = {16/64, 19/95, 26/65, 49/98}
  )
}