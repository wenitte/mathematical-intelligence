theorem Binomial_Coefficient_With_Self() {
  assert(
    ∀n ∈ ℤ ⇒ (ⁿCn = [n ≥ 0])
  )
} ↔

proof Binomial_Coefficient_With_Self() {
  setVar(n: ℤ) →
  
  lemma Positive_Case() {
    assert(n ≥ 0) →
    assert(ⁿCn = n!/(n!(n-n)!)) →
    assert(ⁿCn = n!/(n!·0!)) →
    assert(0! = 1) →
    assert(ⁿCn = 1)
  } →

  lemma Negative_Case() {
    assert(n < 0) →
    apply(N_Choose_Negative_Number_Is_Zero) →
    assert(∀k ∈ ℤ_{<0}: ⁿCk = 0) →
    assert(n = k) →
    assert(ⁿCn = 0)
  } →

  assert(
    (n ≥ 0 → ⁿCn = 1) ∧
    (n < 0 → ⁿCn = 0)
  ) →
  
  assert(ⁿCn = [n ≥ 0])
}