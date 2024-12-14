theorem CharacterizationNullSetsVariation() {
  let(X,Σ: MeasurableSpace) →
  let(μ: SignedMeasure(X,Σ)) →
  let(|μ|: Variation(μ)) →
  assert(
    ∀A ∈ Σ: |μ|(A) = 0 ↔ (∀B ∈ Σ: B ⊆ A → μ(B) = 0)
  )
} ↔

proof CharacterizationNullSetsVariation() {
  let((μ⁺,μ⁻): JordanDecomposition(μ)) →
  assert(|μ| = μ⁺ + μ⁻) →
  
  // Forward direction
  proof ForwardImplication() {
    assume(A ∈ Σ ∧ |μ|(A) = 0) →
    assert(μ⁺(A) + μ⁻(A) = 0) →
    assert(μ⁺ ≥ 0 ∧ μ⁻ ≥ 0) →
    assert(μ⁺(A) = 0 ∧ μ⁻(A) = 0) →
    
    lemma NullSetsClosed() {
      assert(∀B ∈ Σ: B ⊆ A → μ⁺(B) = 0) ∧
      assert(∀B ∈ Σ: B ⊆ A → μ⁻(B) = 0)
    } →
    
    assert(∀B ∈ Σ: B ⊆ A → μ⁺(B) - μ⁻(B) = 0) →
    assert(∀B ∈ Σ: B ⊆ A → μ(B) = 0)
  } →
  
  // Reverse direction
  proof ReverseImplication() {
    assume(∀B ∈ Σ: B ⊆ A → μ(B) = 0) →
    let((P,N): HahnDecomposition(μ)) →
    
    assert(μ⁺(A) = μ(P ∩ A)) →
    assert(μ⁻(A) = -μ(N ∩ A)) →
    
    lemma IntersectionSubset() {
      assert(P ∩ A ⊆ A ∧ N ∩ A ⊆ A)
    } →
    
    apply(assumption, P ∩ A) →
    apply(assumption, N ∩ A) →
    assert(μ(P ∩ A) = 0 ∧ μ(N ∩ A) = 0) →
    assert(μ⁺(A) = 0 ∧ μ⁻(A) = 0) →
    assert(|μ|(A) = μ⁺(A) + μ⁻(A) = 0)
  }
}