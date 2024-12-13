theorem BrahmaguptaFibonacci() {
  assert(
    ∀a,b,c,d ∈ ℝ ⇒ 
    (a² + b²)(c² + d²) = (ac + bd)² + (ad - bc)²
  )
} ↔

proof BrahmaguptaFibonacci() {
  setVar(z₁: ℂ = a - bi) ∧
  setVar(z₂: ℂ = c + di) →
  
  lemma ComplexProduct() {
    assert(z₁z₂ = (ac + bd) + (ad - bc)i)
  } →
  
  lemma ComplexModulusProduct() {
    assert(
      ∀z,w ∈ ℂ ⇒ |zw| = |z||w|
    )
  } →

  calc {
    |z₁z₂|² 
    = |z₁|²|z₂|²                    // By ComplexModulusProduct
    = |(a - bi)|²|(c + di)|²        // Substitute z₁,z₂
    = (a² + b²)(c² + d²)            // By definition of complex modulus
  } ∧
  
  calc {
    |z₁z₂|²
    = |(ac + bd) + (ad - bc)i|²     // By ComplexProduct
    = (ac + bd)² + (ad - bc)²       // By definition of complex modulus
  } →
  
  conclude(
    (a² + b²)(c² + d²) = (ac + bd)² + (ad - bc)²
  )
}