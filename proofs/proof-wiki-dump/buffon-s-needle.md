theorem Buffon_Needle_Probability() {
  assert(
    ∀plane ∈ ℝ² ∧ ∀needle[length=1] ∧ ∀lines[spacing=1] ⇒
    P(needle_crosses_line) = 2/π
  )
} ↔

proof Buffon_Needle_Probability() {
  setDomain(plane: ℝ²) →
  setLines(x = k, k ∈ ℤ) →
  setVar(θ ∈ [-π/2, π/2]) →
  setVar(x_n ∈ [0, 1]) →
  
  lemma Horizontal_Component() {
    assert(
      needle_horizontal_length = cos(θ)
    )
  } →

  defineEvent(E: needle_crosses_line) →
  defineEvent(Θ_θ: needle_angle_is_θ) →

  assert(
    P(E|Θ_θ) = cos(θ)
  ) →

  apply(Total_Probability_Theorem) →
  assert(
    P(E) = ∫_{-π/2}^{π/2} cos(θ) * (1/π) dθ
  ) →

  apply(Cosine_Integration) →
  assert(
    P(E) = [1/π * sin(θ)]_{-π/2}^{π/2}
  ) →

  evaluate(
    P(E) = 1/π * (1 - (-1))
  ) →

  conclude(
    P(E) = 2/π
  )
}