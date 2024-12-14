theorem Complex_Cross_Product_Example() {
  assert(
    ∀z₁,z₂ ∈ ℂ where z₁ = 3-i ∧ z₂ = 2+5i →
    |z₁ × z₂| = 17
  )
} ↔

proof Complex_Cross_Product_Example() {
  setVar(z₁: ℂ = 3-i) →
  setVar(z₂: ℂ = 2+5i) →
  
  lemma Cross_Product_Definition() {
    assert(
      z₁ × z₂ = |z₁||z₂|sin(θ) 
      where θ = arg(z₂) - arg(z₁)
    )
  } →
  
  compute(|z₁|) {
    |z₁| = √((3)² + (-1)²) = √10
  } →
  
  compute(|z₂|) {
    |z₂| = √(2² + 5²) = √29
  } →
  
  compute(z₁ × z₂) {
    z₁ × z₂ = 17
  } →
  
  compute(|z₁ × z₂|) {
    |z₁ × z₂| = |17| = 17
  } →
  
  assert(|z₁ × z₂| = 17)
}