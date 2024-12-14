theorem CauchyInequality() {
  assert(
    ∀{ri, si} ∈ ℝ ⇒ (∑ri²)(∑si²) ≥ (∑risi)²
  )
} ↔

proof CauchyInequality() {
  lemma ComplexCauchySchwarz() {
    assert(
      ∀{wi, zi} ∈ ℂ ⇒ (∑|wi|²)(∑|zi|²) ≥ |∑wizi|²
    )
  } →
  
  assert(ℝ ⊂ ℂ) →
  
  setVar({ri, si}: ℝ) →
  
  apply(ComplexCauchySchwarz(), 
    wi ← ri,
    zi ← si
  ) →
  
  lemma RealModulus() {
    assert(
      ∀x ∈ ℝ ⇒ |x|² = x²
    )
  } →
  
  apply(RealModulus()) →
  
  assert(
    (∑|ri|²)(∑|si|²) ≥ |∑risi|² ↔
    (∑ri²)(∑si²) ≥ (∑risi)²
  )
}