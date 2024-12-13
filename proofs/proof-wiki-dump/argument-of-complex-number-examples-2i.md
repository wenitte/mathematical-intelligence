theorem Argument_2i() {
  assert(
    arg(2i) = π/2
  )
} ↔

proof Argument_2i() {
  step1: {
    assert(|2i| = √(0² + 2²)) →
    assert(|2i| = 2)
  } →
  
  step2: {
    assert(cos(arg(2i)) = 0/2) →
    assert(cos(arg(2i)) = 0) →
    assert(arg(2i) = ±π/2)  // by property of cos
  } →
  
  step3: {
    assert(sin(arg(2i)) = 2/2) →
    assert(sin(arg(2i)) = 1) →
    assert(arg(2i) = π/2)  // by property of sin and previous step
  } →
  
  lemma Complex_Argument_Properties() {
    assert(
      ∀z∈ℂ: [
        arg(z) = θ ↔ (
          cos(θ) = Re(z)/|z| ∧
          sin(θ) = Im(z)/|z|
        )
      ]
    )
  } →
  
  apply(Complex_Argument_Properties()) →
  assert(arg(2i) = π/2)
}