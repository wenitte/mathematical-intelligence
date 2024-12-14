theorem ComplexFunctionsLimitSum() {
  assert(
    (∀f,g: S⊆ℂ → ℂ) ∧
    (∀c ∈ S) ∧
    (∀λ,μ ∈ ℂ) ∧
    (lim_{z→c} f(z) = l) ∧
    (lim_{z→c} g(z) = m) 
    ⇒
    lim_{z→c}(λf(z) + μg(z)) = λl + μm
  )
} ↔

proof ComplexFunctionsLimitSum() {
  setVar(f,g: S⊆ℂ → ℂ) →
  setVar(c ∈ S) →
  setVar(λ,μ ∈ ℂ) →
  
  lemma SequenceExists() {
    assert(
      ∃{z_n} ⊆ S: (
        (∀n ∈ ℕ_{>0}: z_n ≠ c) ∧
        lim_{n→∞} z_n = c
      )
    )
  } →
  
  apply(LimitByConvergentSequences) →
  assert(
    lim_{n→∞} f(z_n) = l ∧
    lim_{n→∞} g(z_n) = m
  ) →
  
  apply(CombinedSumRuleForSequences) →
  assert(
    lim_{n→∞}(λf(z_n) + μg(z_n)) = λl + μm
  ) →
  
  apply(LimitByConvergentSequences) →
  assert(
    lim_{z→c}(λf(z) + μg(z)) = λl + μm
  )
}