theorem ClosedBall_NormedRing_Metric_Equivalence() {
  let(R: NormedDivisionRing, ||·||: Norm, d: Metric) →
  assume(d = InducedMetric(||·||)) →
  let(a ∈ R, ε > 0) →
  let(B_ε⁻(a,||·||): ClosedBall_Norm) →
  let(B_ε⁻(a,d): ClosedBall_Metric) →
  assert(
    B_ε⁻(a,||·||) = B_ε⁻(a,d)
  )
}

proof ClosedBall_NormedRing_Metric_Equivalence() {
  setVar(x: R) →
  assert(
    x ∈ B_ε⁻(a,||·||) 
    ↔ ||x - a|| ≤ ε
    ↔ d(x,a) ≤ ε
    ↔ x ∈ B_ε⁻(a,d)
  ) →
  
  lemma First_Equivalence() {
    assert(x ∈ B_ε⁻(a,||·||) ↔ ||x - a|| ≤ ε) by(ClosedBall_Norm_Definition)
  } →
  
  lemma Second_Equivalence() {
    assert(||x - a|| ≤ ε ↔ d(x,a) ≤ ε) by(InducedMetric_Definition)
  } →
  
  lemma Third_Equivalence() {
    assert(d(x,a) ≤ ε ↔ x ∈ B_ε⁻(a,d)) by(ClosedBall_Metric_Definition)
  } →
  
  apply(SetEquality_Bidirectional_Membership()) →
  conclude(B_ε⁻(a,||·||) = B_ε⁻(a,d))
}