theorem Bounds_Finite_Product() {
  assert(
    ∀n ∈ ℕ₊, ∀(a₁,...,aₙ) ∈ ℝ₊ⁿ ⇒
    (∑ₖ₌₁ⁿ aₖ ≤ ∏ₖ₌₁ⁿ(1 + aₖ) ≤ exp(∑ₖ₌₁ⁿ aₖ))
  )
} ↔

proof Lower_Bound() {
  setVar(n: ℕ₊) →
  setVar((a₁,...,aₙ): ℝ₊ⁿ) →
  expand(∏ₖ₌₁ⁿ(1 + aₖ)) →
  assert(∏ₖ₌₁ⁿ(1 + aₖ) = 1 + ∑ₖ₌₁ⁿ aₖ + [positive_terms]) →
  assert(1 + ∑ₖ₌₁ⁿ aₖ + [positive_terms] ≥ ∑ₖ₌₁ⁿ aₖ)
}

proof Upper_Bound_1() {
  setVar(n: ℕ₊) →
  setVar((a₁,...,aₙ): ℝ₊ⁿ) →
  lemma Exp_Greater_Than_Linear() {
    assert(∀x ∈ ℝ₊ ⇒ exp(x) ≥ 1 + x)
  } →
  apply(Exp_Greater_Than_Linear()) →
  assert(∀k ∈ [1,n] ⇒ 1 + aₖ ≤ exp(aₖ)) →
  assert(∏ₖ₌₁ⁿ(1 + aₖ) ≤ ∏ₖ₌₁ⁿ exp(aₖ)) →
  assert(∏ₖ₌₁ⁿ exp(aₖ) = exp(∑ₖ₌₁ⁿ aₖ))
}

proof Upper_Bound_2() {
  setVar(n: ℕ₊) →
  setVar((a₁,...,aₙ): ℝ₊ⁿ) →
  lemma AM_GM_Inequality() {
    assert(∏ₖ₌₁ⁿ(1 + aₖ) ≤ ((n + ∑ₖ₌₁ⁿ aₖ)/n)ⁿ)
  } →
  apply(AM_GM_Inequality())
}