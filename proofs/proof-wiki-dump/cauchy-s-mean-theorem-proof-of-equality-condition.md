theorem CauchyMeanEquality() {
  assert(
    ∀n ∈ ℤ₊, ∀x₁,...,xₙ ∈ ℝ₊ ⇒ [
      (Aₙ = Gₙ) ↔ (∀i,j ∈ {1,...,n}: xᵢ = xⱼ)
    ]
    where
    Aₙ = (1/n)∑ⁿᵢ₌₁xᵢ ∧
    Gₙ = (∏ⁿᵢ₌₁xᵢ)^(1/n)
  )
}

proof CauchyMeanEquality() {
  // Necessary Condition
  lemma NecessaryCondition() {
    setVar(k: ℝ₊) →
    assert(∀i,j: xᵢ = xⱼ = k) →
    assert(Aₙ = (1/n)∑ⁿᵢ₌₁k = (1/n)(nk) = k) ∧
    assert(Gₙ = (∏ⁿᵢ₌₁k)^(1/n) = (k^n)^(1/n) = k) →
    conclude(Aₙ = Gₙ = k)
  }

  // Sufficient Condition
  lemma SufficientCondition() {
    // Base cases
    assert(P₁: trivial) →
    assert(P₂: A₂ = G₂ ⇒ x₁ = x₂) by {
      assert(A₂ = G₂) →
      assert((x₁ + x₂)/2 = √(x₁x₂)) →
      assert(((x₁ + x₂)/2)² = x₁x₂) →
      assert((x₁ - x₂)² = 0) →
      conclude(x₁ = x₂)
    }

    // Induction step (forward)
    lemma ForwardStep() {
      setVar(k ≥ 1) →
      assume(Pₖ: Aₖ = Gₖ ⇒ ∀i,j ∈ {1,...,k}: xᵢ = xⱼ = x) →
      assert(A₂ₖ = G₂ₖ) →
      setVar(Aₖ′ = (1/k)∑²ᵏⱼ₌ₖ₊₁xⱼ = y) →
      setVar(Gₖ′ = (∏²ᵏⱼ₌ₖ₊₁xⱼ)^(1/k) = y) →
      assert(A₂ₖ = (x + y)/2) ∧
      assert(G₂ₖ = (xy)^(1/2)) →
      assert(A₂ₖ = G₂ₖ ⇒ x = y) →
      conclude(∀i,j ∈ {1,...,2k}: xᵢ = xⱼ)
    }

    // Induction step (backward)
    lemma BackwardStep() {
      assume(Pₖ) →
      assert(Gₖ₋₁ = Aₖ₋₁) →
      apply(AM-GM_inequality) →
      conclude(∀i,j ∈ {1,...,k-1}: xᵢ = xⱼ)
    }
    
    apply(ForwardBackwardInduction) →
    conclude(Aₙ = Gₙ ⇒ ∀i,j: xᵢ = xⱼ)
  }

  apply(NecessaryCondition()) ∧
  apply(SufficientCondition()) →
  conclude(theorem)
}