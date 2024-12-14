theorem ClosedBallIsClosedNeighborhood() {
  let M = ⟨A, d⟩: MetricSpace,
  let x ∈ A,
  let ε ∈ ℝ_{>0},
  let B_ε^-(x): ClosedBall
  assert(
    IsClosedNeighborhood(B_ε^-(x), x, M)
  )
} ↔

proof ClosedBallIsClosedNeighborhood() {
  lemma SmallerOpenBall() {
    assert(
      B_ε(x) ⊆ B_ε^-(x)
    )
  } →
  
  apply(SmallerOpenBall()) →
  assert(
    IsNeighborhood(B_ε^-(x), x)
  ) →
  
  lemma ClosedBallIsClosed() {
    assert(
      IsClosed(B_ε^-(x), M)
    )
  } →
  
  apply(ClosedBallIsClosed()) →
  assert(
    IsNeighborhood(B_ε^-(x), x) ∧ IsClosed(B_ε^-(x), M)
  ) →
  
  conclude(
    IsClosedNeighborhood(B_ε^-(x), x, M)
  )
}