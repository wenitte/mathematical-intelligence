theorem BanachSpaceAbsoluteConvergence() {
  assert(
    ∀X[NormedVectorSpace] ⇒ (
      IsBanachSpace(X) ↔ 
      ∀{aₙ}[Series](IsAbsolutelyConvergent({aₙ}) → IsConvergent({aₙ}))
    )
  )
}

proof BanachSpaceAbsoluteConvergence() {
  # Necessary Condition
  block NecessaryCondition() {
    assume(IsBanachSpace(X)) →
    letSeries({aₙ}: AbsolutelyConvergent) →
    assert(∑ₙ₌₁^∞ ‖aₙ‖ converges in ℝ) →
    apply(CauchySequenceTheorem) →
    assert(IsPartialSumsCauchy({aₙ})) →
    
    ∀ε>0 ∃N∈ℕ ∀m,n≥N: (
      ∑ₖ₌ₙ₊₁ᵐ ‖aₖ‖ < ε
    ) →
    
    assert(
      ‖∑ₖ₌ₙ₊₁ᵐ aₖ‖ ≤ ∑ₖ₌ₙ₊₁ᵐ ‖aₖ‖ < ε
    ) by TriangleInequality →
    
    apply(BanachSpaceComplete) →
    conclude(IsConvergent({aₙ}))
  }

  # Sufficient Condition
  block SufficientCondition() {
    letSequence({xₙ}: Cauchy) →
    
    # Subsequence Construction
    block ConstructSubsequence() {
      # Base Case
      let(ε = 1/2) →
      ∃n₁: ∀n≥n₁(‖xₙ - xₙ₁‖ < 1/2) →
      
      # Inductive Step
      ∀k∈ℕ ∃nₖ₊₁>nₖ: (
        ∀n≥nₖ₊₁(‖xₙ - xₙₖ₊₁‖ < 1/2ᵏ⁺¹)
      )
    }

    # Series Construction
    define(u₁ := xₙ₁) →
    define(uₖ₊₁ := xₙₖ₊₁ - xₙₖ) →
    
    assert(
      ∑ₖ₌₁^∞ ‖uₖ‖ ≤ ‖xₙ₁‖ + ∑ₖ₌₁^∞ 1/2ᵏ < ∞
    ) →
    
    apply(SeriesConvergenceHypothesis) →
    assert(∃u: limₖ→∞ ∑ⱼ₌₁ᵏ uⱼ = u) →
    
    assert(∑ⱼ₌₁ᵏ uⱼ = xₙₖ) by TelescopingSeries →
    assert(limₖ→∞ xₙₖ = u) →
    
    apply(CauchyConvergentSubsequence) →
    conclude(IsBanachSpace(X))
  }
}