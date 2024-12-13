theorem Product_Of_Coprime_Factors_Divides() {
  assert(
    ∀S = {a₁, a₂, ..., aᵣ} ⊆ ℤ ∧
    isPairwiseCoprime(S) ∧
    ∀j ∈ {1,2,...,r}: aⱼ|b →
    ∏ⱼ₌₁ʳ aⱼ|b
  )
} ↔

proof Product_Of_Coprime_Factors_Divides() {
  setVar(r: ℕ_{>1}) →
  define(P(r): ∏ⱼ₌₁ʳ aⱼ|b) →
  
  // Base case P(2)
  lemma Base_Case() {
    assert(b = a₁q₁ ∧ b = a₂q₂ where q₁,q₂ ∈ ℤ) →
    apply(Integer_Combination_Coprime()) →
    assert(∃x,y ∈ ℤ: a₁x + a₂y = 1) →
    assert(b = a₂q₂·a₁x + a₁q₁·a₂y) →
    assert(b = a₁a₂(q₂x + q₁y)) →
    assert(a₁a₂|b)
  } →

  // Inductive step
  lemma Inductive_Step() {
    setVar(k: ℕ_{≥2}) →
    assume(P(k): ∏ⱼ₌₁ᵏ aⱼ|b) →
    assert(aₖ₊₁|b) →
    apply(Integer_Coprime_To_Factors()) →
    assert(aₖ₊₁ ⊥ ∏ⱼ₌₁ᵏ aⱼ) →
    apply(Base_Case()) →
    assert(∏ⱼ₌₁ᵏ⁺¹ aⱼ|b) →
    conclude(P(k) → P(k+1))
  } →

  apply(Mathematical_Induction(Base_Case(), Inductive_Step())) →
  assert(∀r ∈ ℕ_{>1}: P(r))
}