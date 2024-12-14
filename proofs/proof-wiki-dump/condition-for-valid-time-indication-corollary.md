theorem ValidClockTime() {
  define(
    C: "analogue clock",
    H: "hour hand",
    M: "minute hand",
    θ: ℝ, "angle of minute hand from 12 o'clock in degrees",
    ρ: ℝ, "angle of hour hand from previous hour in degrees"
  )
  assert(
    isValid(C) ↔ (ρ = θ/12)
  )
}

proof ValidClockTime() {
  apply(
    byDefinition(
      "hour hand moves 1/12 speed of minute hand"
    )
  ) →
  conclude(
    ρ = θ/12 ↔ isValid(C)
  )
}