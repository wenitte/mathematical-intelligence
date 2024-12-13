theorem BeattysTheorem() {
  assert(
    ∀r,s ∈ (ℝ\ℚ) ∧ r,s > 1 ∧ 
    let(ℬr: BeattySequence(r)) ∧
    let(ℬs: BeattySequence(s)) ⇒
    [ℬr,ℬs areComplementary ↔ (1/r + 1/s = 1)]
  )
} ↔

proof BeattysTheorem() {
  // Part 1: Collisions
  lemma NoCollisions() {
    assume(∃j,k,m ∈ ℤ+ : ⌊kr⌋ = ⌊ms⌋ = j) →
    assert(j ≤ kr < j+1 ∧ j ≤ ms < j+1) →
    apply(r,s ∈ ℝ\ℚ) →
    assert(j < kr < j+1 ∧ j < ms < j+1) →
    assert(j/r < k < (j+1)/r ∧ j/s < m < (j+1)/s) →
    apply(1/r + 1/s = 1) →
    assert(j < k + m < j+1) →
    contradiction(∄n ∈ ℤ : j < n < j+1)
  }

  // Part 2: Anti-collisions
  lemma NoGaps() {
    assume(∃j,k,m ∈ ℤ+ : 
      kr < j ∧ 
      j+1 ≤ (k+1)r ∧
      ms < j ∧
      j+1 ≤ (m+1)s
    ) →
    apply(r,s ∈ ℝ\ℚ) →
    assert(
      kr < j ∧
      j+1 < (k+1)r ∧
      ms < j ∧
      j+1 < (m+1)s
    ) →
    assert(
      k < j/r ∧
      (j+1)/r < k+1 ∧
      m < j/s ∧
      (j+1)/s < m+1
    ) →
    assert(k + m < j ∧ j + 1 < k + m + 2) →
    assert(k + m < j < k + m + 1) →
    contradiction(∄n ∈ ℤ : n < j < n + 1)
  }

  apply(NoCollisions()) →
  apply(NoGaps()) →
  assert(ℬr,ℬs areComplementary)
}