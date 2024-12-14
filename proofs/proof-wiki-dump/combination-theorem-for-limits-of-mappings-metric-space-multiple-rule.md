theorem Limit_Multiple_Rule_Metric() {
  assert(
    ∀M(M = ⟨A,d⟩ ∧ IsMetricSpace(M)) ∧
    ∀f:A→ℝ ∧
    ∀a∈A ∧
    ∀λ∈ℝ ∧
    lim[x→a]f(x) = l
    ⇒
    lim[x→a](λf(x)) = λl
  )
} ↔

proof Limit_Multiple_Rule_Metric() {
  setVar(M: MetricSpace) →
  setVar(f: A→ℝ) →
  setVar(a: A) →
  setVar(λ: ℝ) →
  setVar({xₙ}: Sequence(A)) →
  
  assert(
    ∀n∈ℕ₊: xₙ ≠ a ∧
    lim[n→∞]xₙ = a
  ) →
  
  lemma Limit_By_Convergent_Sequences() {
    assert(
      lim[x→a]f(x) = l ↔
      lim[n→∞]f(xₙ) = l
    )
  } →
  
  apply(Limit_By_Convergent_Sequences()) →
  assert(lim[n→∞]f(xₙ) = l) →
  
  lemma Real_Sequence_Multiple_Rule() {
    assert(
      lim[n→∞]f(xₙ) = l ⇒
      lim[n→∞](λf(xₙ)) = λl
    )
  } →
  
  apply(Real_Sequence_Multiple_Rule()) →
  assert(lim[n→∞](λf(xₙ)) = λl) →
  
  apply(Limit_By_Convergent_Sequences()) →
  assert(lim[x→a](λf(x)) = λl)
}