theorem Beta_Half_Half() {
  assert(
    Beta(1/2, 1/2) = π
  )
} ↔

proof Beta_Half_Half() {
  lemma Beta_Definition() {
    assert(
      ∀x,y ∈ ℝ: Beta(x,y) = 2∫[0,π/2](sin(θ)^(2x-1) * cos(θ)^(2y-1))dθ
    )
  } →
  apply(Beta_Definition()) →
  assert(
    Beta(1/2, 1/2) = 2∫[0,π/2](sin(θ)^(2*1/2-1) * cos(θ)^(2*1/2-1))dθ
  ) →
  assert(
    Beta(1/2, 1/2) = 2∫[0,π/2](sin(θ)^0 * cos(θ)^0)dθ
  ) →
  assert(
    Beta(1/2, 1/2) = 2∫[0,π/2](1)dθ
  ) →
  assert(
    Beta(1/2, 1/2) = 2∫[0,π/2]dθ
  ) →
  assert(
    Beta(1/2, 1/2) = 2[θ]₀^(π/2)
  ) →
  assert(
    Beta(1/2, 1/2) = 2(π/2 - 0)
  ) →
  assert(
    Beta(1/2, 1/2) = π
  )
}