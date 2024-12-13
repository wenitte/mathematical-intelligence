theorem Beta_Function_Integral() {
  assert(
    ∀x,y ∈ ℝ⁺ → β(x,y) = ∫₀^∞ (t^(x-1))/((1+t)^(x+y)) dt
  )
} ↔

proof Beta_Function_Integral() {
  setVar(s: ℝ) →
  assert(s = t/(1+t)) →
  
  lemma Substitution_Relations() {
    assert(
      1/(1+t) = 1-s ∧
      lim(t→0) → s=0 ∧
      lim(t→∞) → s=1 ∧
      ds = 1/(1+t)² dt
    )
  } →

  apply(Integration_By_Substitution()) →
  assert(
    ∫₀^∞ (t^(x-1))/((1+t)^(x+y)) dt =
    ∫₀^∞ (t/(1+t))^(x-1) * (1/(1+t))^(y-1) * (1/(1+t)²) dt
  ) →

  apply(Substitution_Relations()) →
  assert(
    ∫₀^∞ (t/(1+t))^(x-1) * (1/(1+t))^(y-1) * (1/(1+t)²) dt =
    ∫₀¹ s^(x-1) * (1-s)^(y-1) ds
  ) →

  apply(Beta_Function_Definition()) →
  assert(
    ∫₀¹ s^(x-1) * (1-s)^(y-1) ds = β(x,y)
  )
}