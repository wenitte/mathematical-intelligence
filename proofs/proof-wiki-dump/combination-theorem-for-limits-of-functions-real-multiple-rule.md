theorem LimitMultipleRule() {
  assert(
    ∀f: ℝ → ℝ,
    ∀S ⊆ ℝ[open],
    ∀c ∈ S,
    ∀λ ∈ ℝ,
    (lim[x→c] f(x) = l) →
    (lim[x→c] λf(x) = λl)
  )
}

proof LimitMultipleRule() {
  setVar(f: ℝ → ℝ) →
  setVar(S: subset[ℝ, open]) →
  setVar(c: S) →
  setVar(λ: ℝ) →
  
  lemma SequenceExists() {
    assert(
      ∃{xₙ} ⊆ S: (
        ∀n ∈ ℕ₊: xₙ ≠ c ∧
        lim[n→∞] xₙ = c
      )
    )
  } →
  
  apply(LimitByConvergentSequences()) →
  assert(lim[n→∞] f(xₙ) = l) →
  
  apply(MultipleRuleRealSequences()) →
  assert(lim[n→∞] λf(xₙ) = λl) →
  
  apply(LimitByConvergentSequences(), reverse: true) →
  assert(lim[x→c] λf(x) = λl)
}