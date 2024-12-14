theorem Complex_Addition_Associative_Example() {
  assert(
    ∀z₁,z₂,z₃ ∈ ℂ where
    z₁ = (5 + 3i) ∧
    z₂ = (-1 + 2i) ∧
    z₃ = (7 - 5i) ⇒
    (z₁ + (z₂ + z₃)) = ((z₁ + z₂) + z₃)
  )
} ↔

proof Complex_Addition_Associative_Example() {
  setVar(z₁: (5 + 3i)) →
  setVar(z₂: (-1 + 2i)) →
  setVar(z₃: (7 - 5i)) →
  
  lemma Right_Association() {
    calc(z₂ + z₃) = (-1 + 2i) + (7 - 5i) = (6 - 3i) →
    calc(z₁ + (z₂ + z₃)) = (5 + 3i) + (6 - 3i) = 11
  } →
  
  lemma Left_Association() {
    calc(z₁ + z₂) = (5 + 3i) + (-1 + 2i) = (4 + 5i) →
    calc((z₁ + z₂) + z₃) = (4 + 5i) + (7 - 5i) = 11
  } →
  
  apply(Right_Association()) →
  apply(Left_Association()) →
  assert(
    (z₁ + (z₂ + z₃)) = ((z₁ + z₂) + z₃) = 11
  )
}