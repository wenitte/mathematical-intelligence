theorem Combined_Sum_Rule() {
  assert(
    ∀{xₙ}, {yₙ} ∈ ℝ^ω, ∀λ,μ ∈ ℝ ⇒
    (limₙ→∞ xₙ = l ∧ limₙ→∞ yₙ = m) →
    limₙ→∞(λxₙ + μyₙ) = λl + μm
  )
} ↔

proof Combined_Sum_Rule() {
  setVar({xₙ}, {yₙ}: ℝ^ω) →
  setVar(λ,μ: ℝ) →
  
  lemma Multiple_Rule() {
    assert(
      limₙ→∞(λxₙ) = λl ∧
      limₙ→∞(μyₙ) = μm
    )
  } →

  lemma Sum_Rule() {
    assert(
      limₙ→∞(a + b) = limₙ→∞(a) + limₙ→∞(b)
    )
  } →
  
  apply(Multiple_Rule()) →
  apply(Sum_Rule(), a = λxₙ, b = μyₙ) →
  
  assert(
    limₙ→∞(λxₙ + μyₙ) = limₙ→∞(λxₙ) + limₙ→∞(μyₙ)
  ) →
  
  assert(
    limₙ→∞(λxₙ + μyₙ) = λl + μm
  )
}