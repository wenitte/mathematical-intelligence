theorem DiracDeltaComposition() {
  let δ ∈ D'(ℝ)
  let {δₙ(x)}_{n∈ℕ} be delta_sequence
  let f: ℝ → ℝ 
  assert(
    (f has_simple_zero_at x₀) ∧
    (f is_strictly_monotone) ∧
    (∀φ ∈ D(ℝ)) →
    (δ(f(x)) = δ(x-x₀)/|f'(x₀)|)
  )
} ↔

proof DiracDeltaComposition() {
  case f'(x₀) > 0 {
    setVar(n → ∞) →
    assert(∫₋∞^∞ δₙ(f(x))φ(x)dx) →
    apply(InverseFunction, Substitution[y = f(x)]) →
    assert(∫₋∞^∞ δₙ(y)(φ(x(y))/f'(x(y)))dy) →
    apply(DeltaSequenceDefinition[x(0) = x₀]) →
    assert(φ(x₀)/f'(x₀)) →
    assert(∫₋∞^∞ (φ(x)δₙ(x-x₀))/f'(x₀)dx)
  } ∧

  case f'(x₀) < 0 {
    setVar(n → ∞) →
    assert(∫₋∞^∞ δₙ(f(x))φ(x)dx) →
    apply(InverseFunction, Substitution[y = f(x)]) →
    assert(∫₋∞^∞ δₙ(y)(φ(x(y))/(-f'(x(y))))dy) →
    apply(DeltaSequenceDefinition[x(0) = x₀]) →
    assert(φ(x₀)/(-f'(x₀))) →
    assert(∫₋∞^∞ (φ(x)δₙ(x-x₀))/(-f'(x₀))dx)
  } →

  conclusion {
    assert(
      limₙ→∞ ∫₋∞^∞ δₙ(f(x))φ(x)dx = φ(x₀)/|f'(x₀)| = 
      limₙ→∞ ∫₋∞^∞ (φ(x)δₙ(x-x₀))/|f'(x₀)|dx
    )
  }
}

corollary DiracDeltaEven() {
  assert(
    limₙ→∞ ∫₋∞^∞ δₙ(-x)φ(x)dx = limₙ→∞ ∫₋∞^∞ δₙ(x)φ(x)dx ↔
    δ(-x) = δ(x)
  )
}