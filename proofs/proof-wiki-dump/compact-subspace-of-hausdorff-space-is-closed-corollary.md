theorem CompactSubspaceFiniteHausdorff() {
  assert(
    ∀X[TopologicalSpace(X) ∧ Hausdorff(X)] ∧
    ∀S[S ⊆ X ∧ Finite(S)] →
    Closed(S, X)
  )
} ↔

proof CompactSubspaceFiniteHausdorff() {
  lemma FiniteImpliesCompact() {
    assert(
      Finite(S) → Compact(S)
    )
  } →
  
  lemma CompactHausdorffImpliesClosed() {
    assert(
      [Compact(S) ∧ Hausdorff(X) ∧ S ⊆ X] → Closed(S, X)
    )
  } →
  
  apply(FiniteImpliesCompact()) →
  assert(Compact(S)) →
  apply(CompactHausdorffImpliesClosed()) →
  assert(Closed(S, X))
}