theorem Bottom_Way_Below_Any_Element() {
  assert(
    ∀S(OrderedSet(S) ∧ BoundedBelow(S)) ∧
    ∀x ∈ S ⇒
    ⊥ ≪ x
  )
} ↔

proof Bottom_Way_Below_Any_Element() {
  setVar(S: OrderedSet, x: Element(S)) →
  setVar(D: DirectedSubset(S)) →
  
  assert(
    HasSupremum(D) ∧ x ⪯ sup(D)
  ) →
  
  lemma NonEmpty_D() {
    assert(
      ∃a ∈ D
    )
  } →
  
  lemma Bottom_Property() {
    assert(
      ∀a ∈ S ⇒ ⊥ ⪯ a
    )
  } →
  
  apply(NonEmpty_D()) →
  apply(Bottom_Property()) →
  
  assert(
    ∃a ∈ D ⇒ ⊥ ⪯ a
  ) →
  
  applyDef(WayBelowRelation) →
  
  assert(
    ⊥ ≪ x
  )
}