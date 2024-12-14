theorem Cauchy_Sequence_Bounded_Real() {
  assert(
    ∀s: Sequence(ℝ) → (
      isCauchy(s) → isBounded(s)
    )
  )
}

proof Cauchy_Sequence_Bounded_Real() {
  setVar(a_n: Sequence(ℝ)) →
  assume(isCauchy(a_n)) →
  
  lemma Cauchy_Definition() {
    assert(
      ∃N ∈ ℕ → ∀m,n ≥ N → |a_m - a_n| < 1
    )
  } →

  setVar(N: ℕ, fromLemma(Cauchy_Definition())) →
  
  lemma Triangle_Inequality() {
    assert(
      ∀m ≥ N → |a_m| = |a_N + (a_m - a_N)| →
      |a_m| ≤ |a_N| + |a_m - a_N| →
      |a_m| ≤ |a_N| + 1
    )
  } →

  lemma Finite_Maximum() {
    assert(
      ∀m ≤ N → |a_m| ≤ max({|a_1|, |a_2|, ..., |a_N|})
    )
  } →

  let(M = max({|a_1|, |a_2|, ..., |a_N|}) + 1) →
  
  assert(
    ∀n ∈ ℕ → |a_n| < M
  ) →

  conclude(isBounded(a_n))
}