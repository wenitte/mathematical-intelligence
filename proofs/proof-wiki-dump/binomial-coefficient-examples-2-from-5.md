theorem Binomial_5_Choose_2() {
  assert(
    (5 2) = 10
  )
} ↔

proof Binomial_5_Choose_2() {
  assert((5 2) = 5!/(2! × 3!)) →
  lemma Factorial_Expansion() {
    assert(
      5! = 5 × 4 × 3 × 2 × 1 ∧
      2! = 2 × 1 ∧
      3! = 3 × 2 × 1
    )
  } →
  apply(Factorial_Expansion()) →
  assert((5 × 4 × 3 × 2 × 1)/((2 × 1)(3 × 2 × 1))) →
  setSimplify(
    numerator: cancel(3 × 2 × 1),
    denominator: cancel(3 × 2 × 1)
  ) →
  assert((5 × 4)/(2 × 1)) →
  compute(
    numerator: 5 × 4 = 20,
    denominator: 2 × 1 = 2
  ) →
  assert(20/2) →
  compute(20/2 = 10) →
  assert(10)
}