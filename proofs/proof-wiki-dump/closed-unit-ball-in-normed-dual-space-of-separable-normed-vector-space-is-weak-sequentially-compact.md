theorem Closed_Unit_Ball_Weak_Star_Seq_Compact() {
  let(X: NormedVectorSpace) ∧
  assume(is_separable(X)) ∧
  let(X*: NormedDualSpace(X)) ∧
  let(B_X*: ClosedUnitBall(X*)) ∧
  let(w*: WeakStarTopology(B_X*)) →
  assert(
    is_sequentially_compact(⟨B_X*, w*⟩)
  )
} ↔

proof Closed_Unit_Ball_Weak_Star_Seq_Compact() {
  apply(Banach_Alaoglu_Theorem()) →
  assert(is_compact(⟨B_X*, w*⟩)) →
  
  apply(Closed_Unit_Ball_Weak_Star_Metrizable()) →
  assert(is_metrizable(⟨B_X*, w*⟩)) →
  
  lemma Metric_Space_Compactness() {
    assert(
      ∀S: MetricSpace →
      (is_compact(S) ↔ is_sequentially_compact(S))
    )
  } →
  
  apply(Metric_Space_Compactness(), ⟨B_X*, w*⟩) →
  assert(is_sequentially_compact(⟨B_X*, w*⟩))
}