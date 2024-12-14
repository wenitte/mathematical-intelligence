theorem ClockHandsCoincidence() {
  assert(
    ∀t ∈ ℝ+ ⇒ ClockHandsOverlap(t) ↔ t = 1 + 1/11
  )
} ↔

proof ClockHandsCoincidence() {
  // Define constants
  const hourHandSpeed = 30 // degrees per hour
  const minHandSpeed = 360 // degrees per hour
  
  // Set variables
  setVar(t: ℝ+) → // time elapsed
  setVar(θ: ℝ) → // angle moved by hour hand
  
  // Initial conditions
  assert(θ = hourHandSpeed × t) →
  assert(θ + 360 = minHandSpeed × t) →
  
  // Main equation
  lemma AngleEquality() {
    assert(30t = 360t - 360) →
    assert(-330t = -360) →
    assert(t = 360/(360-330)) →
    assert(t = 360/30) →
    assert(t = 1 + 1/11)
  } →
  
  // Calculate subsequent coincidences
  lemma SubsequentTimes() {
    assert(∀n ∈ ℕ ⇒ NextCoincidence(n) = n × (1 + 1/11)) →
    assert(
      TimeToHMS(1 + 1/11) = 1:05:27 ∧
      TimeToHMS(2 + 2/11) = 2:10:55 ∧
      TimeToHMS(3 + 3/11) = 3:16:22
    )
  } →
  
  apply(AngleEquality()) →
  apply(SubsequentTimes()) →
  
  assert(ClockHandsOverlap(t) ↔ t = 1 + 1/11)
}