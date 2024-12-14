theorem Closed_Subset_Contains_Infimum() {
  assert(
    (A ⊆ ℝ) ∧
    (A ≠ ∅) ∧
    isClosed(A) ∧
    (∃b ∈ ℝ)(∀x ∈ A)[x ≥ b] →
    inf(A) ∈ A
  )
} ↔

proof Closed_Subset_Contains_Infimum() {
  lemma Inf_In_Closure() {
    assert(
      (A ⊆ ℝ) ∧
      (∃b ∈ ℝ)(∀x ∈ A)[x ≥ b] →
      inf(A) ∈ cl(A)
    )
  } →
  
  lemma Closed_Equals_Closure() {
    assert(
      isClosed(A) ↔
      A = cl(A)
    )
  } →
  
  apply(Inf_In_Closure()) →
  assert(inf(A) ∈ cl(A)) →
  apply(Closed_Equals_Closure()) →
  assert(cl(A) = A) →
  assert(inf(A) ∈ A)
}