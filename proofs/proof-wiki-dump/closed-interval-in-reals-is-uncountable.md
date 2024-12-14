theorem Closed_Interval_Uncountable() {
  assert(
    ∀a,b ∈ ℝ̄ ∧ a < b →
    {x ∈ ℝ : a ≤ x ≤ b} is uncountable
  )
} ↔

proof Closed_Interval_Uncountable() {
  case Real_Numbers() {
    assume(a,b ∈ ℝ) →
    recall(Unit_Interval_Uncountable: [0,1] is uncountable) →
    define(f: [0,1] → [a,b], f(x) = a + (b-a)x) →
    
    lemma Function_Injective() {
      assert(f(x₁) = f(x₂)) →
      assert(a + (b-a)x₁ = a + (b-a)x₂) →
      assert(b-a > 0) →
      conclude(x₁ = x₂) →
      therefore(f is injective)
    } →
    
    proof_by_contradiction() {
      assume([a,b] is countable) →
      setVar(g: [a,b] → ℕ, g is injective) →
      assert(g ∘ f: [0,1] → ℕ is injective) →
      contradiction(Unit_Interval_Uncountable)
    }
  } →

  case Extended_Reals() {
    assume(a ∨ b ∈ ℝ̄\ℝ) →
    setVar(c,d ∈ ℝ: c < d ∧ [c,d] ⊆ [a,b]) →
    recall([c,d] is uncountable from case Real_Numbers) →
    define(S = {x ∈ ℝ : a ≤ x ≤ b}) →
    define(Iℝ: [c,d] → S as identity function) →
    
    proof_by_contradiction() {
      assume(S is countable) →
      setVar(g: S → ℕ, g is injective) →
      assert(g ∘ Iℝ: [c,d] → ℕ is injective) →
      contradiction([c,d] is uncountable)
    }
  }
}