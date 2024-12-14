theorem ComplexArithmeticExample() {
  assert(
    let z₁ = 1 - i ∧
    let z₂ = -2 + 4i ∧
    let z₃ = √3 - 2i ⇒
    |z₁² + z̄₂²|² + |z̄₃² - z₂²|² = 765 + 128√3
  )
}

proof ComplexArithmeticExample() {
  setVar(z₁ = 1 - i, z₂ = -2 + 4i, z₃ = √3 - 2i) →
  
  assert(|z₁² + z̄₂²|² + |z̄₃² - z₂²|² = 
         |(1 - i)² + (-2 - 4i)²|² + |(√3 + 2i)² - (-2 + 4i)²|²) →
  
  lemma SquareExpansion() {
    assert((1 - i)² = 1 - 2i + i² = 1 - 2i - 1 = -2i) ∧
    assert((-2 - 4i)² = 4 + 16i + 16i² = 4 + 16i - 16 = -12 + 16i)
  } →
  
  apply(SquareExpansion()) →
  
  assert(|-12 + 14i|² + |11 + (16 + 4√3)i|²) →
  
  lemma ModulusSquareRule() {
    assert(|a + bi|² = a² + b²)
  } →
  
  apply(ModulusSquareRule()) →
  
  assert((144 + 196) + (121 + (16 + 4√3)²)) →
  
  assert(340 + (121 + 256 + 48 + 128√3)) →
  
  assert(765 + 128√3)
}