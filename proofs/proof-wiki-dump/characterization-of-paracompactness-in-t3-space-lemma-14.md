theorem Paracompactness_Characterization_Lemma14() {
  assert(
    ∀X: Set ∧
    ∀n ∈ ℕ>0 ∧
    ∀Vn ⊆ (X × X) ∧
    (∆X ⊆ Vn) ∧
    (Vn ∘ Vn ⊆ Vn-1) ∧
    (Un = Vn ∘ Vn-1 ∘ ... ∘ V1) →
    (∀n ∈ ℕ>0: Un ⊆ V0)
  )
} ↔

proof Paracompactness_Characterization_Lemma14() {
  lemma Vn_Subset_Vnminus1() {
    setVar(n: ℕ>0) →
    assert(⟨x,y⟩ ∈ Vn) →
    assert(⟨x,y⟩,⟨y,y⟩ ∈ Vn) by(∆X ⊆ Vn) →
    assert(⟨x,y⟩ ∈ Vn ∘ Vn) by(CompositeRelationDef) →
    assert(Vn ⊆ Vn ∘ Vn) by(SubsetDef) →
    assert(Vn ∘ Vn ⊆ Vn-1) by(hypothesis) →
    assert(Vn ⊆ Vn-1) by(SubsetTransitive)
  } →

  lemma Un_Subset_Relation() {
    apply(Vn_Subset_Vnminus1()) →
    assert(Vn ∘ Un-1 ⊆ Vn-1 ∘ Un-1) by(CompositionPreservesSubsets) →
    assert(∀n>1: Un = Vn ∘ Un-1) by(UnDef) →
    assert(Un ⊆ Vn-1 ∘ Un-1) by(SubsetTransitive)
  } →

  lemma Vn_Compose_Un_Subset_V0() {
    setVar(P(n): Vn ∘ Un ⊆ V0) →
    
    // Base case
    assert(V1 ∘ U1 = V1 ∘ V1) by(U1Def) →
    assert(V1 ∘ V1 ⊆ V0) by(hypothesis) →
    assert(P(1)) →

    // Inductive step
    assert(∀n>0: P(n) → P(n+1)) by {
      assert(Vn+1 ∘ Un+1 = Vn+1 ∘ (Vn+1 ∘ Un)) →
      assert(= (Vn+1 ∘ Vn+1) ∘ Un) by(CompositionAssociative) →
      assert(⊆ Vn ∘ Un) by(hypothesis) →
      assert(⊆ V0) by(InductionHypothesis)
    } →
    
    assert(∀n∈ℕ>0: Vn ∘ Un ⊆ V0) by(MathInduction)
  } →

  // Main proof conclusion
  apply(Un_Subset_Relation()) →
  apply(Vn_Compose_Un_Subset_V0()) →
  assert(∀n∈ℕ>0: Un ⊆ V0) by(SubsetTransitive)
}