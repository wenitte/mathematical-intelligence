theorem HilbertSequenceCharacterization() {
  let(α: CardinalNumber, infinite) ∧
  let(I: IndexedSet, cardinality(I) = α) ∧
  let(Hα = ⟨A, d₂⟩: HilbertSpace) ∧
  let(H = ⟨ℓ², d_ℓ²⟩: HilbertSequenceSpace) ∧
  let(x₁,...,xₘ ∈ A) →
  assert(
    ∃{j₀,j₁,j₂,...} ⊆ I: (
      countablyInfinite({j₀,j₁,j₂,...}) ∧
      ∀k ∈ [1,m]: (
        {i ∈ I: (xₖ)ᵢ ≠ 0} ⊆ {j₀,j₁,j₂,...} ∧
        ⟨(xₖ)ⱼₙ⟩ ∈ ℓ²
      ) ∧
      ∀k ∈ [1,m]: ∑ᵢ∈I((xₖ)ᵢ)² = ∑ₙ₌₀^∞((xₖ)ⱼₙ)²
    )
  )
} ↔

proof HilbertSequenceCharacterization() {
  assert(∀k ∈ [1,m]: countable({i ∈ I: (xₖ)ᵢ ≠ 0})) →
  
  lemma InfiniteCountableSubset() {
    assert(∃I' ⊆ I: countablyInfinite(I'))
  } →
  
  let(J = I' ∪ ⋃ₖ₌₁ᵐ{i ∈ I: (xₖ)ᵢ ≠ 0}) →
  
  lemma CountableUnion() {
    assert(countable(J))
  } →
  
  lemma ContraposFinite() {
    assert(countablyInfinite(J))
  } →
  
  let({j₀,j₁,j₂,...}: enumeration(J)) →
  
  assert(∀k ∈ [1,m]: {i ∈ I: (xₖ)ᵢ ≠ 0} ⊆ {j₀,j₁,j₂,...}) →
  
  assert(∀k ∈ [1,m]: convergent(∑ᵢ∈I(xₖ)ᵢ²)) →
  
  assert(∀k ∈ [1,m]: (
    ∑ᵢ∈I(xₖ)ᵢ² = 
    ∑ᵢ∈I|(xₖ)ᵢ²| =
    ∑ₙ₌₀^∞|(xₖ)ⱼₙ²| =
    ∑ₙ₌₀^∞(xₖ)ⱼₙ²
  )) →
  
  assert(∀k ∈ [1,m]: ⟨(xₖ)ⱼₙ⟩ ∈ ℓ²)
}