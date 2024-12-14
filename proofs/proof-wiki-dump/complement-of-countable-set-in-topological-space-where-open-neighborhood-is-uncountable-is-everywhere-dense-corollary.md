theorem Countable_Complement_Dense() {
  assert(
    ∀A ⊆ ℝ : (A is countable) ⇒ (ℝ\A is everywhere dense in ℝ)
  )
} ↔

proof Countable_Complement_Dense() {
  setVar(A: set, A ⊆ ℝ) →
  assume(A is countable) →
  
  lemma OpenSet_Contains_Interval() {
    setVar(U: set, U ⊆ ℝ) →
    assume(U is open) →
    assert(∃a,b ∈ ℝ : (a < b) ∧ (]a,b[ ⊆ U))
  } →
  
  lemma Closed_Interval_Uncountable() {
    setVar(x,y ∈ ℝ) →
    assume(x < y) →
    assert([x,y] is uncountable)
  } →
  
  setVar(U: set, U ⊆ ℝ) →
  assume(U is open) →
  apply(OpenSet_Contains_Interval()) →
  setVar(a,b ∈ ℝ : (a < b) ∧ (]a,b[ ⊆ U)) →
  setVar(ε > 0 : a - ε < b + ε) →
  assert([a + ε, b - ε] ⊆ ]a,b[ ⊆ U) →
  apply(Closed_Interval_Uncountable()) →
  assert([a + ε, b - ε] is uncountable) →
  assert(U is uncountable) →
  conclude(∀U ⊆ ℝ : U is open ⇒ U is uncountable) →
  
  apply(Theorem_Countable_Complement_Dense_General()) →
  assert(ℝ\A is everywhere dense in ℝ)
}