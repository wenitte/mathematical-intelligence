theorem Closure_Is_Closed() {
  assert(
    ∀M(M = ⟨A,d⟩ ∧ isMetricSpace(M) ∧
    ∀H(H ⊆ A ∧
    H⁻ = closure(H))) →
    isClosed(H⁻,M)
  )
} ↔

proof Closure_Is_Closed() {
  setVar(M: MetricSpace) →
  setVar(H: Set) →
  setVar(H⁻: Set) →
  let(H̄⁻ = complement(H⁻)) →
  
  ∀x(x ∈ H̄⁻ → 
    ∃ε(ε > 0 ∧ 
      (Bε(x) ∖ {x}) ∩ H = ∅
    )
  ) →

  lemma Set_Intersection_Difference() {
    assert(
      (Bε(x) ∖ {x}) ∩ H = ∅ ↔
      (Bε(x) ∩ H) ∖ {x} = ∅
    )
  } →

  lemma Empty_Set_Difference() {
    assert(
      (Bε(x) ∩ H) ∖ {x} = ∅ ↔
      Bε(x) ∩ H ⊆ {x}
    )
  } →

  assert(¬isIsolatedPoint(x,H)) →
  assert(Bε(x) ∩ H ≠ {x}) →
  assert(Bε(x) ∩ H = ∅) →

  lemma Empty_Intersection_Complement() {
    assert(
      Bε(x) ∩ H = ∅ ↔
      Bε(x) ⊆ H̄⁻
    )
  } →

  assert(isOpen(H̄⁻,M)) →
  assert(isClosed(H⁻,M))
}