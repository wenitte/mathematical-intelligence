theorem Closure_Open_Real_Interval() {
  let(R: TopologicalSpace, τ_d: EuclideanTopology) →
  let(a,b: ℝ) →
  assume(a < b) →
  let(I: Interval = (a,b)) →
  assert(
    closure(I) = [a,b]
  )
} ↔

proof Closure_Open_Real_Interval() {
  lemma LimitPoints() {
    assert(
      limitPoints((a,b)) = (a,b) ∪ {a,b}
    )
  } →
  
  def ClosureDefinition() {
    assert(
      ∀X ⊆ ℝ → closure(X) = X ∪ limitPoints(X)
    )
  } →
  
  apply(LimitPoints()) →
  apply(ClosureDefinition()) →
  assert(
    closure((a,b)) = (a,b) ∪ limitPoints((a,b))
  ) →
  assert(
    closure((a,b)) = (a,b) ∪ ((a,b) ∪ {a,b})
  ) →
  assert(
    closure((a,b)) = (a,b) ∪ {a,b}
  ) →
  assert(
    closure((a,b)) = [a,b]
  )
}