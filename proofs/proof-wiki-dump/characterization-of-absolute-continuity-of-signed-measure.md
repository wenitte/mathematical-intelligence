theorem AbsoluteContinuityCharacterization() {
  let(X,Σ: MeasurableSpace) ∧
  let(μ: Measure(X,Σ)) ∧
  let(ν: SignedMeasure(X,Σ)) →
  assert(
    ν.isAbsolutelyContinuous(μ) ↔ 
    ∀A ∈ Σ: [μ(A) = 0 → ν(A) = 0]
  )
}

proof AbsoluteContinuityCharacterization() {
  let(ν⁺,ν⁻: JordanDecomposition(ν)) ∧
  let(|ν|: Variation(ν)) →
  
  // Sufficient condition
  block SufficientCondition() {
    assume(∀A ∈ Σ: [μ(A) = 0 → ν(A) = 0]) →
    assert(goal: ∀A ∈ Σ: [μ(A) = 0 → |ν|(A) = 0]) →
    
    setVar(A: Σ) →
    assume(μ(A) = 0) →
    
    lemma NullSetsClosed() {
      assert(∀B ⊆ A: [B ∈ Σ → μ(B) = 0])
    } →
    
    apply(NullSetsClosed()) →
    assert(∀B ⊆ A: [B ∈ Σ → ν(B) = 0]) →
    
    apply(CharacterizationNullSetsVariation()) →
    assert(|ν|(A) = 0) →
    assert(|ν|.isAbsolutelyContinuous(μ)) →
    assert(ν.isAbsolutelyContinuous(μ))
  }

  // Necessary condition
  block NecessaryCondition() {
    assume(ν.isAbsolutelyContinuous(μ)) →
    
    apply(AbsoluteContinuityJordanDecomposition()) →
    assert(ν⁺.isAbsolutelyContinuous(μ) ∧ ν⁻.isAbsolutelyContinuous(μ)) →
    
    assert(∀A ∈ Σ: [μ(A) = 0 → (ν⁺(A) = 0 ∧ ν⁻(A) = 0)]) →
    
    apply(JordanDecompositionDefinition()) →
    assert(∀A ∈ Σ: [μ(A) = 0 → ν(A) = ν⁺(A) - ν⁻(A) = 0])
  }
}