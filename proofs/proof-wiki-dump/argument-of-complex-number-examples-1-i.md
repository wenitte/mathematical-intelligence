theorem Argument_Complex_Number_Example() {
  assert(
    arg(1 + i) = π/4
  )
} ↔

proof Argument_Complex_Number_Example() {
  setVar(z: ℂ, z = 1 + i) →
  
  lemma Complex_Modulus() {
    assert(|1 + i| = √2) →
    assert(√((1)² + (1)²) = √2)
  } →
  
  lemma Cos_Arg() {
    assert(cos(arg(1 + i)) = Re(z)/|z|) →
    assert(cos(arg(1 + i)) = 1/√2) →
    assert(cos(arg(1 + i)) = √2/2)
  } →
  
  lemma Sin_Arg() {
    assert(sin(arg(1 + i)) = Im(z)/|z|) →
    assert(sin(arg(1 + i)) = 1/√2) →
    assert(sin(arg(1 + i)) = √2/2)
  } →
  
  apply(Cos_Arg()) ∧ apply(Sin_Arg()) →
  assert(arg(1 + i) = ±π/4 ∨ arg(1 + i) = π/4 ∨ arg(1 + i) = 3π/4) →
  
  lemma Principal_Value() {
    assert(Im(z) > 0 ∧ Re(z) > 0) →
    assert(arg(1 + i) ∈ (0, π/2))
  } →
  
  apply(Principal_Value()) →
  assert(arg(1 + i) = π/4)
}