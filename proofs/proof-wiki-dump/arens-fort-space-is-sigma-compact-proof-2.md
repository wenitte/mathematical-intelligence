theorem ArensFort_Is_SigmaCompact() {
  let T = (S, τ) be ArensFort_Space
  assert(
    T is σ-compact_space
  )
} ↔

proof ArensFort_Is_SigmaCompact() {
  lemma L1() {
    assert(ArensFort_Space is countable)
  } →
  lemma L2() {
    assert(∀X[
      X is countable_space → X is σ-compact_space
    ])
  } →
  apply(L1()) ∧
  apply(L2()) →
  assert(T is σ-compact_space)
}