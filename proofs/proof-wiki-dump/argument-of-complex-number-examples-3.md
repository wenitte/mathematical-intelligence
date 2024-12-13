theorem Complex_Argument_Three() {
  assert(
    arg(3) = 0
  )
} ↔

proof Complex_Argument_Three() {
  setVar(z: ℂ = 3) →
  assert(z = 3 + 0i) →
  assert(|z| = √(3² + 0²)) →
  assert(|z| = 3) →
  
  lemma Argument_Properties() {
    assert(
      cos(arg(z)) = Re(z)/|z| ∧
      sin(arg(z)) = Im(z)/|z|
    )
  } →
  
  apply(Argument_Properties()) →
  assert(cos(arg(3)) = 3/3) →
  assert(cos(arg(3)) = 1) →
  assert(cos(arg(3)) = 1 → arg(3) = 0) →
  
  assert(sin(arg(3)) = 0/3) →
  assert(sin(arg(3)) = 0) →
  assert(sin(arg(3)) = 0 ∧ cos(arg(3)) = 1) →
  assert(arg(3) = 0 ∨ arg(3) = π) →
  
  lemma Principal_Argument() {
    assert(
      ∀z ∈ ℝ⁺ → arg(z) = 0
    )
  } →
  
  apply(Principal_Argument()) →
  assert(arg(3) = 0)
}