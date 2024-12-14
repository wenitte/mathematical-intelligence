theorem ComplexContinuityMultiple() {
  assert(
    ∀f, g: ℂ → ℂ,
    ∀S ⊆ ℂ [S is open],
    ∀λ ∈ ℂ,
    (IsContinuous(f, S) ∧ IsContinuous(g, S)) →
    IsContinuous(λf, S)
  )
}

proof ComplexContinuityMultiple() {
  setVar(f: ℂ → ℂ) →
  setVar(S: Set[ℂ], isOpen(S)) →
  setVar(λ: ℂ) →
  setVar(c: S) →
  
  assert(IsContinuous(f, S) ↔ 
    ∀c ∈ S: lim[z→c] f(z) = f(c)
  ) →
  
  lemma LimitExists() {
    assert(
      ∃l ∈ ℂ: lim[z→c] f(z) = l
    )
  } →
  
  apply(ComplexLimitMultipleRule()) →
  assert(
    lim[z→c] (λf(z)) = λ·lim[z→c] f(z)
  ) →
  
  assert(
    lim[z→c] (λf(z)) = λ·l = (λf)(c)
  ) →
  
  conclude(
    IsContinuous(λf, S)
  )
}