theorem Complex_Conjugate_Power() {
  assert(
    ∀z₃ ∈ ℂ: z₃³ = -1/2 + (√3/2)i →
    (z̄₃)⁴ = -1/2 - (√3/2)i
  )
} ↔

proof Complex_Conjugate_Power() {
  setVar(z₃: ℂ) →
  assume(z₃³ = -1/2 + (√3/2)i) →
  
  lemma Complex_Conjugate_Definition() {
    assert(
      z̄₃ = conj(z₃) ↔
      z̄₃ = -1/2 - (√3/2)i
    )
  } →
  
  lemma Cube_Root_Unity() {
    assert(
      (-1/2 - (√3/2)i)³ = 1
    )
  } →
  
  assert((z̄₃)⁴ = (-1/2 - (√3/2)i)⁴) →
  assert((z̄₃)⁴ = (-1/2 - (√3/2)i)³ × (-1/2 - (√3/2)i)) →
  apply(Cube_Root_Unity()) →
  assert((z̄₃)⁴ = 1 × (-1/2 - (√3/2)i)) →
  assert((z̄₃)⁴ = -1/2 - (√3/2)i)
}