theorem Binomial_Theorem_Ring() {
  assert(
    ∀R[ringoid] (
      isCommutativeSemigroup(R.⊙) ∧
      ∀n∈ℤ (n ≥ 2) →
      ∀x,y∈R (
        ⊙ⁿ(x + y) = ⊙ⁿx + ∑ₖ₌₁ⁿ⁻¹ (ₖⁿ)(⊙ⁿ⁻ᵏx ⊙ ⊙ᵏy) + ⊙ⁿy
      )
    )
  )
} ↔

proof Binomial_Theorem_Ring() {
  setVar(R: ringoid, x,y: R, n: ℤ) →
  
  lemma Base_Cases() {
    assert(n = 0 → ⊙⁰(x + y) = e = (₀⁰)(⊙⁰x ⊙ ⊙⁰y)) →
    assert(n = 1 → ⊙¹(x + y) = x + y = ∑ₖ₌₀¹ (ₖ¹)(⊙¹⁻ᵏx ⊙ ⊙ᵏy)) →
    assert(n = 2 → ⊙²(x + y) = ⊙²x + 2(⊙¹x ⊙ ⊙¹y) + ⊙²y)
  } →

  lemma Inductive_Step() {
    setHypothesis(
      ∀k<n: ⊙ᵏ(x + y) = ⊙ᵏx + ∑ᵢ₌₁ᵏ⁻¹ (ᵢᵏ)(⊙ᵏ⁻ⁱx ⊙ ⊙ⁱy) + ⊙ᵏy
    ) →
    assert(
      ⊙ⁿ⁺¹(x + y) = 
      (x + y) ⊙ (⊙ⁿ(x + y)) →
      expand() →
      applyPascalRule() →
      ⊙ⁿ⁺¹x + ∑ₖ₌₁ⁿ (ₖⁿ⁺¹)(⊙ⁿ⁺¹⁻ᵏx ⊙ ⊙ᵏy) + ⊙ⁿ⁺¹y
    )
  } →

  apply(Base_Cases()) →
  apply(Inductive_Step()) →
  applyInductionPrinciple() →
  assert(theorem)
}