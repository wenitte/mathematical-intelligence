theorem Complex_Function_Bounded_On_Circle() {
  assert(
    ∀f: ℂ → ℂ,
    ∀z₀ ∈ ℂ,
    ∀r ∈ ℝ₊,
    let Γ = {z ∈ ℂ : |z - z₀| = r},
    isAnalytic(f, Γ)
    ⇒
    isBounded(f, Γ)
  )
}

proof Complex_Function_Bounded_On_Circle() {
  setDef(fᵣ(z) = Re(f(z))) →
  setDef(fᵢ(z) = Im(f(z))) →
  
  assert(∃[a,b] ⊂ ℝ, a < b) →
  setDef(p: [a,b] → ℂ, continuous(p)) →
  assert(Γ = {p(u): u ∈ [a,b]}) →
  
  lemma Analytic_Implies_Continuous() {
    assert(isAnalytic(f, Γ) ⇒ isContinuous(f, Γ))
  } →
  apply(Analytic_Implies_Continuous()) →
  
  lemma Projection_Continuity() {
    assert(
      isContinuous(f, Γ) ⇒
      isContinuous(fᵣ, Γ) ∧ isContinuous(fᵢ, Γ)
    )
  } →
  apply(Projection_Continuity()) →
  
  assert(
    isContinuous(fᵣ ∘ p, [a,b]) ∧
    isContinuous(fᵢ ∘ p, [a,b])
  ) →
  
  lemma Continuous_Real_Bounded() {
    assert(
      ∀g: [a,b] → ℝ,
      isContinuous(g) ⇒ isBounded(g)
    )
  } →
  apply(Continuous_Real_Bounded()) →
  
  assert(
    isBounded(fᵣ ∘ p, [a,b]) ∧
    isBounded(fᵢ ∘ p, [a,b])
  ) →
  
  assert(f(p(u)) = fᵣ(p(u)) + i·fᵢ(p(u))) →
  assert(isBounded(f ∘ p, [a,b])) →
  assert(isBounded(f, Γ))
}