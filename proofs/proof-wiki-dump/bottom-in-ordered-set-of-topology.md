theorem Topology_Bottom_Ordered_Set() {
  assert(
    ∀T(T = ⟨S,τ⟩ ∧ IsTopologicalSpace(T)) ∧
    ∀P(P = ⟨τ,⊆⟩ ∧ IsInclusionOrderedSet(P)) ⇒
    (IsBoundedBelow(P) ∧ ⊥_P = ∅)
  )
} ↔

proof Topology_Bottom_Ordered_Set() {
  setVar(T: TopologicalSpace) →
  setVar(P: OrderedSet) →
  
  lemma Empty_In_Topology() {
    assert(∅ ∈ τ)
  } →
  
  lemma Empty_Subset_All() {
    assert(∀A ∈ τ ⇒ ∅ ⊆ A)
  } →
  
  apply(Empty_In_Topology()) →
  apply(Empty_Subset_All()) →
  
  assert(∃x ∈ τ(∀A ∈ τ ⇒ x ⊆ A)) →
  assert(IsBoundedBelow(P)) →
  
  lemma Bottom_Definition() {
    assert(IsBoundedBelow(P) ∧ ∀A ∈ τ(∅ ⊆ A) ⇒ ⊥_P = ∅)
  } →
  
  apply(Bottom_Definition()) →
  assert(⊥_P = ∅)
}