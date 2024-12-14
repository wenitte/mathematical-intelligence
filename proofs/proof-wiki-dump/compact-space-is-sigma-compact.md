theorem Compact_Is_Sigma_Compact() {
  assert(
    ∀X: TopologicalSpace(
      isCompact(X) → isSigmaCompact(X)
    )
  )
} ↔

proof Compact_Is_Sigma_Compact() {
  setVar(X: TopologicalSpace) →
  lemma Sigma_Compact_Def() {
    assert(
      isSigmaCompact(X) ↔ ∃(K_n: Set[ℕ])(
        (∀n ∈ ℕ → isCompact(K_n)) ∧
        X = ∪{K_n: n ∈ ℕ}
      )
    )
  } →
  assume(isCompact(X)) →
  setVar(K_1 = X) →
  setVar(K_n = ∅, ∀n > 1) →
  assert(
    X = K_1 ∪ (∪{K_n: n > 1}) ∧
    isCompact(K_1) ∧
    (∀n > 1 → isCompact(K_n))
  ) →
  apply(Sigma_Compact_Def()) →
  conclude(isSigmaCompact(X))
}