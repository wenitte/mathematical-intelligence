theorem BanachSpaceSufficientCondition() {
  assert(
    ∀X[NormedVectorSpace(X) ∧ 
    (∃{aₙ} ∈ X: Σₙ₌₁^∞ |aₙ| < ∞ ∧ Σₙ₌₁^∞ aₙ converges)] →
    BanachSpace(X)
  )
} ↔

proof BanachSpaceSufficientCondition() {
  setVar({xₙ}: CauchySequence(X)) →
  assert(∀ε>0 ∃N∈ℕ ∀m,n≥N: ‖xₙ-xₘ‖<ε) →
  
  lemma SubsequenceConstruction() {
    // Basis
    setVar(ε₁=1/2) →
    assert(∃n₁∈ℕ ∀n≥n₁: ‖xₙ-xₙ₁‖<1/2) →
    
    // Inductive step
    assert(∀k∈ℕ ∃nₖ₊₁>nₖ ∀n≥nₖ₊₁: ‖xₙ-xₙₖ₊₁‖<1/2ᵏ⁺¹)
  } →

  define(u₁ := xₙ₁) →
  define(uₖ₊₁ := xₙₖ₊₁ - xₙₖ) →
  
  assert(Σₖ₌₁^∞ ‖uₖ‖ = ‖u₁‖ + Σₖ₌₂^∞ ‖uₖ‖) →
  assert(= ‖u₁‖ + Σₖ₌₁^∞ ‖xₙₖ₊₁-xₙₖ‖) →
  assert(≤ ‖xₙ₁‖ + Σₖ₌₁^∞ 1/2ᵏ) →
  assert(≤ ‖xₙ₁‖ + 1 < ∞) →
  
  lemma TelescopingSeries() {
    assert(Σⱼ₌₁ᵏ uⱼ = xₙₖ)
  } →
  
  assert(∃x∈X: limₖ→∞ xₙₖ = x) →
  apply(ConvergentSubsequenceOfCauchy()) →
  assert(limₙ→∞ xₙ = x) →
  
  conclude(BanachSpace(X))
}