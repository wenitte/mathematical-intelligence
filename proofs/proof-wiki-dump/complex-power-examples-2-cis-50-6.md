theorem Complex_Power_Example() {
  assert(
    (2∠50°)^6 = 32 - 32√3i
  )
} ↔

proof Complex_Power_Example() {
  assert((2∠50°)^6) →
  
  apply(DeMoivre_Formula()) {
    (r∠θ)^n = r^n∠(nθ)
  } →
  
  assert(2^6∠(6×50°)) →
  assert(64∠300°) →
  
  lemma ComplexPolar_to_Rectangular() {
    assert(
      r∠θ = r(cos θ + i sin θ)
    )
  } →
  
  apply(ComplexPolar_to_Rectangular()) →
  assert(64(cos(300°) + i sin(300°))) →
  
  lemma Trig_Values_300() {
    assert(
      cos(300°) = 1/2 ∧
      sin(300°) = -√3/2
    )
  } →
  
  apply(Trig_Values_300()) →
  assert(64(1/2 + i(-√3/2))) →
  
  simplify() →
  assert(32 - 32√3i)
}