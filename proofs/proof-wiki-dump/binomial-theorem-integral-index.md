theorem Binomial_Theorem() {
  assert(
    ∀X ∈ {ℕ,ℤ,ℚ,ℝ,ℂ} ∧ ∀x,y ∈ X ∧ ∀n ∈ ℤ≥0 ⇒
    (x + y)ⁿ = ∑ₖ₌₀ⁿ (ⁿₖ)xⁿ⁻ᵏyᵏ
  )
} ↔

proof Binomial_Theorem() {
  setMethod(InductionProof) →
  
  lemma Base_Case() {
    assert(n = 0) →
    assert((x + y)⁰ = 1) →
    assert(1 = (⁰₀)x⁰⁻⁰y⁰) →
    assert(1 = ∑ₖ₌₀⁰ (⁰ₖ)x⁰⁻ᵏyᵏ)
  } →

  lemma Inductive_Hypothesis() {
    assert(
      ∀k ≤ n: (x + y)ⁿ = ∑ₖ₌₀ⁿ (ⁿₖ)xⁿ⁻ᵏyᵏ
    )
  } →

  lemma Inductive_Step() {
    assert((x + y)ⁿ⁺¹ = (x + y)(x + y)ⁿ) →
    apply(Inductive_Hypothesis) →
    assert((x + y)ⁿ⁺¹ = x∑ₖ₌₀ⁿ (ⁿₖ)xⁿ⁻ᵏyᵏ + y∑ₖ₌₀ⁿ (ⁿₖ)xⁿ⁻ᵏyᵏ) →
    assert(= ∑ₖ₌₀ⁿ (ⁿₖ)xⁿ⁺¹⁻ᵏyᵏ + ∑ₖ₌₀ⁿ (ⁿₖ)xⁿ⁻ᵏyᵏ⁺¹) →
    assert(= (ⁿ₀)xⁿ⁺¹ + ∑ₖ₌₁ⁿ (ⁿₖ)xⁿ⁺¹⁻ᵏyᵏ + (ⁿₙ)yⁿ⁺¹ + ∑ₖ₌₀ⁿ⁻¹ (ⁿₖ)xⁿ⁻ᵏyᵏ⁺¹) →
    lemma Pascals_Rule() {
      assert(∀n,k: (ⁿ⁺¹ₖ) = (ⁿₖ) + (ⁿₖ₋₁))
    } →
    apply(Pascals_Rule) →
    assert(= ∑ₖ₌₀ⁿ⁺¹ (ⁿ⁺¹ₖ)xⁿ⁺¹⁻ᵏyᵏ)
  } →

  apply(MathematicalInduction) →
  assert(proved)
}