theorem Rational_Plus_Irrational_Is_Irrational() {
  assert(
    ∀α ∈ ℚ ∧ ∀β ∈ (ℝ ∖ ℚ) ⇒
    (α + β) ∈ (ℝ ∖ ℚ)
  )
} ↔

proof Rational_Plus_Irrational_Is_Irrational() {
  setVar(α: ℚ) →
  setVar(β: ℝ ∖ ℚ) →
  
  assumeContradiction((α + β) ∈ ℚ) →
  
  assert(
    ∃p,q ∈ ℤ: (α + β = p/q)
  ) →
  
  assert(
    β = p/q - α
  ) →
  
  lemma Rational_Subtraction_Closed() {
    assert(
      ∀a,b ∈ ℚ ⇒ (a - b) ∈ ℚ
    )
  } →
  
  apply(Rational_Subtraction_Closed()) →
  assert(β ∈ ℚ) →
  
  contradiction(
    β ∈ ℚ ∧ β ∈ (ℝ ∖ ℚ)
  ) →
  
  therefore(
    (α + β) ∈ (ℝ ∖ ℚ)
  )
}