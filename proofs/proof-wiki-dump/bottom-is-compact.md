theorem Bottom_Is_Compact() {
  assert(
    ∀L: OrderedSet ∧ 
    bounded_below(L) ⇒ 
    (∃⊥ ∈ L: ∀x ∈ L: ⊥ ≤ x) ⇒
    compact_element(⊥)
  )
}

proof Bottom_Is_Compact() {
  setVar(L: OrderedSet) →
  assume(bounded_below(L)) →
  setVar(⊥: L, ∀x ∈ L: ⊥ ≤ x) →
  
  lemma Bottom_Way_Below_Any() {
    assert(⊥ ≪ ⊥)
  } →
  
  apply(Bottom_Way_Below_Any()) →
  
  lemma CompactDef() {
    assert(∀e ∈ L: e ≪ e ⇔ compact_element(e))
  } →
  
  apply(CompactDef()) →
  assert(compact_element(⊥))
}