theorem Complex_Multiplication_Distributes() {
  assert(
    ∀z₁,z₂,z₃ ∈ ℂ ⇒ 
    z₁(z₂ + z₃) = z₁z₂ + z₁z₃
  )
} ↔

proof Complex_Multiplication_Distributes_Example() {
  setVar(z₁: (-1 + 2i)) →
  setVar(z₂: (7 - 5i)) →
  setVar(z₃: (-3 + 4i)) →
  
  lemma Left_Side() {
    assert(z₁(z₂ + z₃)) →
    assert((-1 + 2i)((7 - 5i) + (-3 + 4i))) →
    assert((-1 + 2i)(4 - i)) →
    calculate(-2 + 9i)
  } →

  lemma Right_Side() {
    assert(z₁z₂ + z₁z₃) →
    assert((-1 + 2i)(7 - 5i) + (-1 + 2i)(-3 + 4i)) →
    assert((-7 + 5i + 14i - 10i²) + (3 - 4i - 6i + 8i²)) →
    assert((-7 + 19i + 10) + (3 - 10i - 8)) →
    calculate(-2 + 9i)
  } →

  apply(Left_Side()) ∧ apply(Right_Side()) →
  assert(Left_Side() = Right_Side()) →
  conclude()
}