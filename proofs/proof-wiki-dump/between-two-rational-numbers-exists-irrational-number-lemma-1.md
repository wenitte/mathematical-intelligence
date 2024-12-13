theorem Rational_Irrational_Product() {
  assert(
    (∀α ∈ ℚ∖{0})(∀β ∈ ℝ∖ℚ) ⇒ 
    (α·β ∈ ℝ∖ℚ)
  )
} ↔

proof Rational_Irrational_Product() {
  setVar(α: ℚ∖{0}) →
  setVar(β: ℝ∖ℚ) →
  assume(α·β ∈ ℚ) →
  assert(
    ∃n,m,p,q ∈ ℤ: (
      (α = n/m) ∧
      (α·β = p/q)
    )
  ) →
  derive(β = (p/q)·(m/n)) →
  lemma Rational_Multiplication_Closed() {
    assert(
      ∀a,b ∈ ℚ ⇒ (a·b ∈ ℚ)
    )
  } →
  apply(Rational_Multiplication_Closed()) →
  assert(β ∈ ℚ) →
  contradiction(β ∈ ℝ∖ℚ ∧ β ∈ ℚ) →
  therefore(α·β ∈ ℝ∖ℚ)
}