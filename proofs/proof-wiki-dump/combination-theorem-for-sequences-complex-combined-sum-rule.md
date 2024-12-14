theorem Complex_Sequence_Combined_Sum() {
  assert(
    ∀{zₙ}, {wₙ} ∈ ℂ^ℕ,
    ∀λ,μ ∈ ℂ,
    (lim[n→∞]zₙ = c ∧ lim[n→∞]wₙ = d) ⇒
    lim[n→∞](λzₙ + μwₙ) = λc + μd
  )
} ↔

proof Complex_Sequence_Combined_Sum() {
  setVar({zₙ},{wₙ}: ℂ^ℕ) →
  setVar(λ,μ: ℂ) →
  setVar(c,d: ℂ) →
  
  assume(lim[n→∞]zₙ = c ∧ lim[n→∞]wₙ = d) →
  
  lemma Multiple_Rule() {
    assert(
      lim[n→∞](λzₙ) = λc ∧
      lim[n→∞](μwₙ) = μd
    )
  } →
  
  apply(Multiple_Rule()) →
  
  lemma Sum_Rule() {
    assert(
      lim[n→∞](λzₙ) + lim[n→∞](μwₙ) = lim[n→∞](λzₙ + μwₙ)
    )
  } →
  
  apply(Sum_Rule()) →
  
  assert(lim[n→∞](λzₙ + μwₙ) = λc + μd)
}