theorem Arccot_Exponential_Order_Zero() {
  let(arccot: ℝ → (0,π)) →
  assert(
    IsExponentialOrderZero(arccot)
  )
} ↔

proof Arccot_Exponential_Order_Zero() {
  assert(
    ∃L ∈ ℝ: lim[x→∞] arccot(x) = L
  ) →
  apply(Function_With_Limit_At_Infinity_Exp_Order_Zero) →
  assert(
    lim[x→∞] arccot(x) = 0 →
    IsExponentialOrderZero(arccot)
  )
}