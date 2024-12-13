theorem Not_All_Bounded_Metric_Spaces_Totally_Bounded() {
  assert(
    ∀M[MetricSpace] (
      isBounded(M) ⇏ isTotallyBounded(M)
    )
  )
} ↔

proof Not_All_Bounded_Metric_Spaces_Totally_Bounded() {
  setVar(M: MetricSpace(ℝ, d)) →
  setVar(M': MetricSpace(ℝ, δ)) →
  
  define(δ(x,y) := d(x,y)/(1 + d(x,y))) →
  
  lemma Unity_Bounded_Is_Bounded() {
    assert(
      ∀x,y ∈ ℝ (
        δ(x,y) < 1
      )
    )
  } →
  
  lemma Unity_Bounded_Not_Totally_Bounded() {
    assert(
      ∃ε > 0 (
        ∀F[FiniteSet] ⊂ ℝ (
          ∃p ∈ ℝ (
            ∀q ∈ F (
              δ(p,q) > ε
            )
          )
        )
      )
    )
  } →
  
  apply(Unity_Bounded_Is_Bounded()) →
  assert(isBounded(M')) ∧
  
  apply(Unity_Bounded_Not_Totally_Bounded()) →
  assert(¬isTotallyBounded(M')) →
  
  conclude(
    ∃M[MetricSpace] (
      isBounded(M) ∧ ¬isTotallyBounded(M)
    )
  )
}