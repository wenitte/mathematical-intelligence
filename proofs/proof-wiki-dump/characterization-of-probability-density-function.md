theorem ProbabilityDensityCharacterization() {
  assert(
    ∀(Ω,Σ,Pr: ProbabilitySpace) ∧
    ∀(X: Ω → ℝ)[ContinuousRandomVariable(X)] ∧
    let(ΩX = Img(X)) ∧
    let(fX: ℝ → [0,1]) ∧
    let(FX: ℝ → ℝ)[ContinuouslyDifferentiable(FX)] ∧
    ∀x ∈ ℝ[
      fX(x) = {
        lim[ε→0⁺](Pr(x-ε/2 ≤ X ≤ x+ε/2)/ε) if x ∈ ΩX
        0 if x ∉ ΩX
      }
    ] →
    ∀x ∈ ℝ[d/dx(FX(x)) = fX(x)]
  )
}

proof ProbabilityDensityCharacterization() {
  setVar(x: ℝ) →
  assert(
    Pr(x-ε/2 ≤ X ≤ x+ε/2) = 
    FX(x+ε/2) - FX(x-ε/2) + Pr(X = x-ε/2)
  ) →
  
  lemma ContinuousRandomVariableSinglePoint() {
    assert(
      ∀y ∈ ℝ[Pr(X = y) = 0]
    )
  } →
  
  apply(ContinuousRandomVariableSinglePoint()) →
  assert(
    Pr(x-ε/2 ≤ X ≤ x+ε/2) = 
    FX(x+ε/2) - FX(x-ε/2)
  ) →
  
  assert(
    fX(x) = lim[ε→0⁺]((FX(x+ε/2) - FX(x-ε/2))/ε)
  ) →
  
  lemma ContinuousDerivativeLimit() {
    assert(
      lim[ε→0⁺]((FX(x+ε/2) - FX(x-ε/2))/ε) = 
      d/dx(FX(x))
    )
  } →
  
  apply(ContinuousDerivativeLimit()) →
  assert(fX(x) = d/dx(FX(x)))
}