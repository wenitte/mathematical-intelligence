theorem Closure_Irreducible_Subspace() {
  assert(
    ∀T: TopologicalSpace ∧
    ∀Y ⊆ T.S ∧
    isIrreducible(Y, T) →
    isIrreducible(closure(Y, T), T)
  )
} ↔

proof Closure_Irreducible_Subspace() {
  setVar(T: TopologicalSpace) →
  setVar(Y ⊆ T.S) →
  
  lemma ClosedSetIntersection() {
    assert(
      ∀V ⊆ T.S ∧ isClosed(V, T) →
      (V ⊊ closure(Y, T) → V ∩ Y ⊊ Y)
    )
  } →

  proof_by_contradiction() {
    assume(¬isIrreducible(closure(Y, T), T)) →
    assert(
      ∃V₁,V₂ ⊊ closure(Y, T) ∧
      isClosed(V₁, T) ∧ isClosed(V₂, T) ∧
      closure(Y, T) = V₁ ∪ V₂
    ) →
    
    apply(ClosedSetIntersection(), V₁) →
    apply(ClosedSetIntersection(), V₂) →
    assert(V₁ ∩ Y ⊊ Y) →
    assert(V₂ ∩ Y ⊊ Y) →
    
    assert(Y = (V₁ ∩ Y) ∪ (V₂ ∩ Y)) →
    assert(isClosed(V₁ ∩ Y, subspace(Y, T))) →
    assert(isClosed(V₂ ∩ Y, subspace(Y, T))) →
    
    contradiction(
      isIrreducible(Y, T),
      ∃A,B ⊊ Y ∧ isClosed(A, subspace(Y, T)) ∧ isClosed(B, subspace(Y, T)) ∧ Y = A ∪ B
    )
  }
}