theorem Matroid_Rank_Bounds() {
  assert(
    ∀M = (S,𝓘) [Matroid] ∧
    ∀ρ: 𝒫(S) → ℤ [RankFunction(M)] ∧
    ∀A ⊆ S →
    0 ≤ ρ(A) ≤ |A|
  )
}

proof Matroid_Rank_Bounds() {
  setVar(M: Matroid, ρ: RankFunction, A: Set) →
  
  assert(ρ(A) = max{|X| : X ⊆ A ∧ X ∈ 𝓘}) [RankFunctionDef] →
  
  lemma SubsetCard() {
    assert(∀X ⊆ A → |X| ≤ |A|) [CardinalitySubset]
  } →
  
  apply(SubsetCard()) →
  assert(∀X ⊆ A ∧ X ∈ 𝓘 → |X| ≤ |A|) →
  
  lemma MaxBound() {
    assert(max{|X| : X ⊆ A ∧ X ∈ 𝓘} ≤ |A|) [MaxOperationSupremum]
  } →
  
  lemma EmptySetProperties() {
    assert(∅ ⊆ A) [EmptySetSubset] ∧
    assert(|∅| = 0) [EmptySetCard] ∧
    assert(∅ ∈ 𝓘) [MatroidAxiomI1]
  } →
  
  apply(EmptySetProperties()) →
  assert(0 ≤ max{|X| : X ⊆ A ∧ X ∈ 𝓘}) [MaxOperationSupremum] →
  
  apply(RankFunctionDef) →
  assert(0 ≤ ρ(A) ≤ |A|)
}