theorem Arctangent_Exponential_Order_Zero() {
  let(arctan: ℝ → (-π/2, π/2))
  assert(
    arctan is_of_exponential_order(0)
  )
} ↔

proof Arctangent_Exponential_Order_Zero() {
  lemma Function_Limit_Infinity_Exp_Order_Zero() {
    assert(
      ∀f: ℝ → ℝ,
      lim[x→∞] f(x) exists ∧
      lim[x→∞] f(x) is_finite →
      f is_of_exponential_order(0)
    )
  } →
  assert(lim[x→∞] arctan(x) = π/2) →
  apply(Function_Limit_Infinity_Exp_Order_Zero()) →
  conclude(arctan is_of_exponential_order(0))
}