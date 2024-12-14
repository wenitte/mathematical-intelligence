theorem Closed_Bounded_Not_Necessarily_Compact(M: MetricSpace, H: Set) {
  let d: MetricFunction
  let MH: SubspaceMetric
  assert(
    M = (A, d) ∧
    H ⊆ A ∧
    MH = (H, d_H) ∧
    isClosed(H) ∧
    isBounded(H) ⊏
    ¬(∀H → isCompact(MH))
  )
} ↔

proof Closed_Bounded_Not_Necessarily_Compact() {
  // Construct counterexample
  setVar(A := (0,1)) →
  assert(A = OpenUnitInterval) →
  
  lemma NonCompactInterval() {
    assert(¬isCompact(OpenUnitInterval))
  } →
  
  setVar(H := A) →
  assert(H ⊆ A) →
  
  lemma ClopenInSelf() {
    assert(
      isClopen(H, H) ↔
      (isClosed(H, H) ∧ isOpen(H, H))
    )
  } →
  
  assert(
    isClosed(H) ∧
    isBounded(H) ∧
    ¬isCompact(H)
  ) →
  
  conclude(∃H[isClosed(H) ∧ isBounded(H) ∧ ¬isCompact(H)])
}