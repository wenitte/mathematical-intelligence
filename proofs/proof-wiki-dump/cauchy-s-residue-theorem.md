theorem CauchyResidueTheorem() {
  let U: OpenSet(ℂ) →
  assert(simplyConnected(U)) ∧
  let {a₁, ..., aₙ}: FinitePoints(U) →
  let f: Function(U → ℂ) →
  assert(analytic(f, U\{a₁, ..., aₙ})) ∧
  let L: Contour(ℂ) →
  assert(orientation(L) = anticlockwise) →
  assert(
    ∮_L f(z)dz = 2πi∑ₖ₌₁ⁿ Res(f,aₖ)
  )
}

proof CauchyResidueTheorem() {
  let {U₁, ..., Uₙ}: OpenSets(U) →
  assert(∀i,j: (i≠j → Uᵢ∩Uⱼ=∅) ∧ (aᵢ∈Uᵢ) ∧ (aᵢ∉Uⱼ)) →
  
  lemma LaurentExpansion() {
    assert(∀k: f(z) = ∑ⱼ₌₋∞^∞ cⱼ(z-aₖ)ʲ in Uₖ)
  } →
  
  let X = ∪ᵢ₌₁ⁿ Uᵢ →
  
  assert(∮_L f(z)dz = ∮_∂(U\X) f(z)dz + ∑ₖ₌₁ⁿ ∮_∂Uₖ f(z)dz) →
  
  lemma CauchyGoursat() {
    assert(holomorphic(f, U\X) → ∮_∂(U\X) f(z)dz = 0)
  } →
  
  assert(∮_L f(z)dz = ∑ₖ₌₁ⁿ ∮_∂Uₖ f(z)dz) →
  
  let IntegralExpansion = ∀k: ∮_∂Uₖ f(z)dz = 
    ∮_∂Uₖ (∑ⱼ₌₋∞^-² cⱼ(z-aₖ)ʲ + c₋₁/(z-aₖ) + ∑ⱼ₌₀^∞ cⱼ(z-aₖ)ʲ)dz →
    
  lemma ContourIntegralPower() {
    assert(∀j≥0 ∨ j<-1: ∮_∂Uₖ cⱼ(z-aₖ)ʲdz = 0)
  } →
  
  assert(∀k: ∮_∂Uₖ f(z)dz = ∮_∂Uₖ (c₋₁/(z-aₖ))dz = 2πic₋₁ = 2πiRes(f,aₖ)) →
  
  conclude(∮_L f(z)dz = 2πi∑ₖ₌₁ⁿ Res(f,aₖ))
}