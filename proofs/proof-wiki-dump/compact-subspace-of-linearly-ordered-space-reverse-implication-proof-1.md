theorem CompactSubspace_LinearlyOrderedSpace() {
  define(X: LinearlyOrderedSpace) ∧
  define(Y: Subset(X)) ∧
  define(≺: OrderRelation(X)) ∧
  define(τ: Topology(X)) ∧
  assert(
    (∀S ⊆ Y, S ≠ ∅ ⇒ ∃sup(S) ∈ X ∧ ∃inf(S) ∈ X) ∧
    (∀S ⊆ Y, S ≠ ∅ ⇒ sup(S) ∈ Y ∧ inf(S) ∈ Y) ⇒
    isCompact(Y, τ)
  )
} ↔

proof CompactSubspace_LinearlyOrderedSpace() {
  setVar(τ': SubspaceTopology(Y, τ)) →
  setVar(≺': Restriction(≺, Y)) →
  
  lemma SubspaceIsLinearlyOrdered() {
    assert(
      ⟨Y, ≺', τ'⟩ is_a LinearlyOrderedSpace
    )
  } →

  lemma YIsCompleteLattice() {
    assert(
      (∀S ⊆ Y, S ≠ ∅ ⇒ ∃sup(S) ∈ Y ∧ ∃inf(S) ∈ Y) ⇒
      isCompleteLattice(Y, ≺')
    )
  } →
  
  apply(CompleteLinearlyOrderedSpace_isCompact()) →
  assert(isCompact(Y, τ))
}