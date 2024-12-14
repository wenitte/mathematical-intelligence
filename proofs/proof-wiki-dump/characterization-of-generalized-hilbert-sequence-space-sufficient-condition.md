theorem HilbertSequenceCharacterization() {
  let(α: CardinalNumber, infinite) ∧
  let(I: IndexedSet, cardinality(I) = α) ∧
  let(Hα = ⟨A, d₂⟩: HilbertSequenceSpace) ∧
  let(H = ⟨ℓ², d_ℓ²⟩: HilbertSpace) ∧
  let(x₁,...,xₘ: I → ℝ) ∧
  assert(
    ∃{j₀,j₁,j₂,...} ⊆ I, countable ∧
    (∀k ∈ [1,m]: {i ∈ I: (xₖ)ᵢ ≠ 0} ⊆ {j₀,j₁,j₂,...}) ∧
    (∀k ∈ [1,m]: ⟨(xₖ)ⱼₙ⟩ ∈ ℓ²) →
    (x₁,...,xₘ ∈ A) ∧
    (∀k ∈ [1,m]: ∑ᵢ∈I((xₖ)ᵢ)² = ∑ₙ₌₀^∞((xₖ)ⱼₙ)²)
  )
} ↔

proof HilbertSequenceCharacterization() {
  setVar(k: [1,m]) →
  assert(∀k: ∑ₙ₌₀^∞((xₖ)ⱼₙ)² < ∞) →
  
  lemma SumEquality() {
    assert(∑ₙ₌₀^∞((xₖ)ⱼₙ)² = ∑ₙ₌₀^∞|((xₖ)ⱼₙ)²|) →
    assert(∑ₙ₌₀^∞|((xₖ)ⱼₙ)²| = ∑ᵢ∈I|(xₖ)ᵢ²|) →
    assert(∑ᵢ∈I|(xₖ)ᵢ²| = ∑ᵢ∈I(xₖ)ᵢ²)
  } →
  
  apply(SumEquality()) →
  assert(∀k ∈ [1,m]: ∑ₙ₌₀^∞((xₖ)ⱼₙ)² = ∑ᵢ∈I(xₖ)ᵢ²)
}