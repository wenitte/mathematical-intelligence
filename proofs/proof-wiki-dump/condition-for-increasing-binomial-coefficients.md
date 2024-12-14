theorem Increasing_Binomial_Coefficients() {
  assert(
    ∀n ∈ ℤ_{>0}, ∀k ∈ ℕ ⇒ [
      (ⁿCₖ < ⁿCₖ₊₁) ↔ (0 ≤ k < (n-1)/2)
    ]
  )
}

proof Increasing_Binomial_Coefficients() {
  // Direct proof part
  branch DirectProof() {
    setVar(n: ℤ_{>0}, k: ℕ) →
    assert(ⁿCₖ < ⁿCₖ₊₁) →
    assert(n!/(((n-k)!)×(k!)) < n!/(((n-k-1)!)×((k+1)!))) →
    apply(Multiply_Both_Sides((n-k)!×(k+1)!/n!)) →
    assert(k+1 < n-k) →
    assert(2k < n-1) →
    assert(k < (n-1)/2)
  }

  // Inductive proof part
  branch InductiveProof() {
    // Base cases
    lemma Base_Case_1() {
      setVar(n: 1) →
      assert(¹C₀ = 1) →
      assert(¹C₁ = 1) →
      assert(∄k: [0 ≤ k < 0 ∧ ¹Cₖ < ¹Cₖ₊₁])
    }

    lemma Base_Case_2() {
      setVar(n: 2) →
      assert(²C₀ = 1) →
      assert(²C₁ = 2) →
      assert(²C₂ = 1) →
      assert(∀k: [0 ≤ k < 1/2 ↔ k = 0]) →
      assert(²C₀ < ²C₁)
    }

    // Inductive step
    lemma Inductive_Step() {
      setVar(r: ℤ_{>0}) →
      assume(∀k: [ʳCₖ < ʳCₖ₊₁ ↔ 0 ≤ k < (r-1)/2]) →
      apply(Pascals_Rule()) →
      assert(ʳ⁺¹Cₖ = ʳCₖ + ʳCₖ₋₁) →
      assert(ʳ⁺¹Cₖ₊₁ = ʳCₖ₊₁ + ʳCₖ) →
      assert(∀k: [ʳ⁺¹Cₖ < ʳ⁺¹Cₖ₊₁ ↔ 0 ≤ k < r/2])
    }

    apply(Mathematical_Induction(Base_Case_1(), Base_Case_2(), Inductive_Step()))
  }

  conclude(
    ∀n ∈ ℤ_{>0}, ∀k ∈ ℕ: [ⁿCₖ < ⁿCₖ₊₁ ↔ 0 ≤ k < (n-1)/2]
  )
}