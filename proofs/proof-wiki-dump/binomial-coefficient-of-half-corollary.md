theorem Binomial_Coefficient_Half() {
  assert(
    ∀k ∈ ℤ≥0 ⇒ (
      (k₁/₂) = (((-1)^(k-1))/(2^(2k-1)(2k-1))) * (2k-1 choose k) - δₖ₀
    )
  )
} ↔

proof Binomial_Coefficient_Half() {
  setVar(k: ℤ≥0) →
  
  case k > 0 {
    assert(
      (((-1)^(k-1))/(4^k(2k-1))) * (2k choose k)
    ) →
    apply(Factors_Binomial_Coeff_1()) →
    assert(
      (((-1)^(k-1))/(4^k(2k-1))) * (2k/k) * (2k-1 choose k)
    ) →
    simplify() →
    assert(
      (2(-1)^(k-1))/(4^k(2k-1)) * (2k-1 choose k)
    )
  } ∧

  case k = 0 {
    assert(
      (((-1)^(k-1))/(4^k(2k-1))) * (2k choose k)
    ) →
    substitute(k = 0) →
    assert(
      (((-1)^(-1))/(-1)) * (0 choose 0) = 1
    ) ∧
    
    assert(
      (((-1)^(k-1))/(2^(2k-1)(2k-1))) * (2k-1 choose k)
    ) →
    substitute(k = 0) →
    apply(Negated_Upper_Index_Binomial()) →
    simplify() →
    assert(
      2 * (0 choose 0) = 2
    )
  } →

  combine_cases() →
  assert(
    (k₁/₂) = (((-1)^(k-1))/(2^(2k-1)(2k-1))) * (2k-1 choose k) - δₖ₀
  )
}