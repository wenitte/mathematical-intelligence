theorem Compact_Subset_Is_Closed_And_Bounded() {
  let(X: NormedVectorSpace) ∧
  let(K ⊂ X) ∧
  assert(isCompact(K)) →
  assert(isClosed(K) ∧ isBounded(K))
}

proof Compact_Subset_Is_Closed_And_Bounded() {
  // Closedness proof
  let({xₙ}_{n∈ℕ}: Sequence) ∧
  assert(∀n: xₙ ∈ K) ∧
  assert(∃L: xₙ → L) →
  
  lemma Subsequence_Convergence() {
    assert(isCompact(K)) →
    assert(∃{xₙₖ}_{k∈ℕ}: Subsequence({xₙ})) ∧
    assert(∃L' ∈ K: xₙₖ → L')
  } →
  
  apply(Subsequence_Convergence()) →
  assert(xₙₖ → L) ∧
  assert(xₙₖ → L') →
  apply(Limit_Uniqueness()) →
  assert(L = L') →
  assert(L ∈ K) →
  assert(isClosed(K)) ∧

  // Boundedness proof
  assume(¬isBounded(K)) →
  assert(∀n ∈ ℕ: ∃xₙ ∈ K: ∥xₙ∥ > n) →
  assert(¬∃{xₙₖ}: isConvergent({xₙₖ})) →
  assert(¬isCompact(K)) →
  assert(contradiction()) →
  assert(isBounded(K))
}