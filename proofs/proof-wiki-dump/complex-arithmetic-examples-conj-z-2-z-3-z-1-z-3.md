theorem Complex_Conjugate_Product() {
  assert(
    let z₁ = 1 - i ∧
    let z₂ = -2 + 4i ∧
    let z₃ = √3 - 2i →
    conj((z₂ + z₃)(z₁ - z₃)) = -7 + 3√3 + √3i
  )
}

proof Complex_Conjugate_Product() {
  setVar(z₁ = 1 - i) →
  setVar(z₂ = -2 + 4i) →
  setVar(z₃ = √3 - 2i) →
  
  assert(
    conj((z₂ + z₃)(z₁ - z₃)) =
    conj((((-2 + 4i) + (√3 - 2i))((1 - i) - (√3 - 2i)))
  ) →
  
  assert(
    = conj((-2 + √3 + 2i)(1 - √3 + i))
  ) →
  
  assert(
    = conj((-2 + √3)(1 - √3) + (-2 + √3)i + (1 - √3)2i + 2i²)
  ) →
  
  assert(
    = conj((-2 + √3 + 2√3 - 3) - √3i - 2)
  ) →
  
  assert(
    = conj(-7 + 3√3 - √3i)
  ) →
  
  assert(
    = -7 + 3√3 + √3i
  )
}