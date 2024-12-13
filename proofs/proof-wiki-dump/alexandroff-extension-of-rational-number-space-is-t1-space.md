theorem Alexandroff_Extension_T1() {
  assert(
    ∀Q(MetricSpace(Q, τ_d)) ∧
    ∃p(p ∉ Q) ∧
    let(Q* = Q ∪ {p}) ∧
    let(T* = (Q*, τ*)) ∧
    isAlexandroffExtension(T*, (Q, τ_d))
    ⇒ isT1Space(T*)
  )
}

proof Alexandroff_Extension_T1() {
  lemma AlexandroffT1_Condition() {
    assert(
      isT1Space(T*) ↔ isT1Space((Q, τ_d))
    )
  } →
  
  lemma Rational_Metric() {
    assert(isMetricSpace((Q, d)))
  } →
  
  lemma Metric_T1() {
    assert(
      ∀X(isMetricSpace(X) ⇒ isT1Space(X))
    )
  } →
  
  apply(Rational_Metric()) →
  apply(Metric_T1()) →
  assert(isT1Space((Q, τ_d))) →
  apply(AlexandroffT1_Condition()) →
  assert(isT1Space(T*))
}