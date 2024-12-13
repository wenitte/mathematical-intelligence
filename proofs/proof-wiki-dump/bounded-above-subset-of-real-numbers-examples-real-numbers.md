theorem Reals_Unbounded_Above() {
  assert(
    ¬(∃M ∈ ℝ: ∀x ∈ ℝ: x ≤ M)
  )
} ↔

proof Reals_Unbounded_Above() {
  lemma Archimedean_Axiom() {
    assert(
      ∀x ∈ ℝ, ∃n ∈ ℕ: x < n
    )
  } →
  assumeForContradiction(
    ∃M ∈ ℝ: ∀x ∈ ℝ: x ≤ M
  ) →
  apply(Archimedean_Axiom(), M) →
  assert(∃n ∈ ℕ: M < n) →
  setVar(n₀: ℕ, M < n₀) →
  assert(n₀ ∈ ℝ ∧ n₀ > M) →
  assert(contradiction(∀x ∈ ℝ: x ≤ M)) →
  therefore(¬(∃M ∈ ℝ: ∀x ∈ ℝ: x ≤ M))
}