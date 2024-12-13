theorem Abels_Test() {
  assert(
    ∀{bn: Series(ℝ)} ∧ ∀{an: Sequence(ℝ+)} ⇒
    (isConvergent(∑bn) ∧ isDecreasing(an)) →
    isConvergent(∑(an*bn))
  )
}

proof Abels_Test() {
  setVar(b0 := 0) →
  setVar(BN := ∑[k=0→N]bk) →
  
  lemma Sequence_Property() {
    assert(∀n≥1: bn = BN - BN-1)
  } →

  lemma Abels_Lemma() {
    assert(
      ∑[k=1→N](ak*bk) = 
      ∑[k=1→N-1](Bk*(ak - ak+1)) + aN*BN
    )
  } →

  apply(Monotone_Convergence_Theorem) →
  assert(
    isConvergent(an) ∧ 
    isConvergent(BN) ← isConvergent(∑bn)
  ) →
  
  assert(isConvergent(aN*BN)) →
  
  lemma Bound_Exists() {
    assert(
      isConvergent(BN) →
      ∃M∈ℝ: |BN| ≤ M
    )
  } →

  lemma Series_Bound() {
    assert(
      ∑[k=1→N]|Bk*(ak - ak+1)| ≤
      M*∑[k=1→N]|ak - ak+1| =
      M*|a1 - aN+1| ← isDecreasing(an)
    ) →
    assert(
      M*|a1 - aN+1| → M*|a1 - a| ← lim(ak) = a
    )
  } →

  assert(
    isAbsolutelyConvergent(∑Bk*(ak - ak+1)) →
    isConvergent(∑(an*bn))
  )
}