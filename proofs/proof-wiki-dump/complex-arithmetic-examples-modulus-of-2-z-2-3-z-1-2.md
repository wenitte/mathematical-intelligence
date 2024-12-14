theorem Complex_Modulus_Example() {
  let z₁ = 1 - i
  let z₂ = -2 + 4i
  assert(
    |2z₂ - 3z₁|² = 170
  )
} ↔

proof Complex_Modulus_Example() {
  step1: {
    |2z₂ - 3z₁|²
  } →
  
  step2: {
    |2(-2 + 4i) - 3(1 - i)|²
  } →
  
  step3: {
    |(-4 + 8i) - (3 - 3i)|²
  } →
  
  step4: {
    |-7 + 11i|²
  } →
  
  lemma Complex_Modulus_Square() {
    assert(
      ∀a,b ∈ ℝ: |a + bi|² = a² + b²
    )
  } →
  
  apply(Complex_Modulus_Square()) →
  
  step5: {
    7² + 11²
  } →
  
  step6: {
    49 + 121
  } →
  
  step7: {
    170
  }
}