theorem Number_1782_Property() {
  assert(
    1782 = 3 × ∑(twoDigitNums(digits(1782)))
  )
  where {
    twoDigitNums(S) := {n ∈ ℕ | 10 ≤ n ≤ 99 ∧ digits(n) ⊆ S}
    digits(1782) = {1,7,8,2}
  }
} ↔

proof Number_1782_Property() {
  setVar(D := {1,7,8,2}) →
  assert(
    twoDigitNums(D) = P₂(D)
  ) →
  assert(
    P₂(D) = {17,18,12,71,78,72,81,87,82,21,27,28}
  ) →
  lemma Sum_Equals_594() {
    assert(
      ∑(P₂(D)) = 17+18+12+71+78+72+81+87+82+21+27+28 = 594
    )
  } →
  apply(Sum_Equals_594()) →
  assert(594 × 3 = 1782) →
  assert(
    1782 = 3 × ∑(twoDigitNums(digits(1782)))
  )
}