theorem Closure_Subset_Of_Closed_Set() {
  assert(
    ∀T: TopologicalSpace,
    ∀F ⊆ T: Closed,
    ∀H ⊆ F,
    let H⁻ = closure(H) ⇒
    H⁻ ⊆ F
  )
}

proof Closure_Subset_Of_Closed_Set() {
  // Proof 1
  setVar(T: TopologicalSpace) →
  setVar(F: Closed, F ⊆ T) →
  setVar(H: Set, H ⊆ F) →
  assert(H ⊆ F) →
  assert(
    H ⊆ F ⇒ closure(H) ⊆ closure(F)
  ) by TopologicalClosure_Subset() →
  assert(F = closure(F)) by Set_Closed_Iff_Equals_Closure() →
  assert(H⁻ ⊆ F)

  // Proof 2
  setVar(x: Point) →
  assume(x ∉ F) →
  assert(x ∈ (S∖F)) →
  lemma Set_Difference_Subset() {
    assert(S∖F ⊆ S∖H)
  } →
  lemma Disjoint_Subsets() {
    assert((S∖F) ∩ H = ∅)
  } →
  assert(isNeighborhood(S∖F, x)) by Open_Set_Is_Neighborhood() →
  assert(x ∉ H⁻) by Closure_Definition() →
  assert(S∖F ⊆ S∖H⁻) →
  assert(H⁻ ⊆ F) by Set_Difference_Subset_Implies_Subset() 
}