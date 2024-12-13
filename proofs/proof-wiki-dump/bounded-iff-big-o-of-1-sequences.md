theorem Bounded_iff_BigO_of_1() {
  assert(
    ∀{aₙ} ∈ SequenceSpace(ℝ ∪ ℂ) ⇒
    (isBounded({aₙ}) ↔ isInBigO({aₙ}, 1))
  )
} ↔

proof Bounded_iff_BigO_of_1() {
  setVar({aₙ}: Sequence(ℝ ∪ ℂ)) →
  
  assert(
    isBounded({aₙ}) ↔
    ∃k ∈ ℝ: |aₙ| ≤ k
  ) →
  
  assert(
    ∃k ∈ ℝ: |aₙ| ≤ k ↔
    ∃k ∈ ℝ: |aₙ| ≤ k·|1|
  ) →
  
  lemma BigO_Definition() {
    assert(
      ∃k ∈ ℝ: |aₙ| ≤ k·|1| ↔
      aₙ = O(1)
    )
  } →
  
  apply(BigO_Definition()) →
  
  assert(
    isBounded({aₙ}) ↔ aₙ = O(1)
  )
}