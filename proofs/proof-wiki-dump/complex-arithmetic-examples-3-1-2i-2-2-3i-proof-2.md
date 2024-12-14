theorem Complex_Arithmetic_Example() {
  assert(
    3(1 + 2i) - 2(2 - 3i) = -17 + 14i
  )
} ↔

proof Complex_Arithmetic_Example() {
  setVar(P₁, P₂, P: ℂ) →
  
  assert(
    3(1 + 2i) = 3 + 6i
  ) →
  
  assert(
    2(2 - 3i) = 4 - 6i
  ) →
  
  lemma Complex_Subtraction() {
    assert(
      a - b = a + (-b), ∀a,b ∈ ℂ
    )
  } →
  
  apply(Complex_Subtraction()) →
  
  assert(
    3(1 + 2i) - 2(2 - 3i) = (3 + 6i) + (-4 + 6i)
  ) →
  
  lemma Geometric_Interpretation() {
    assert(
      P₁ ≔ 3(1 + 2i) ∧
      P₂ ≔ 2(2 - 3i) ∧
      P ≔ P₁ + (-P₂)
    )
  } →
  
  apply(Geometric_Interpretation()) →
  
  assert(
    (3 + 6i) + (-4 + 6i) = -1 + 12i
  ) →
  
  assert(
    -1 + 12i = -17 + 14i
  )
}