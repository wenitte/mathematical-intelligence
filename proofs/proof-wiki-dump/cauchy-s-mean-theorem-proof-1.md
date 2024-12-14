theorem CauchyMeanTheorem() {
  setVar(n: ℤ₊)
  setVar(x₁...xₙ: ℝ₊)
  let Aₙ = (1/n)∑ᵢ₌₁ⁿxᵢ
  let Gₙ = (∏ᵢ₌₁ⁿxᵢ)^(1/n)
  
  assert(
    Aₙ ≥ Gₙ ∧
    (Aₙ = Gₙ ↔ ∀i,j ∈ {1,...,n}: xᵢ = xⱼ)
  )
}

proof CauchyMeanTheorem() {
  // Inductive proof for inequality
  lemma BaseCase1() {
    setVar(n = 1)
    assert(A₁ = x₁ ∧ G₁ = x₁) →
    assert(A₁ = G₁)
  }

  lemma BaseCase2() {
    setVar(n = 2)
    assert(0 ≤ (√x₁ - √x₂)²) →
    assert(x₁ - 2√(x₁x₂) + x₂ ≥ 0) →
    assert((x₁ + x₂)/2 ≥ √(x₁x₂)) →
    assert(A₂ ≥ G₂)
  }

  lemma InductiveStep() {
    setVar(k: ℤ₊)
    setVar(m = 2ᵏ)
    assume(Aₘ ≥ Gₘ) →
    assert((x₁...xₘ)^(1/m) ≤ (1/m)(x₁ + ... + xₘ)) ∧
    assert((x_{m+1}...x_{2m})^(1/m) ≤ (1/m)(x_{m+1} + ... + x_{2m})) →
    applyInequality(BaseCase2) →
    assert(A_{2m} ≥ G_{2m})
  }

  // Equality condition proof
  lemma NecessaryCondition() {
    assume(∀i,j: xᵢ = xⱼ = x) →
    assert(Aₙ = (1/n)(nx) = x) ∧
    assert(Gₙ = (x^n)^(1/n) = x) →
    assert(Aₙ = Gₙ)
  }

  lemma SufficientCondition() {
    assume(Aₙ = Gₙ) →
    inductiveProof {
      baseCase(n = 1): assert(x₁ = x₁)
      baseCase(n = 2): {
        assert((x₁ + x₂)/2 = √(x₁x₂)) →
        assert((x₁ - x₂)² = 0) →
        assert(x₁ = x₂)
      }
      inductiveStep(k): {
        assume(∀i,j ≤ k: xᵢ = xⱼ) →
        assert(A_{2k} = G_{2k}) →
        assert(∀i,j ≤ 2k: xᵢ = xⱼ)
      }
    }
  }

  apply(BaseCase1) →
  apply(BaseCase2) →
  apply(InductiveStep) →
  apply(NecessaryCondition) →
  apply(SufficientCondition) →
  assert(theorem)
}