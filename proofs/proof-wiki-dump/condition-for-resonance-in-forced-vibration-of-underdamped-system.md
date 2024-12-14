theorem Resonance_Condition() {
  assert(
    ∀S[System] ∧ ∀K,a,b,ω ∈ ℝ ∧ (K > 0) ∧ (a,b > 0) ∧ (b < a) ⇒
    (d²y/dx² + 2b(dy/dx) + a²x = K cos(ωx)) ↔
    (resonance_frequency(S) = √(a² - 2b²))
  )
} ↔

proof Resonance_Condition() {
  setVar(y: Function[x]) →
  assert(general_solution: y = e^(-bx)(C₁cos(αx) + C₂sin(αx)) + 
    (K/√(4b²ω² + (a² - ω²)²))cos(ωx - φ)) →
  assert(α = √(a² - b²)) →
  assert(φ = arctan(2bω/(a² - ω²))) →
  
  lemma Steady_State() {
    assert(y_s = (K/√(4b²ω² + (a² - ω²)²))cos(ωx - φ)) →
    assert(amplitude = K/√(4b²ω² + (a² - ω²)²))
  } →
  
  apply(Steady_State()) →
  assert(f(ω) = 4b²ω² + (a² - ω²)²) →
  
  lemma Derivative() {
    assert(f'(ω) = 8b²ω - 4a²ω + 4ω³) →
    assert(f'(ω) = 4ω(2b² - a² + ω²))
  } →
  
  apply(Derivative()) →
  assert(f'(ω) = 0 ↔ (ω = 0 ∨ ω² = a² - 2b²)) →
  assert(ω > 0) →
  assert(a² > 2b² ⇒ ω = √(a² - 2b²)) →
  
  conclude(
    resonance_occurs ↔ (a² > 2b² ∧ ω = √(a² - 2b²))
  )
}