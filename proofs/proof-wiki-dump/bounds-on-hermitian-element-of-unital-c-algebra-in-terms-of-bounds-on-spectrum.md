theorem Bounds_Hermitian_CAlgebra() {
  let(A: CStarAlgebra, unital) ∧
  let(≤_A: CanonicalPreordering(A)) ∧
  let(a ∈ A, hermitian) →
  assert(
    σ_A(a) ⊆ [α,β] ↔ (α𝟙_A ≤_A a ≤_A β𝟙_A)
  ) ∧
  assert(
    -||a||𝟙_A ≤_A a ≤_A ||a||𝟙_A
  )
}

proof Bounds_Hermitian_CAlgebra() {
  block NecessaryCondition {
    assert(a: hermitian ∧ 𝟙_A: hermitian) →
    assert(∀λ∈ℝ → (a - λ𝟙_A): hermitian) →
    
    lemma SpectralMapping() {
      assert(σ_A(a - α𝟙_A) = {t - α: t ∈ σ_A(a)} ⊆ [α,β] - α)
    } →
    
    assert([α,β] - α = [0,β-α] ⊆ [0,∞)) →
    assert(a - α𝟙_A: positive) →
    assert(α𝟙_A ≤_A a) →
    
    lemma SpectralMapping2() {
      assert(σ_A(β𝟙_A - a) = {β - t: t ∈ σ_A(a)} ⊆ β - [α,β])
    } →
    
    assert(β - [α,β] = [0,β-α] ⊆ [0,∞)) →
    assert(β𝟙_A - a: positive) →
    assert(a ≤_A β𝟙_A) →
    conclude(α𝟙_A ≤_A a ≤_A β𝟙_A)
  }

  block SufficientCondition {
    assume(α𝟙_A ≤_A a ≤_A β𝟙_A) →
    assert(a - α𝟙_A ≥_A 0_A ∧ β𝟙_A - a ≥_A 0_A) →
    
    apply(SpectralMapping()) →
    assert(σ_A(a) ⊆ (α,∞)) →
    
    apply(SpectralMapping2()) →
    assert(σ_A(a) ⊆ (-∞,β)) →
    conclude(σ_A(a) ⊆ [α,β])
  }

  block ParticularBound {
    lemma SpectrumBound() {
      assert(∀λ∈σ_A(a) → |λ| ≤ ||a||)
    } →
    
    assert(σ_A(a) ⊆ ℝ) →
    assert(∀λ∈σ_A(a) → -||a|| ≤ λ ≤ ||a||) →
    setVar(α := -||a||, β := ||a||) →
    conclude(-||a||𝟙_A ≤_A a ≤_A ||a||𝟙_A)
  }
}