theorem Complex_Subtraction() {
  assert(
    (6 - 2i) - (2 - 5i) = 4 + 3i
  )
} ↔

proof Complex_Subtraction() {
  setVar(z₁: ℂ = 6 - 2i) ∧
  setVar(z₂: ℂ = 2 - 5i) →
  
  lemma Complex_Subtraction_Definition() {
    assert(
      ∀a,b ∈ ℂ: a - b = a + (-b)
    )
  } →
  
  apply(Complex_Subtraction_Definition()) →
  assert((6 - 2i) - (2 - 5i) = (6 - 2i) + (-2 + 5i)) →
  
  lemma Geometric_Complex_Addition() {
    assert(
      ∀p₁,p₂ ∈ ℂ: p₁ + p₂ represents parallelogram completion in complex plane
      where:
        p₁ = OP₁
        p₂ = OP₂
        result = OP
    )
  } →
  
  setVar(P₁: point(6 - 2i)) ∧
  setVar(P₂: point(-2 + 5i)) →
  apply(Geometric_Complex_Addition()) →
  
  assert(
    (6 - 2i) + (-2 + 5i) = 
    (6 + (-2)) + (-2i + 5i)i = 
    4 + 3i
  ) →
  
  conclude((6 - 2i) - (2 - 5i) = 4 + 3i)
}