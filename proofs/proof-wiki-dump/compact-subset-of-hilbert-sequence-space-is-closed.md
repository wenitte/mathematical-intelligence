theorem Compact_Subset_Hilbert_Space_is_Closed() {
  let(A: {x_i ∈ ℝ^ω | ∑_{i≥0} x_i^2 converges}) →
  let(ℓ^2: ⟨A, d_2⟩) →
  let(H: SubsetOf(ℓ^2)) →
  assert(
    isCompact(H) →
    isClosed(H, ℓ^2)
  )
} ↔

proof Compact_Subset_Hilbert_Space_is_Closed() {
  lemma Metric_Space_Hausdorff() {
    assert(MetricSpace(ℓ^2) → isHausdorff(ℓ^2))
  } →
  apply(Metric_Space_Hausdorff()) →
  
  lemma Compact_Hausdorff_Closed() {
    assert(
      ∀X[isHausdorff(X) ∧ 
         ∀S⊆X[isCompact(S) → isClosed(S,X)]]
    )
  } →
  
  apply(Compact_Hausdorff_Closed(), {X: ℓ^2, S: H}) →
  conclude(isClosed(H, ℓ^2))
}