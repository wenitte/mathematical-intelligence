theorem CompleteTotallyBoundedIsSeqCompact() {
  assert(
    ∀M(MetricSpace(M) ∧ Complete(M) ∧ TotallyBounded(M)) ⇒ SequentiallyCompact(M)
  )
} ↔

lemma NestedSubsequencesExist() {
  assert(
    ∀M(TotallyBounded(M)) ⇒ 
    ∃f: ℤ₊ × A^ℕ → A^ℕ (
      ∀N ∈ ℤ₊, ∀(xₙ)ₙ∈ℕ ∈ A^ℕ (
        let yₙ := f(N, xₙ) →
        Subsequence(yₙ, xₙ) ∧
        ∀k,l ∈ ℕ (d(yₖ, yₗ) ≤ 1/N)
      )
    )
  )
} ↔

proof CompleteTotallyBoundedIsSeqCompact() {
  setVar(M: MetricSpace) →
  assume(Complete(M) ∧ TotallyBounded(M)) →
  setVar((xₙ)ₙ∈ℕ: Sequence(A)) →
  
  # Construct nested subsequences
  let x⁽⁰⁾ₙ := xₙ →
  ∀N ∈ ℤ₊ (
    let x⁽ᴺ⁾ₙ := f(N, x⁽ᴺ⁻¹⁾ₙ) →
    assert(
      ∀k,l ∈ ℕ (d(x⁽ᴺ⁾ₖ, x⁽ᴺ⁾ₗ) ≤ 1/N)
    )
  ) →

  # Define diagonal sequence
  let yₙ := x⁽ⁿ⁾ₙ →
  assert(Subsequence(yₙ, xₙ)) →
  
  # Prove Cauchy property
  assert(
    ∀N ∈ ℤ₊ (
      ∀m,n ≥ N (d(yₘ, yₙ) ≤ 1/N) →
      CauchySequence((yₙ)ₙ≥ₖ)
    )
  ) →
  
  # Apply completeness
  apply(Complete(M)) →
  assert(Convergent(yₙ)) →
  conclude(SequentiallyCompact(M))
}

note RequiresCountableChoice() {
  assert(
    "This proof requires the Axiom of Countable Choice"
  )
}