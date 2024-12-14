theorem Complex_Arithmetic_Example() {
  assert(
    let(z₁ = 1 - i) ∧
    let(z₂ = -2 + 4i) ∧
    let(z₃ = √3 - 2i) ⇒
    Im((z₁z₂)/z₃) = (6√3 + 4)/7
  )
} ↔

proof Complex_Arithmetic_Example() {
  setExpr(target = Im((z₁z₂)/z₃)) →
  assert(target = Im(((1 - i)(-2 + 4i))/(√3 - 2i))) →
  
  // Multiply first bracket
  assert(target = Im((-2 + 2i + 4i - 4i²)/(√3 - 2i))) →
  
  // Simplify using i² = -1
  assert(target = Im((2 + 6i)/(√3 - 2i))) →
  
  // Multiply numerator and denominator by conjugate
  assert(target = Im(((2 + 6i)(√3 + 2i))/((√3 - 2i)(√3 + 2i)))) →
  
  // Multiply numerator terms
  assert(target = Im((2√3 + 4i + 6√3i + 12i²)/(3 + 4))) →
  
  // Simplify using i² = -1
  assert(target = Im((2√3 - 12 + (6√3 + 4)i)/7)) →
  
  // Extract imaginary part
  assert(target = (6√3 + 4)/7)
}