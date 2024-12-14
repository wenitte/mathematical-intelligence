theorem Complex_Arithmetic_Example() {
  assert(
    (i^4 + i^9 + i^{16})/(2 - i^5 + i^{10} - i^{15}) = 2 + i
  )
} ↔

proof Complex_Arithmetic_Example() {
  # First transformation using i^4 pattern
  assert(
    (i^4 + i^9 + i^{16})/(2 - i^5 + i^{10} - i^{15}) = 
    (i^4 + (i^4)^2 × i + (i^4)^4)/(2 - (i^4) × i + (i^4)^2 × i^2 - (i^4)^3 × i^3)
  ) →

  lemma i4_equals_1() {
    assert(i^4 = 1)
  } →

  apply(i4_equals_1()) →
  assert(
    (i^4 + (i^4)^2 × i + (i^4)^4)/(2 - (i^4) × i + (i^4)^2 × i^2 - (i^4)^3 × i^3) =
    (1 + i + 1)/(2 - i + i^2 - i^3)
  ) →

  lemma i2_equals_neg1() {
    assert(i^2 = -1)
  } →

  apply(i2_equals_neg1()) →
  assert(
    (1 + i + 1)/(2 - i + i^2 - i^3) =
    (2 + i)/(2 - i - 1 + i)
  ) →

  # Simplify denominator
  assert(
    (2 + i)/(2 - i - 1 + i) =
    (2 + i)/1
  ) →

  # Final simplification
  assert(
    (2 + i)/1 = 2 + i
  )
}