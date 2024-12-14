theorem Compton_Wavelength_Proton() {
  assert(
    λₚ ≈ 1.3214098553940 × 10⁻¹⁵ m ∧
    λₚ ≈ 1.3214098553940 × 10⁻¹³ cm
  )
} ↔

proof Compton_Wavelength_Proton() {
  define(λₚ: "Compton wavelength of proton") →
  define(h: "Planck's constant") →
  define(mₚ: "mass of proton") →
  define(c: "speed of light") →
  
  assert(λₚ = h/(mₚc)) →  // Definition of Compton wavelength
  
  setVar(h = 6.62607015 × 10⁻³⁴ J·s) →
  setVar(mₚ = 1.6726219236951 × 10⁻²⁷ kg) →
  setVar(c = 299792458 m·s⁻¹) →
  
  computation_step {
    substitute(λₚ = h/(mₚc)) →
    substitute(values) →
    assert(
      λₚ = (6.62607015 × 10⁻³⁴)/(1.6726219236951 × 10⁻²⁷ × 299792458)
    )
  } →
  
  numerical_result {
    evaluate(computation) →
    assert(λₚ ≈ 1.3214098553940 × 10⁻¹⁵ m) →
    convert_units(m → cm) →
    assert(λₚ ≈ 1.3214098553940 × 10⁻¹³ cm)
  }
}