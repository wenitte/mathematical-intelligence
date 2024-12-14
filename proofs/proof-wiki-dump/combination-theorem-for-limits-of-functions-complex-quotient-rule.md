theorem ComplexQuotientLimitRule() {
  assert(
    ∀f,g: ℂ → ℂ,
    ∀S ⊆ ℂ[open],
    ∀c ∈ S,
    ∀l,m ∈ ℂ ⇒
    (lim[z→c] f(z) = l ∧
     lim[z→c] g(z) = m ∧
     m ≠ 0) →
    lim[z→c] (f(z)/g(z)) = l/m
  )
}

proof ComplexQuotientLimitRule() {
  setVar(f,g: ℂ → ℂ) →
  setVar(S: subset[ℂ,open]) →
  setVar(c: S) →
  setVar(l,m: ℂ) →
  
  lemma SequenceSelection() {
    assert(
      ∃{zₙ}[n∈ℕ₊] ⊆ S:
      (∀n ∈ ℕ₊: zₙ ≠ c) ∧
      lim[n→∞] zₙ = c
    )
  } →
  
  apply(LimitByConvergentSequences) →
  assert(
    lim[n→∞] f(zₙ) = l ∧
    lim[n→∞] g(zₙ) = m
  ) →
  
  apply(QuotientRuleForSequences) →
  assert(
    m ≠ 0 →
    lim[n→∞] (f(zₙ)/g(zₙ)) = l/m
  ) →
  
  apply(LimitByConvergentSequences) →
  assert(
    lim[z→c] (f(z)/g(z)) = l/m
  )
}