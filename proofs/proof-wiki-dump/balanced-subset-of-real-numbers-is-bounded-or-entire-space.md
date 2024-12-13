theorem Balanced_Set_Bounded_Or_Entire() {
  let(E: Set(ℝ))
  assume(isBalanced(E)) →
  assert(
    isBounded(E) ∨ E = ℝ
  )
} ↔

proof Balanced_Set_Bounded_Or_Entire() {
  assume(¬isBounded(E)) →
  assert(∀M > 0 ∃x_M ∈ E: |x_M| > M) →
  
  lemma Interval_Subset() {
    assert(∀M > 0: [-M,M] ⊆ E) ↔
    proof {
      let(M > 0) →
      let(t ∈ [-M,M]) →
      assert(|t/x_M| < 1) →
      apply(isBalanced(E)) →
      assert(x_M·(t/x_M) = t ∈ E) →
      conclude([-M,M] ⊆ E)
    }
  } →

  apply(Interval_Subset()) →
  assert(⋃_{M>0} [-M,M] ⊆ E) →
  assert(ℝ ⊆ E) →
  assert(E ⊆ ℝ) →
  conclude(E = ℝ)
}