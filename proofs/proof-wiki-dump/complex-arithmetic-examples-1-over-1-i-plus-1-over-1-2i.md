theorem Complex_Arithmetic_Example() {
  assert(
    ∀z₁,z₂ ∈ ℂ ⇒ (1/(1+i) + 1/(1-2i) = 7/10 - (1/10)i)
  )
} ↔

proof Complex_Arithmetic_Example() {
  setVar(z₁: 1/(1+i), z₂: 1/(1-2i)) →
  
  lemma Complex_Conjugate() {
    assert(
      z₁ = ((1-i)/((1+i)(1-i))) ∧
      z₂ = ((1+2i)/((1-2i)(1+2i)))
    )
  } →
  
  apply(Complex_Conjugate()) →
  
  assert(
    z₁ + z₂ = (1-i)/(1²+1²) + (1+2i)/(1²+2²)
  ) →
  
  assert(
    z₁ + z₂ = (1-i)/2 + (1+2i)/5
  ) →
  
  assert(
    z₁ + z₂ = (5(1-i) + 2(1+2i))/10
  ) →
  
  assert(
    z₁ + z₂ = (5-5i + 2+4i)/10
  ) →
  
  assert(
    z₁ + z₂ = (7-i)/10
  ) →
  
  assert(
    z₁ + z₂ = 7/10 - (1/10)i
  )
}