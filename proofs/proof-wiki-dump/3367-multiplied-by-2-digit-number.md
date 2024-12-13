theorem Multiply_3367_TwoDigit() {
  assert(
    ∀x,y ∈ ℕ where x,y ∈ [0,9] ⇒
    3367 × [xy] = [xyxyxy] ÷ 3
  )
} ↔

proof Multiply_3367_TwoDigit() {
  setVar(x,y: ℕ) →
  assert(10101 = 3367 × 3) →
  assert(
    [xy] × 10101 = [xy] × (3367 × 3)
  ) →
  assert(
    [xy] × 10101 = [xyxyxy]
  ) →
  lemma Division_Property() {
    assert(
      If a × b = c then a = c ÷ b
    )
  } →
  apply(Division_Property()) →
  assert(
    3367 × [xy] = [xyxyxy] ÷ 3
  )
}