theorem Balanced_Complex_Subset_Bounded_Or_Entire() {
  let(E ⊆ ℂ)
  assert(
    isBalanced(E) →
    (isBounded(E) ∨ E = ℂ)
  )
}
 
proof Balanced_Complex_Subset_Bounded_Or_Entire() {
  assume(¬isBounded(E)) →
  assert(∀R > 0 ∃zR ∈ E: |zR| > R) →

  lemma Contains_All_Balls() {
    assert(∀R > 0: BR(0) ⊆ E) ∧
    proof {
      setVar(R > 0) →
      setVar(w ∈ BR(0)) →
      assert(|w/zR| < 1) →
      apply(isBalanced(E)) →
      assert(zR · (w/zR) = w ∈ E) →
      conclude(BR(0) ⊆ E)
    }
  } →

  apply(Contains_All_Balls()) →
  assert(⋃R>0 BR(0) ⊆ E) →
  assert(ℂ ⊆ E) →
  assert(E ⊆ ℂ) →
  conclude(E = ℂ)
}