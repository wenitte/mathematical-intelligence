theorem CompositionNotCommutative() {
  assert(
    ∃f₁,f₂: Mapping ⇒ (f₂ ∘ f₁ ≠ f₁ ∘ f₂)
  )
} ↔

proof CompositionNotCommutative() {
  setVar(f₁: S₁ → S₂) ∧
  setVar(f₂: S₂ → S₃) →
  
  lemma DomainCondition() {
    assert(S₁ ≠ S₃ ⇒ ¬defined(f₂ ∘ f₁))
  } →

  assumeCase1(S₁ = S₃) {
    setVar(f₁: S₁ → S₂) ∧
    setVar(f₂: S₂ → S₁) →
    assert(S₁ ≠ S₂ ⇒ 
      (dom(f₂ ∘ f₁) = S₁ ∧ dom(f₁ ∘ f₂) = S₂) ⇒
      f₂ ∘ f₁ ≠ f₁ ∘ f₂
    )
  } →

  assumeCase2(S₁ = S₂) {
    define(S₁ = S₂ = {a, b}) ∧
    define(f₁ = {(a,a), (b,a)}) ∧
    define(f₂ = {(a,b), (b,b)}) →
    assert(f₁ ∘ f₂ = {(a,b), (b,b)}) ∧
    assert(f₂ ∘ f₁ = {(a,a), (b,a)}) →
    conclude(f₂ ∘ f₁ ≠ f₁ ∘ f₂)
  } →

  byCounterExample(Case2) →
  conclude(∃f₁,f₂: Mapping ⇒ f₂ ∘ f₁ ≠ f₁ ∘ f₂)
}

lemma Example1() {
  setVar(f: ℝ → ℝ, x ↦ x² + 1) ∧
  setVar(g: ℝ → ℝ, x ↦ x + 1) →
  assert((f ∘ g)(x) = (x + 1)² + 1 = x² + 2x + 2) ∧
  assert((g ∘ f)(x) = x² + 1 + 1 = x² + 2) →
  conclude(g ∘ f ≠ f ∘ g)
}