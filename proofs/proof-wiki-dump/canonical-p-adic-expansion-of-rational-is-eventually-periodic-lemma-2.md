theorem PAdicExpansionBound() {
  let(p: Prime)
  let(a: ℤ, b: ℤ₊)
  assert(
    ∀n ∈ ℕ ∃rₙ ∈ ℤ: ((a/b) - (pⁿ⁺¹rₙ/b)) ∈ {0,1,...,pⁿ⁺¹-1}
    ⇒
    ∃n₀ ∈ ℕ ∀n ≥ n₀: -b ≤ rₙ ≤ 0
  )
} ↔

proof PAdicExpansionBound() {
  lemma Bound_rn() {
    assert(
      ∀n ∈ ℕ: (a - (pⁿ⁺¹-1)b)/pⁿ⁺¹ ≤ rₙ ≤ a/pⁿ⁺¹
    )
  } →
  
  lemma Limit_Upper() {
    assert(
      lim[n→∞](a/pⁿ⁺¹) = 0
    )
  } →
  
  lemma Limit_Lower() {
    assert(
      lim[n→∞]((a - (pⁿ⁺¹-1)b)/pⁿ⁺¹) = -b
    )
  } →
  
  apply(Limit_Upper()) →
  assert(∃n₁ ∈ ℕ ∀n ≥ n₁: -1/2 < a/pⁿ⁺¹ < 1/2) →
  
  apply(Limit_Lower()) →
  assert(∃n₂ ∈ ℕ ∀n ≥ n₂: -b-1/2 < (a - (pⁿ⁺¹-1)b)/pⁿ⁺¹ < -b+1/2) →
  
  setVar(n₀ = max{n₁,n₂}) →
  
  apply(Bound_rn()) →
  assert(
    ∀n ≥ n₀: -b-1/2 < (a - (pⁿ⁺¹-1)b)/pⁿ⁺¹ ≤ rₙ ≤ a/pⁿ⁺¹ < 1/2
  ) →
  
  given(b ∈ ℤ ∧ ∀n ∈ ℕ: rₙ ∈ ℤ) →
  conclude(∀n ≥ n₀: -b ≤ rₙ ≤ 0)
}