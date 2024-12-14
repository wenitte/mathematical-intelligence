theorem ContinuousFunctionMultiple() {
  assert(
    ∀f,g: (ℝ → ℝ) ∧ 
    ∀S ⊆ ℝ[open] ∧
    ∀λ ∈ ℝ ∧
    isContinuous(f,S) ∧
    isContinuous(g,S) ⇒
    isContinuous(λf,S)
  )
} ↔

proof ContinuousFunctionMultiple() {
  setVar(f: ℝ → ℝ) →
  setVar(S ⊆ ℝ[open]) →
  setVar(λ ∈ ℝ) →
  
  lemma ContinuityDefinition() {
    assert(
      isContinuous(f,S) ↔ 
      ∀c ∈ S: lim[x→c]f(x) = f(c)
    )
  } →

  apply(ContinuityDefinition()) →
  
  setVar(c ∈ S) →
  setVar(l: lim[x→c]f(x)) →

  lemma LimitMultipleRule() {
    assert(
      lim[x→c]f(x) = l ⇒
      lim[x→c](λf(x)) = λl
    )
  } →

  apply(LimitMultipleRule()) →

  assert(
    lim[x→c](λf(x)) = λf(c)
  ) →

  assert(isContinuous(λf,S))
}