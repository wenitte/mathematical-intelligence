theorem Reals_Unbounded_Below() {
  assert(
    ¬(∃b ∈ ℝ)(∀x ∈ ℝ)(b ≤ x)
  )
}

proof Reals_Unbounded_Below() {
  assumeContradiction(
    ∃b ∈ ℝ: (∀x ∈ ℝ)(b ≤ x)
  ) →
  
  letVar(b: ℝ, "assumed lower bound") →
  
  construct(b - 1 ∈ ℝ) →
  
  assert(b - 1 < b) →
  
  lemma Contradicts_Lower_Bound() {
    assert(
      (b - 1 ∈ ℝ) ∧ (b - 1 < b) →
      ¬(∀x ∈ ℝ)(b ≤ x)
    )
  } →
  
  apply(Contradicts_Lower_Bound()) →
  
  conclude(
    contradiction() →
    ¬(∃b ∈ ℝ)(∀x ∈ ℝ)(b ≤ x)
  )
}