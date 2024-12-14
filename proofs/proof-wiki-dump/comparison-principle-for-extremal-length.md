theorem ComparisonPrincipleExtremalLength() {
  assume(
    X: RiemannSurface ∧
    Γ₁, Γ₂: FamilyOfRectifiableCurves(X) ∧
    ∀γ₁∈Γ₁ ∃γ₂∈Γ₂: Contains(γ₁,γ₂)
  ) →
  assert(
    λ(Γ₁) ≥ λ(Γ₂) ∧
    ∀ρ: ConformalMetric(X): L(Γ₁,ρ) ≥ L(Γ₂,ρ)
  )
}

proof ComparisonPrincipleExtremalLength() {
  setVar(ρ: ConformalMetric(X)) →
  
  assert(
    L(Γ₁,ρ) = inf{L(γ,ρ) | γ∈Γ₁}
  ) by def_ExtremalLength →
  
  assert(
    inf{L(γ,ρ) | γ∈Γ₁} ≥ inf{L(γ,ρ) | γ∈Γ₂}
  ) because {
    ∀γ₁∈Γ₁ ∃γ₂∈Γ₂: Contains(γ₁,γ₂) →
    ∀γ₁∈Γ₁: L(γ₁,ρ) ≥ inf{L(γ,ρ) | γ∈Γ₂}
  } →
  
  assert(
    inf{L(γ,ρ) | γ∈Γ₂} = L(Γ₂,ρ)
  ) by def_ExtremalLength →
  
  conclude(
    L(Γ₁,ρ) ≥ L(Γ₂,ρ)
  ) →
  
  conclude(
    λ(Γ₁) ≥ λ(Γ₂)
  ) by def_ExtremalLength
}