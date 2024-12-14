theorem Closure_OpenBall_MetricSpace() {
  assert(
    ∀M(M = ⟨A,d⟩ ∧ isMetricSpace(M)) ∧
    ∀x,ε(Bε(x) isOpenBallIn M) ∧
    ∀y(y ∈ cl(Bε(x))) →
    d(x,y) ≤ ε
  )
} ↔

proof Closure_OpenBall_MetricSpace() {
  setVar(M: MetricSpace, x: A, ε: ℝ⁺, y: A) →
  proofByContradiction() {
    assume(d(x,y) > ε) →
    setVar(δ: ℝ⁺, δ = d(x,y) - ε) →
    assert(Bδ(y) isOpen) →
    assert(y ∈ Bδ(y)) →
    
    lemma NoIntersection() {
      assert(
        ∀z(z ∈ Bδ(y) → z ∉ Bε(x)) ↔
        Bδ(y) ∩ Bε(x) = ∅
      )
    } →
    
    apply(NoIntersection()) →
    assert(∃U(U isOpen ∧ y ∈ U ∧ U ∩ Bε(x) = ∅)) →
    assert(y ∉ cl(Bε(x))) →
    assert(contradiction())
  } →
  conclude(d(x,y) ≤ ε)
}