theorem Closure_Subset_Of_Closed_Set() {
  assert(
    ∀T[topologicalSpace(T = (S,τ))] ∧
    ∀F[closedSet(F,T)] ∧
    ∀H[H ⊆ F] →
    H⁻ ⊆ F
  )
} ↔

proof Closure_Subset_Of_Closed_Set() {
  setVar(x: S) →
  assume(x ∉ F) →
  assert(x ∈ (S \ F)) →
  
  lemma Set_Difference_Subset() {
    assert(S \ F ⊆ S \ H)
  } →
  
  lemma Disjoint_Subsets() {
    assert((S \ F) ∩ H = ∅)
  } →
  
  lemma Open_Set_Neighborhood() {
    assert(isOpen(S \ F) ↔ ∀p∈(S \ F)[isNeighborhood(S \ F, p)])
  } →
  
  apply(Open_Set_Neighborhood()) →
  assert(isNeighborhood(S \ F, x)) →
  
  lemma Closure_Definition() {
    assert(∀p[p ∉ H⁻ ↔ ∃N[isNeighborhood(N,p) ∧ N ∩ H = ∅]])
  } →
  
  apply(Closure_Definition()) →
  assert(x ∉ H⁻) →
  
  assert(S \ F ⊆ S \ H⁻) →
  
  lemma Set_Difference_Superset() {
    assert((S \ F ⊆ S \ H⁻) → H⁻ ⊆ F)
  } →
  
  apply(Set_Difference_Superset()) →
  assert(H⁻ ⊆ F)
}