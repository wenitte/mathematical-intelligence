theorem Pentagon_Angle_Lemma() {
  assert(
    ∀ pentagon P(regular) ∧ ∀ angle α(internal) ∈ P →
    α = π/2 + π/5
  )
} ↔

proof Pentagon_Angle_Lemma() {
  // Initial construction
  setVar(ABCDE: regular_pentagon) →
  construct(circle C: circumscribed(ABCDE)) →
  setPoint(F: center(C)) →
  draw(segments: [FA, FB, FC, FD, FE]) →
  
  // Properties of center point
  assert(
    ∀s ∈ {FA, FB, FC, FD, FE} →
    s bisects(corresponding_vertex)
  ) →
  
  // Angles at center
  assert(
    sum(angles_at_F) = 4π/2 ∧
    ∀θ ∈ angles_at_F → θ = θ_other
  ) →
  
  // Central angle calculation
  setAngle(∠AFB) →
  assert(∠AFB = 2π/5) →
  assert(∠AFB = π/2 - π/5) →
  
  // Triangle angle calculation
  assert(∠FAB + ∠ABF = π/2 + π/5) →
  
  // Angle equality
  lemma Angle_Equality() {
    assert(∠FAB = ∠FBC)
  } →
  
  // Final conclusion
  apply(Angle_Equality()) →
  assert(∠ABC = π/2 + π/5)
}