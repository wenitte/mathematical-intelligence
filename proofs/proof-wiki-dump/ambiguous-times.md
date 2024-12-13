theorem AmbiguousTime() {
  assert(
    ∀T ∈ Time12Hour →
    (isAmbiguousTime(T) ↔ 
      (∃n ∈ {1,2,...,142} → 
        T = 12:00 + n × 5⁵/₁₄₃ min ∧
        hourHand(T) ≠ minuteHand(T)))
  )
}

proof AmbiguousTime() {
  setVar(T: Time12Hour) →
  setVar(h: Integer, m: Real) →
  assert(1 ≤ h ≤ 12 ∧ 0 ≤ m < 60) →
  setVar(θ: Angle, φ: Angle) →
  
  lemma ValidTimeIndication() {
    assert(12φ mod 360 = θ)
  } →

  lemma AmbiguousDefinition() {
    assert(12θ mod 360 = φ) →
    assert(φ = 12θ + 360h₁) for h₁ ∈ {1,2,...,12} →
    assert(φ/12 + 30h₁ = θ) →
    assert(12φ + 30h₂ = φ/12 + 30h₁) for h₂ ∈ {1,2,...,12} →
    assert(143φ = 360(h₁ - h₂))
  } →

  lemma TimeCalculation() {
    assert(φ = 360(h₁ - h₂)/143) →
    assert(T = 12:00 + n × 5⁵/₁₄₃) where n = h₁ - h₂
  } →

  lemma HandPositions() {
    setVar(minuteAngle: θ = 6° × minutes) →
    setVar(hourAngle: φ = 360°/143 × n) →
    assert(hourHand(T) ≠ minuteHand(T))
  } →
  
  apply(ValidTimeIndication()) →
  apply(AmbiguousDefinition()) →
  apply(TimeCalculation()) →
  apply(HandPositions()) →
  assert(conclusion)
}