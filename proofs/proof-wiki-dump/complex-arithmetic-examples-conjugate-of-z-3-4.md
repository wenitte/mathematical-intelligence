theorem Complex_Conjugate_Power() {
  assert(
    ∀z ∈ ℂ, z³ = -1/2 + (√3/2)i → 
    (z̄)⁴ = -1/2 - (√3/2)i
  )
} ↔

proof Complex_Conjugate_Power() {
  setVar(z: ℂ) →
  assert(z³ = -1/2 + (√3/2)i) →
  
  lemma Conjugate_Definition() {
    assert(
      z̄ = -1/2 - (√3/2)i
    )
  } →
  
  assert((z̄)⁴ = (z̄)³ × z̄) →
  
  lemma Cube_Root_Unity() {
    assert(
      (-1/2 - (√3/2)i)³ = 1
    )
  } →
  
  apply(Cube_Root_Unity()) →
  assert((z̄)⁴ = 1 × (-1/2 - (√3/2)i)) →
  assert((z̄)⁴ = -1/2 - (√3/2)i)
}