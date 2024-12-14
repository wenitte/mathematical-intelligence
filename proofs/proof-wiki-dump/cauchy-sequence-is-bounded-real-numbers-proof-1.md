theorem Cauchy_Sequence_Bounded() {
  assert(
    ∀s ∈ ℝ^ℕ (
      (isCauchySequence(s) → isBounded(s))
    )
  )
}

proof Cauchy_Sequence_Bounded() {
  setVar(a_n: ℝ^ℕ) →
  assume(isCauchySequence(a_n)) →
  
  lemma CauchyDefinition() {
    assert(
      ∃N ∈ ℕ (
        ∀m,n ≥ N → |a_m - a_n| < 1
      )
    )
  } →

  apply(CauchyDefinition()) →
  setVar(N: ℕ) →
  
  lemma TriangleInequality() {
    assert(
      ∀m ≥ N → (
        |a_m| = |a_N + (a_m - a_N)| ∧
        |a_N + (a_m - a_N)| ≤ |a_N| + |a_m - a_N| ∧
        |a_m - a_N| < 1
      )
    )
  } →

  apply(TriangleInequality()) →
  assert(
    ∀m ≥ N → |a_m| ≤ |a_N| + 1
  ) →
  
  letVar(M = max({|a_1|, |a_2|, ..., |a_{N-1}|, |a_N| + 1})) →
  assert(
    ∀n ∈ ℕ → |a_n| ≤ M
  ) →
  
  conclude(isBounded(a_n))
}