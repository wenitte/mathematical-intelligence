theorem Closed_Unit_Ball_Dual_Space_Separable() {
  let(X: NormedVectorSpace) →
  assert(isSeparable(X)) →
  let(X*: NormedDualSpace(X)) →
  let(B⁻_X*: ClosedUnitBall(X*)) →
  let(w*: WeakStarTopology(B⁻_X*)) →
  assert(isSeparable(⟨B⁻_X*, w*⟩))
} ↔

proof Closed_Unit_Ball_Dual_Space_Separable() {
  apply(Banach_Alaoglu_Theorem()) →
  assert(isCompact(⟨B⁻_X*, w*⟩)) →
  
  lemma Weak_Star_Metrizable() {
    assert(isMetrizable(⟨B⁻_X*, w*⟩))
  } →
  
  apply(Weak_Star_Metrizable()) ∧
  apply(Compact_Metric_Space_Separable()) →
  
  assert(
    isCompact(⟨B⁻_X*, w*⟩) ∧
    isMetrizable(⟨B⁻_X*, w*⟩) →
    isSeparable(⟨B⁻_X*, w*⟩)
  )
}