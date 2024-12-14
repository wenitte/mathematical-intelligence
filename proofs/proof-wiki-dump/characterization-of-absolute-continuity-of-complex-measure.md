theorem AbsoluteContinuityCharacterization() {
  let(X, Σ: MeasurableSpace) ∧
  let(μ: Measure(X, Σ)) ∧
  let(ν: ComplexMeasure(X, Σ)) →
  assert(
    ν.isAbsolutelyContinuous(μ) ↔ 
    ∀A ∈ Σ: (μ(A) = 0 → ν(A) = 0)
  )
} ↔

proof AbsoluteContinuityCharacterization() {
  let((ν₁, ν₂, ν₃, ν₄): JordanDecomposition(ν)) ∧
  let(|ν|: Variation(ν)) →
  
  // Sufficient condition
  block SufficientCondition() {
    assume(∀A ∈ Σ: (μ(A) = 0 → ν(A) = 0)) →
    assert(∀A ∈ Σ: (μ(A) = 0 → |ν|(A) = 0)) →
    
    setVar(A: Σ) ∧
    assume(μ(A) = 0) →
    
    lemma NullSetsClosed() {
      assert(∀B ⊆ A: (B ∈ Σ → μ(B) = 0))
    } →
    
    apply(NullSetsClosed()) →
    assert(∀B ⊆ A: (B ∈ Σ → ν(B) = 0)) →
    
    apply(CharacterizationNullSetsVariation()) →
    assert(|ν|(A) = 0) →
    
    assert(|ν|.isAbsolutelyContinuous(μ)) →
    assert(ν.isAbsolutelyContinuous(μ))
  }

  // Necessary condition
  block NecessaryCondition() {
    assume(ν.isAbsolutelyContinuous(μ)) →
    
    apply(AbsoluteContinuityJordanDecomposition()) →
    assert(∀i ∈ {1,2,3,4}: νᵢ.isAbsolutelyContinuous(μ)) →
    
    assert(∀A ∈ Σ: (μ(A) = 0 → 
      ν₁(A) = ν₂(A) = ν₃(A) = ν₄(A) = 0)) →
    
    assert(∀A ∈ Σ: (μ(A) = 0 → 
      ν(A) = ν₁(A) - ν₂(A) + i(ν₃(A) - ν₄(A)) = 0))
  }
}