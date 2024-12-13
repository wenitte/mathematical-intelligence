theorem Bounded_Rank_Small_Class() {
  assume(S: Class)
  assume(∀x ∈ S, ∃y: Ordinal, rank(x) ≤ y)
  assert(
    isSmallClass(S)
  )
} ↔

proof Bounded_Rank_Small_Class() {
  setVar(V: VonNeumannHierarchy) →
  setVar(y: Ordinal) →
  
  lemma Rank_Bound() {
    assert(∀x ∈ S: rank(x) ≤ y)
  } →
  
  lemma VonNeumann_Membership() {
    assert(∀x ∈ S: rank(x) ≤ y → x ∈ V(y + 1))
  } →
  
  apply(Rank_Bound()) →
  apply(VonNeumann_Membership()) →
  
  assert(S ⊆ V(y + 1)) →
  
  lemma Subset_VN_Small() {
    assert(∀X: Class, ∀α: Ordinal, X ⊆ V(α) → isSmallClass(X))
  } →
  
  apply(Subset_VN_Small(), [S, y + 1]) →
  assert(isSmallClass(S))
}