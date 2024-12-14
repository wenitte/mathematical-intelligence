theorem CompactSubspaceClosedBounded() {
  assert(
    ∀S ⊆ ℝ [
      (isCompact(S) → (isClosed(S) ∧ isBounded(S)))
    ]
  )
} ↔

proof CompactSubspaceClosedBounded() {
  lemma NonClosedNotCompact() {
    assert(
      ∀T ⊆ ℝ [¬isClosed(T) → ¬isCompact(T)]
    )
  } →
  
  lemma UnboundedNotCompact() {
    assert(
      ∀T ⊆ ℝ [¬isBounded(T) → ¬isCompact(T)]
    )
  } →

  assert(
    ∀S ⊆ ℝ [
      ¬isCompact(S) → (¬isClosed(S) ∨ ¬isBounded(S))
    ]
  ) →

  apply(RuleOfTransposition()) →
  
  assert(
    ∀S ⊆ ℝ [
      isCompact(S) → (isClosed(S) ∧ isBounded(S))
    ]
  )
}