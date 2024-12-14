theorem ValidTimeIndication() {
  let(C: Clock) ∧
  let(H: HourHand, M: MinuteHand) ∧
  let(θ: ℝ, φ: ℝ) ∧
  assert(θ = MinuteAngle(M)) ∧
  assert(φ = HourAngle(H)) →
  assert(
    IsValidTime(C) ↔ (12φ mod 360 = θ)
  )
}

corollary ValidTimeIndicationAlt() {
  let(θ: ℝ, ρ: ℝ) ∧
  assert(θ = MinuteAngle(M)) ∧
  assert(ρ = HourAngleFromLastHour(H)) →
  assert(
    IsValidTime(C) ↔ (ρ = θ/12)
  )
}

proof ValidTimeIndication() {
  let(T: Time) ∧
  let(h: ℤ, m: ℝ) ∧
  assert(1 ≤ h ≤ 12) ∧
  assert(0 ≤ m < 60) →
  
  lemma MinuteHandSpeed() {
    assert(MinuteHandDegreesPerMinute = 6)
  } →
  apply(MinuteHandSpeed()) →
  assert(θ = 6m) →
  
  lemma HourHandSpeed() {
    assert(HourHandDegreesPerMinute = 1/2) ∧
    assert(HourMarkInterval = 30)
  } →
  apply(HourHandSpeed()) →
  assert(φ = 30h + m/2) →
  
  assert(φ = 30h + θ/(2*6)) →
  assert(12φ = 360h + θ) →
  assert(h ∈ ℤ) →
  assert(12φ mod 360 = θ)
}