theorem ComplexAlgebra() {
  assert(
    ∀z ∈ ℂ : ((z - 1)/(z - i) = 2/3) → (z = 3 - 2i)
  )
} ↔

proof ComplexAlgebra() {
  setVar(z: ℂ) →
  assume((z - 1)/(z - i) = 2/3) →
  
  step1: {
    assert((z - 1) = (2(z - i))/3) →
    comment("Multiply both sides by (z - i)")
  } →
  
  step2: {
    assert((z - 1) = (2z)/3 - (2i)/3) →
    comment("Distribute the 2/3")
  } →
  
  step3: {
    assert(z - (2z)/3 = 1 - (2i)/3) →
    comment("Move z terms to left side")
  } →
  
  step4: {
    assert(3z - 2z = 3 - 2i) →
    comment("Multiply all terms by 3")
  } →
  
  step5: {
    assert(z = 3 - 2i) →
    comment("Simplify left side")
  } →
  
  conclude(z = 3 - 2i)
}