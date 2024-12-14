theorem CombinationLimitTheorem() {
  assert(
    ∀f,g: ℝ → ℝ,
    ∀S ⊆ ℝ [S is open],
    ∀c ∈ S,
    ∀λ,μ ∈ ℝ,
    (lim[x→c] f(x) = l ∧ lim[x→c] g(x) = m) ⇒
    lim[x→c](λf(x) + μg(x)) = λl + μm
  )
} ↔

proof CombinationLimitTheorem() {
  setVar(f,g: ℝ → ℝ) →
  setVar(S ⊆ ℝ [open]) →
  setVar(c ∈ S) →
  setVar(λ,μ ∈ ℝ) →
  
  lemma SequenceExistence() {
    assert(
      ∃{xₙ} ⊆ S: (
        ∀n ∈ ℕ⁺: xₙ ≠ c ∧
        lim[n→∞] xₙ = c
      )
    )
  } →
  
  apply(LimitByConvergentSequences) →
  assert(
    lim[n→∞] f(xₙ) = l ∧
    lim[n→∞] g(xₙ) = m
  ) →
  
  apply(CombinedSumRuleSequences) →
  assert(
    lim[n→∞](λf(xₙ) + μg(xₙ)) = λl + μm
  ) →
  
  apply(LimitByConvergentSequences) →
  assert(
    lim[x→c](λf(x) + μg(x)) = λl + μm
  )
}