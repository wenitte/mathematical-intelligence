theorem Collinearity_Complex_Points() {
  assert(
    ∀z₁,z₂,z₃ ∈ ℂ ⇒
    (collinear(z₁,z₂,z₃) ↔ ∃λ ∈ ℝ: ((z₁-z₃)/(z₃-z₂) = λ))
  )
}

proof Collinearity_Complex_Points() {
  setVar(z₁,z₂,z₃: ℂ) →
  setVar(λ: ℂ) →
  
  lemma Complex_Subtraction_Geometry() {
    assert(
      (z₁-z₃) represents_vector(z₃→z₁) ∧
      (z₃-z₂) represents_vector(z₂→z₃)
    )
  } →

  lemma Collinearity_Parallel_Vectors() {
    assert(
      collinear(z₁,z₂,z₃) ↔ parallel((z₁-z₃),(z₃-z₂))
    )
  } →

  assert((z₁-z₃) = λ(z₃-z₂)) →

  lemma Complex_Multiplication_Geometry() {
    assert(
      ∀a,b ∈ ℂ: (parallel(a,b) ↔ 
        (arg(a) = arg(b) ∧ λ ∈ ℝ₊) ∨
        (arg(a) = -arg(b) ∧ λ ∈ ℝ₋)
      )
    )
  } →

  apply(Complex_Multiplication_Geometry()) →
  
  assert(
    λ ∈ ℝ₊ ⇒ z₃ between(z₁,z₂) ∧
    λ ∈ ℝ₋ ⇒ z₃ outside(z₁,z₂)
  ) →
  
  assert(
    (z₁-z₃)/(z₃-z₂) = λ ∈ ℝ ↔ collinear(z₁,z₂,z₃)
  )
}