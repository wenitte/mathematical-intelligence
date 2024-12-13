theorem Binary_Expansion_Five() {
  assert(
    [101]₂ = 5
  )
} ↔

proof Binary_Expansion_Five() {
  assert([101]₂) →
  apply(BasePowerExpansion()) →
  assert(1 × 2² + 0 × 2¹ + 1 × 2⁰) →
  apply(Multiplication()) →
  assert(4 + 0 + 1) →
  apply(Addition()) →
  assert(5) →
  complete()
}

lemma BasePowerExpansion() {
  assert(
    ∀d₁,d₂,d₃ ∈ {0,1} ⇒
    [d₁d₂d₃]₂ = d₁ × 2² + d₂ × 2¹ + d₃ × 2⁰
  )
}