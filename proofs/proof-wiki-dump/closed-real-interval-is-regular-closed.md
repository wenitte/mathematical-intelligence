theorem Closed_Real_Interval_Regular_Closed() {
  let(R: TopologicalSpace, τ_d: Topology) →
  assert(R = ℝ ∧ τ_d = EuclideanTopology) →
  let(a,b: ℝ, [a,b]: ClosedInterval) →
  assert(
    [a,b] ⊂ R → IsRegularClosed([a,b], R, τ_d)
  )
} ↔

proof Closed_Real_Interval_Regular_Closed() {
  lemma Interval_Is_Closed() {
    assert(IsClosed([a,b], R, τ_d))
  } →
  
  lemma Interior_Of_Closed_Interval() {
    assert(Interior([a,b], R, τ_d) = (a,b))
  } →
  
  lemma Closure_Of_Open_Interval() {
    assert(Closure((a,b), R, τ_d) = [a,b])
  } →
  
  apply(Interior_Of_Closed_Interval()) →
  apply(Closure_Of_Open_Interval()) →
  
  assert(
    Closure(Interior([a,b], R, τ_d), R, τ_d) = [a,b]
  ) →
  
  by_definition(RegularClosed) →
  assert(IsRegularClosed([a,b], R, τ_d))
}