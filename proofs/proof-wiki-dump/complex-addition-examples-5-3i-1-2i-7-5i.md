theorem Complex_Addition_Example() {
  assert(
    (5 + 3i) + ((−1 + 2i) + (7 − 5i)) = 11
  )
} ↔

proof Complex_Addition_Example() {
  assert((5 + 3i) + ((−1 + 2i) + (7 − 5i))) →
  lemma Apply_Complex_Addition_Inner() {
    assert(
      (−1 + 2i) + (7 − 5i) = ((−1 + 7) + (2 − 5)i)
    )
  } →
  apply(Apply_Complex_Addition_Inner()) →
  assert((5 + 3i) + (6 − 3i)) →
  lemma Apply_Complex_Addition_Outer() {
    assert(
      (5 + 3i) + (6 − 3i) = (5 + 6) + (3i − 3i)
    )
  } →
  apply(Apply_Complex_Addition_Outer()) →
  assert(11 + 0i) →
  assert(11)
}