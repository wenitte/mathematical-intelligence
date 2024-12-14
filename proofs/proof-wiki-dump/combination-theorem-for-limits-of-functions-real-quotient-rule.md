theorem CombinationTheorem_QuotientRule() {
  let(S ⊆ ℝ: OpenSet, c ∈ S, f,g: S\{c} → ℝ) →
  assert(
    (lim[x→c] f(x) = l ∧ lim[x→c] g(x) = m ∧ m ≠ 0) →
    lim[x→c] (f(x)/g(x)) = l/m
  )
} ↔

proof CombinationTheorem_QuotientRule() {
  setVar(S: OpenSet, c ∈ S, f,g: S\{c} → ℝ) →
  assume(lim[x→c] f(x) = l ∧ lim[x→c] g(x) = m ∧ m ≠ 0) →
  
  lemma SequenceSelection() {
    assert(∃{xₙ}[n∈ℕ]: 
      (∀n>0: xₙ ≠ c) ∧
      lim[n→∞] xₙ = c
    )
  } →
  
  apply(LimitByConvergentSequences) →
  assert(
    lim[n→∞] f(xₙ) = l ∧
    lim[n→∞] g(xₙ) = m
  ) →
  
  apply(QuotientRuleForSequences) →
  assert(lim[n→∞] (f(xₙ)/g(xₙ)) = l/m) →
  
  apply(LimitByConvergentSequences_Reverse) →
  assert(lim[x→c] (f(x)/g(x)) = l/m)
}