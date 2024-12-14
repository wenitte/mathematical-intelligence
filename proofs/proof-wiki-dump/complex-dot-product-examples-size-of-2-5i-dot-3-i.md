theorem Complex_Dot_Product_Example() {
  let(z₁ = 2 + 5i)
  let(z₂ = 3 - i)
  assert(
    |z₁ ∘ z₂| = 1
  )
}

proof Complex_Dot_Product_Example() {
  setVar(z₁, z₂: ℂ) →
  let(z₁ = 2 + 5i) ∧
  let(z₂ = 3 - i) →
  
  assert(z₁ ∘ z₂ = (2 + 5i) ∘ (3 - i)) →
  
  lemma Complex_Dot_Product_Definition() {
    assert(
      ∀a,b ∈ ℂ: a ∘ b = Re(a)Re(b) + Im(a)Im(b)
    )
  } →
  
  apply(Complex_Dot_Product_Definition()) →
  assert(z₁ ∘ z₂ = (2)(3) + (5)(-1)) →
  assert(z₁ ∘ z₂ = 6 - 5) →
  assert(z₁ ∘ z₂ = 1) →
  
  lemma Absolute_Value_Of_Real() {
    assert(
      ∀x ∈ ℝ: |x| = x when x > 0
    )
  } →
  
  apply(Absolute_Value_Of_Real()) →
  assert(|z₁ ∘ z₂| = |1| = 1)
}