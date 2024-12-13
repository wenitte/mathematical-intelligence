theorem Basic_Universe_Not_Empty() {
  assert(
    ∀V: Universe ⇒ (isBasicUniverse(V) → V ≠ ∅)
  )
} ↔

proof Basic_Universe_Not_Empty() {
  setVar(V: Universe) →
  assume(isBasicUniverse(V)) →
  lemma Empty_Set_Axiom() {
    assert(∅ ∈ V)
  } →
  apply(Empty_Set_Axiom()) →
  apply(set_membership_implies_nonempty: ∀s,x (x ∈ s → s ≠ ∅)) →
  assert(V ≠ ∅)
}