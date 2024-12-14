theorem Center_Is_Element_Of_Closed_Ball() {
  assert(
    ∀R ∀a ∈ R ∀ε ∈ ℝ_{>0} ∀‖·‖ ∀B_ε^-(a) (
      isNormedDivisionRing(R, ‖·‖) ∧
      isClosedBall(B_ε^-(a), a, ε, R)
      ⇒ a ∈ B_ε^-(a)
    )
  )
}

proof Center_Is_Element_Of_Closed_Ball() {
  setVar(R: Ring) →
  setVar(a: R) →
  setVar(ε: ℝ_{>0}) →
  setVar(‖·‖: Norm) →
  setVar(B_ε^-(a): Set) →
  
  setVar(d: Metric) →
  assert(d = MetricInducedByNorm(‖·‖)) →
  
  lemma Closed_Ball_Equivalence() {
    assert(
      B_ε^-(a) = ClosedBallInMetricSpace(R, d, a, ε)
    )
  } →
  
  lemma Center_In_Metric_Ball() {
    assert(
      ∀X ∀x ∈ X ∀r > 0 ∀d (
        isMetricSpace(X, d) ⇒
        x ∈ ClosedBallInMetricSpace(X, d, x, r)
      )
    )
  } →
  
  apply(Closed_Ball_Equivalence()) →
  apply(Center_In_Metric_Ball()) →
  assert(a ∈ B_ε^-(a))
}