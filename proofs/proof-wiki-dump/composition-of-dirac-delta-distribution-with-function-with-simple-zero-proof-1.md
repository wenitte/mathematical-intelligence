theorem Delta_Composition() {
  assert(
    ∀δ ∈ 𝒟'(ℝ) ∧ 
    ∀(δₙ)_{n∈ℕ}: delta_sequence ∧
    ∀f: ℝ → ℝ ∧
    ∀x₀ ∈ ℝ: f(x₀) = 0 ∧ f'(x₀) ≠ 0 ∧
    f_strictly_monotone ∧
    ∀φ ∈ 𝒟(ℝ) ⇒
    [δ(f(x)) = δ(x-x₀)/|f'(x₀)|]
  )
} ↔

proof Delta_Composition() {
  case f'(x₀) > 0 {
    setVar(n: ℕ) →
    assert(
      lim_{n→∞} ∫_{-∞}^∞ δₙ(f(x))φ(x)dx =
      lim_{n→∞} ∫_{-∞}^∞ δₙ(y)[φ(x(y))/f'(x(y))]dy
    ) by(substitution: y = f(x)) →
    
    assert(
      = φ(x₀)/f'(x₀)
    ) by(delta_sequence_definition) →
    
    assert(
      = lim_{n→∞} ∫_{-∞}^∞ [φ(x)δₙ(x-x₀)]/f'(x₀)dx
    )
  } →

  case f'(x₀) < 0 {
    setVar(n: ℕ) →
    assert(
      lim_{n→∞} ∫_{-∞}^∞ δₙ(f(x))φ(x)dx =
      lim_{n→∞} ∫_{∞}^{-∞} δₙ(y)[φ(x(y))/f'(x(y))]dy
    ) by(substitution: y = f(x)) →
    
    assert(
      = lim_{n→∞} ∫_{-∞}^∞ δₙ(y)[φ(x(y))/(-f'(x(y)))]dy
    ) →
    
    assert(
      = φ(x₀)/(-f'(x₀))
    ) by(delta_sequence_definition) →
    
    assert(
      = lim_{n→∞} ∫_{-∞}^∞ [φ(x)δₙ(x-x₀)]/(-f'(x₀))dx
    )
  } →

  conclude {
    assert(
      lim_{n→∞} ∫_{-∞}^∞ δₙ(f(x))φ(x)dx =
      φ(x₀)/|f'(x₀)| =
      lim_{n→∞} ∫_{-∞}^∞ [φ(x)δₙ(x-x₀)]/|f'(x₀)|dx
    )
  }
}