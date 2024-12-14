theorem Delta_Distribution_Even() {
  assert(
    ∀φ ∈ D(ℝ), ∀{δₙ(x)}_{n∈ℕ} [δ-sequence] ⇒
    lim_{n→∞} ∫_{-∞}^∞ δₙ(-x)φ(x)dx = lim_{n→∞} ∫_{-∞}^∞ δₙ(x)φ(x)dx
  )
} ↔

proof Delta_Distribution_Even() {
  setVar(φ: D(ℝ)) →
  setVar({δₙ(x)}_{n∈ℕ}: δ-sequence) →
  
  lemma Delta_Sequence_Definition() {
    assert(
      lim_{n→∞} ∫_{-∞}^∞ δₙ(x)φ(x)dx = φ(0)
    )
  } →

  lemma Composition_With_Simple_Zero() {
    setVar(f(x) = -x) →
    assert(f(0) = 0) →
    assert(|f'(0)| = 1) →
    assert(
      lim_{n→∞} ∫_{-∞}^∞ δₙ(-x)φ(x)dx = φ(0)/|f'(0)|
    )
  } →

  apply(Composition_With_Simple_Zero()) →
  assert(
    lim_{n→∞} ∫_{-∞}^∞ δₙ(-x)φ(x)dx = φ(0)/|-1|
  ) →
  
  assert(
    φ(0)/|-1| = φ(0)
  ) →

  apply(Delta_Sequence_Definition()) →
  assert(
    φ(0) = lim_{n→∞} ∫_{-∞}^∞ δₙ(x)φ(x)dx
  ) →

  conclude(
    lim_{n→∞} ∫_{-∞}^∞ δₙ(-x)φ(x)dx = lim_{n→∞} ∫_{-∞}^∞ δₙ(x)φ(x)dx
  )
}