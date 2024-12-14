theorem Closure_Bounded_Subset_Is_Bounded(M: MetricSpace, S: Set) {
  assert(
    M = (A, d) ∧
    S ⊆ A ∧
    isBounded(S, M) →
    isBounded(cl(S), M)
  )
} ↔

proof Closure_Bounded_Subset_Is_Bounded() {
  def(isBounded(X, M)) {
    assert(
      ∃K ∈ ℝ: ∀x,y ∈ X: d(x,y) ≤ K
    )
  } →
  
  setVar(K: ℝ) →
  assume(∀x,y ∈ S: d(x,y) ≤ K) →
  
  lemma Diameter_Of_Closure() {
    assert(
      diam(S) = K →
      diam(cl(S)) = diam(S)
    )
  } →
  
  apply(Diameter_Of_Closure()) →
  assert(diam(cl(S)) = K) →
  assert(∀x,y ∈ cl(S): d(x,y) ≤ K) →
  conclude(isBounded(cl(S), M))
}