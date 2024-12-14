theorem CharacteristicFunction_StandardNormal() {
  assert(
    ∀t ∈ ℝ ⇒ φ(t) = e^{-\frac{1}{2}t^2}
  )
} ↔

proof CharacteristicFunction_StandardNormal() {
  lemma NormalCharacteristic() {
    assert(
      ∀t,μ,σ ∈ ℝ ⇒ φ(t) = e^{itμ - \frac{1}{2}t^2σ^2}
    )
  } →
  
  assert(StandardNormal ↔ (μ = 0 ∧ σ = 1)) →
  
  setVar(μ = 0) →
  setVar(σ = 1) →
  
  apply(NormalCharacteristic()) →
  
  assert(φ(t) = e^{it×0 - \frac{1}{2}t^2×1^2}) →
  assert(φ(t) = e^{0 - \frac{1}{2}t^2}) →
  assert(φ(t) = e^{-\frac{1}{2}t^2})
}