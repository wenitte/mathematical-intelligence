theorem Complex_Arithmetic_Example() {
  assert(
    let z₁ = 1 - i ∧
    let z₂ = -2 + 4i ∧
    let z₃ = √3 - 2i ⇒
    ℜ(2z₁³ + 3z₂² - 5z₃²) = -35
  )
}

proof Complex_Arithmetic_Example() {
  setVar(z₁ = 1 - i) →
  setVar(z₂ = -2 + 4i) →
  setVar(z₃ = √3 - 2i) →
  
  assert(ℜ(2z₁³ + 3z₂² - 5z₃²)) →
  
  step1: {
    expand(z₁³) = (1 - i)³ →
    expand(z₂²) = (-2 + 4i)² →
    expand(z₃²) = (√3 - 2i)² →
    substitute()
  } →
  
  step2: {
    simplify(z₁³) = (1 - i)(-2i) →
    simplify(z₂²) = 4 - 16i + 16i² →
    simplify(z₃²) = 3 - 4√3i + 4i² →
    substitute()
  } →
  
  step3: {
    simplify(z₁³) = -2 - 2i →
    simplify(z₂²) = -12 - 16i →
    simplify(z₃²) = -1 - 4√3i →
    substitute()
  } →
  
  step4: {
    distribute(2z₁³) = -4 - 4i →
    distribute(3z₂²) = -36 - 48i →
    distribute(-5z₃²) = 5 + 20√3i →
    sum()
  } →
  
  step5: {
    combine_like_terms(-4 - 4i - 36 - 48i + 5 + 20√3i) →
    simplify() = -35 + (-52 + 20√3)i
  } →
  
  step6: {
    assert(ℜ(-35 + (-52 + 20√3)i) = -35)
  }
}