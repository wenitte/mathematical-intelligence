theorem CompactnessContinuousSurjection() {
  define(TA: TopologicalSpace(SA, τA)) ∧
  define(TB: TopologicalSpace(SB, τB)) ∧
  define(φ: Function(TA → TB)) ∧
  assert(
    (isContinuous(φ) ∧ isSurjective(φ) ∧ isCompact(TA)) →
    isCompact(TB)
  )
} ↔

proof CompactnessContinuousSurjection() {
  assume(isCompact(TA)) →
  setVar(𝓤: OpenCover(TB)) →
  
  lemma PreimageCover() {
    assert(
      ∀U ∈ 𝓤 → {φ⁻¹[U]: U ∈ 𝓤} isCover(SA)
    )
  } →
  
  lemma ContinuityPreimage() {
    assert(
      isContinuous(φ) →
      ∀U ∈ 𝓤 → (isOpen(U, TB) → isOpen(φ⁻¹[U], TA))
    )
  } →
  
  apply(PreimageCover()) →
  apply(ContinuityPreimage()) →
  assert({φ⁻¹[U]: U ∈ 𝓤} isOpenCover(TA)) →
  
  apply(isCompact(TA)) →
  ∃n ∈ ℕ: ∃{U₁,...,Uₙ} ⊆ 𝓤: {φ⁻¹[U₁],...,φ⁻¹[Uₙ]} isFiniteSubcover(TA) →
  
  lemma SurjectionPreimageProperty() {
    assert(
      isSurjective(φ) →
      ∀A ∈ P(TB): φ[φ⁻¹[A]] = A
    )
  } →
  
  apply(SurjectionPreimageProperty()) →
  assert({U₁,...,Uₙ} isFiniteSubcover(TB)) →
  conclude(isCompact(TB))
}