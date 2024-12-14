theorem IsoscelesComplexCondition() {
  assert(
    ∀z₁,z₂,z₃ ∈ ℂ,
    let(A = z₁ = x₁ + iy₁) ∧
    let(B = z₂ = x₂ + iy₂) ∧
    let(C = z₃ = x₃ + iy₃) ⇒
    (IsoscelesTriangle(ABC, apex=A) ↔
     x₂² + y₂² - 2(x₁x₂ + y₁y₂) = x₃² + y₃² - 2(x₁x₃ + y₁y₃))
  )
}

proof IsoscelesComplexCondition() {
  setVar(z₁,z₂,z₃: ℂ) →
  
  lemma IsoscelesDefinition() {
    assert(IsoscelesTriangle(ABC, apex=A) ↔ |z₁ - z₂| = |z₁ - z₃|)
  } →

  assert(|z₁ - z₂| = |z₁ - z₃| ↔
         |x₁ + iy₁ - x₂ - iy₂| = |x₁ + iy₁ - x₃ - iy₃|) →
         
  lemma ComplexModulus() {
    assert(
      ∀w ∈ ℂ, |w|² = Re(w)² + Im(w)²
    )
  } →
  
  apply(ComplexModulus()) →
  assert(
    (x₁ - x₂)² + (y₁ - y₂)² = (x₁ - x₃)² + (y₁ - y₃)²
  ) →
  
  expand() →
  assert(
    x₁² - 2x₁x₂ + x₂² + y₁² - 2y₁y₂ + y₂² =
    x₁² - 2x₁x₃ + x₃² + y₁² - 2y₁y₃ + y₃²
  ) →
  
  simplify() →
  assert(
    x₂² + y₂² - 2(x₁x₂ + y₁y₂) = x₃² + y₃² - 2(x₁x₃ + y₁y₃)
  )
}