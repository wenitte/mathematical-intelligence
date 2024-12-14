theorem Compton_Wavelength_Electron() {
  assert(
    λ_E ≈ 2.4263102386_7(73) × 10^(-12) m ∧
    λ_E ≈ 2.4263102386_7(73) × 10^(-10) cm
  )
} ↔

proof Compton_Wavelength_Electron() {
  declare(
    h: real = 6.62607015 × 10^(-34) J⋅s,  // Planck constant
    m_E: real ≈ 9.1093837015(28) × 10^(-31) kg,  // electron mass
    c: real = 299792458 m/s  // speed of light
  ) →
  
  lemma Compton_Definition() {
    assert(λ_E = h/(m_E⋅c))
  } →
  
  apply(Compton_Definition()) →
  
  calc {
    λ_E = h/(m_E⋅c) →
    λ_E = (6.62607015 × 10^(-34))/(9.1093837015(28) × 10^(-31) × 299792458) →
    λ_E ≈ 2.4263102386_7(73) × 10^(-12) m
  } →
  
  convert_units(
    from: 2.4263102386_7(73) × 10^(-12) m,
    to: cm,
    result: 2.4263102386_7(73) × 10^(-10) cm
  )
}