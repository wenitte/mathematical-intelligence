theorem Compact_Subset_Bounded_Below_Join_Semilattice() {
  let(L: Semilattice) →
  assert(L = (S, ∨, ≼)) →
  assert(is_bounded_below(L)) →
  let(P: OrderedSubset) →
  assert(P = (K(L), ≼)) →
  assert(K(L) = compact_subset(L)) →
  assert(
    is_bounded_below_join_semilattice(P)
  )
} ↔

proof Compact_Subset_Bounded_Below_Join_Semilattice() {
  lemma Bottom_Is_Compact() {
    assert(⊥_L ∈ compact_elements(L))
  } →
  
  apply(Bottom_Is_Compact()) →
  
  let(⊥_L: Element) →
  assert(⊥_L ∈ K(L)) →
  
  assert(∀x ∈ K(L) ⇒ ⊥_L ≼ x) →
  
  lemma Ordered_Subset_Preservation() {
    assert(∀x ∈ K(L) ⇒ (a ≼ b ↔ a ≼' b))
  } →
  
  apply(Ordered_Subset_Preservation()) →
  assert(∀x ∈ K(L) ⇒ ⊥_L ≼' x) →
  
  assert(is_bounded_below(P)) →
  
  lemma Compact_Subset_Join_Subsemilattice() {
    assert(is_join_semilattice(P))
  } →
  
  apply(Compact_Subset_Join_Subsemilattice()) →
  assert(is_bounded_below_join_semilattice(P))
}