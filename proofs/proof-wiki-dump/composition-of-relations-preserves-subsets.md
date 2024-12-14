theorem Relations_Composition_Preserves_Subsets() {
  let(A, B, S, T: Relations) →
  assert(
    (A ⊆ B ∧ S ⊆ T) →
    (A ∘ S ⊆ B ∘ T)
  )
} ↔

proof Relations_Composition_Preserves_Subsets() {
  let(A, B, S, T: Relations) →
  assume(A ⊆ B ∧ S ⊆ T) →
  
  forall(⟨x,y⟩) {
    assert(⟨x,y⟩ ∈ A ∘ S) →
    
    lemma CompositeRelationDef1() {
      assert(
        ⟨x,y⟩ ∈ A ∘ S ↔
        ∃z(⟨x,z⟩ ∈ S ∧ ⟨z,y⟩ ∈ A)
      )
    } →
    
    apply(CompositeRelationDef1()) →
    assert(∃z(⟨x,z⟩ ∈ S ∧ ⟨z,y⟩ ∈ A)) →
    
    lemma SubsetDef() {
      assert(
        (A ⊆ B ∧ S ⊆ T) →
        (⟨x,z⟩ ∈ S → ⟨x,z⟩ ∈ T) ∧
        (⟨z,y⟩ ∈ A → ⟨z,y⟩ ∈ B)
      )
    } →
    
    apply(SubsetDef()) →
    assert(∃z(⟨x,z⟩ ∈ T ∧ ⟨z,y⟩ ∈ B)) →
    
    lemma CompositeRelationDef2() {
      assert(
        ∃z(⟨x,z⟩ ∈ T ∧ ⟨z,y⟩ ∈ B) ↔
        ⟨x,y⟩ ∈ B ∘ T
      )
    } →
    
    apply(CompositeRelationDef2()) →
    assert(⟨x,y⟩ ∈ B ∘ T)
  } →
  
  conclude(A ∘ S ⊆ B ∘ T)
}