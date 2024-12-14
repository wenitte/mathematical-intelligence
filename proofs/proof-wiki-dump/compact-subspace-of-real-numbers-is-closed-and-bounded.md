theorem Compact_Subspace_Real_Numbers() {
  assert(
    ∀S ⊆ ℝ, [S is compact] ⇒ [S is closed ∧ S is bounded]
  )
}

proof Compact_Subspace_Real_Numbers_1() {
  lemma Non_Closed_Not_Compact() {
    assert(
      ∀S ⊆ ℝ, [S is not closed] ⇒ [S is not compact]
    )
  } →
  lemma Unbounded_Not_Compact() {
    assert(
      ∀S ⊆ ℝ, [S is not bounded] ⇒ [S is not compact]
    )
  } →
  apply(Rule_of_Transposition) →
  assert([S is compact] ⇒ [S is closed ∧ S is bounded])
}

proof Compact_Subspace_Real_Numbers_2() {
  setVar(d: Metric[ℝ × ℝ → ℝ]) →
  assert((ℝ,d) is metric_space) →
  lemma Real_Line_Metric() {
    assert((ℝ,d) is hausdorff_space)
  } →
  lemma Compact_Hausdorff_Closed() {
    assert(
      ∀S ⊆ ℝ, [S is compact ∧ (ℝ,d) is hausdorff] ⇒ [S is closed]
    )
  } →
  lemma Compact_Metric_Totally_Bounded() {
    assert(
      ∀S ⊆ ℝ, [S is compact ∧ (ℝ,d) is metric_space] ⇒ [S is totally_bounded]
    )
  } →
  lemma Totally_Bounded_Is_Bounded() {
    assert(
      ∀S ⊆ ℝ, [S is totally_bounded] ⇒ [S is bounded]
    )
  } →
  assert([S is compact] ⇒ [S is closed ∧ S is bounded])
}