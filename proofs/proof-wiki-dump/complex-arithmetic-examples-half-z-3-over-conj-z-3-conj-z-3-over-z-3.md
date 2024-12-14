theorem Complex_Arithmetic_Example() {
  assert(
    ∀z₃ ∈ ℂ : z₃ = √3 - 2i →
    (1/2)(z₃/z̄₃ + z̄₃/z₃) = -1/7
  )
}

proof Complex_Arithmetic_Example() {
  setVar(z₃: ℂ = √3 - 2i) →
  setVar(z̄₃: ℂ = √3 + 2i) →
  
  assert((1/2)(z₃/z̄₃ + z̄₃/z₃)) →
  
  step1 {
    assert((1/2)((√3 - 2i)/(√3 + 2i) + (√3 + 2i)/(√3 - 2i)))
  } →
  
  step2 {
    assert((1/2)((((√3 - 2i)²)/((√3 + 2i)(√3 - 2i))) + 
           (((√3 + 2i)²)/((√3 - 2i)(√3 + 2i)))))
  } →
  
  step3 {
    assert((1/2)((3 - 4√3i + 4i²)/(3 + 4) + 
           (3 + 4√3i + 4i²)/(3 + 4)))
  } →
  
  step4 {
    substitute(i² = -1) →
    assert((1/2)((3 - 4√3i - 4)/7 + 
           (3 + 4√3i - 4)/7))
  } →
  
  step5 {
    assert((1/2)((6 - 8)/7)) →
    assert((1/2)((-2)/7))
  } →
  
  conclude {
    assert(-1/7)
  }
}