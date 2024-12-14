theorem Combination_Theorem_For_Limits_Sum_Rule() {
  let(S ⊆ ℝ: open set) ∧
  let(f,g: S → ℝ) ∧
  let(c ∈ S) ∧
  assert(
    (lim[x→c] f(x) = l) ∧
    (lim[x→c] g(x) = m) →
    lim[x→c](f(x) + g(x)) = l + m
  )
} ↔

proof Combination_Theorem_For_Limits_Sum_Rule() {
  let({xₙ}: sequence in S) →
  assert(∀n∈ℕ₊: xₙ ≠ c) ∧
  assert(lim[n→∞] xₙ = c) →
  
  lemma Sequence_Limits() {
    apply(Limit_By_Convergent_Sequences) →
    assert(lim[n→∞] f(xₙ) = l) ∧
    assert(lim[n→∞] g(xₙ) = m)
  } →
  
  lemma Sum_Of_Sequences() {
    apply(Sum_Rule_For_Real_Sequences) →
    assert(lim[n→∞](f(xₙ) + g(xₙ)) = l + m)
  } →
  
  apply(Limit_By_Convergent_Sequences) →
  assert(lim[x→c](f(x) + g(x)) = l + m)
}