theorem Cube_Roots_Unity_Conjugate_Form() {
  assert(
    U₃ = {1, ω, ω̄} ∧
    ω = -1/2 + (i√3)/2 ∧
    ω̄ ∈ ℂ: Conjugate(ω)
  )
} ↔

proof Cube_Roots_Unity_Conjugate_Form() {
  setVar(ω: ℂ) →
  assert(U₃ = {1, ω, ω²}) →
  
  lemma Omega_Squared() {
    assert(
      ω² = ω³/ω →
      ω² = 1/ω →
      ω² = ω̄/(ω·ω̄) →
      ω² = ω̄/|ω|² →
      ω² = ω̄
    )
  } →
  
  lemma Complex_Root_Properties() {
    assert(
      |ω| = 1 ∧
      ω·ω̄ = |ω|²
    )
  } →
  
  apply(Omega_Squared()) →
  apply(Complex_Root_Properties()) →
  
  assert(U₃ = {1, ω, ω̄})
}