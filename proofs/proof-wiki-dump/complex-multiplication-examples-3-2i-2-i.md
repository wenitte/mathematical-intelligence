theorem Complex_Multiplication_Example() {
  assert(
    (3 + 2i)(2 - i) = 8 + i
  )
} ↔

proof Complex_Multiplication_Example() {
  assert((3 + 2i)(2 - i)) →
  distribute(
    first_term = 3,
    second_term = 2i,
    third_term = 2,
    fourth_term = -i
  ) →
  assert(
    (3 × 2 - 3 × i + 2i × 2 + 2i × (-i))
  ) →
  simplify_terms(
    real_parts = (3 × 2, 2i × (-i)),
    imaginary_parts = (-3 × i, 2i × 2)
  ) →
  assert(
    (6 + 2) + (-3 + 4)i
  ) →
  combine_like_terms(
    real_part = 6 + 2,
    imaginary_part = -3 + 4
  ) →
  assert(8 + i)
}