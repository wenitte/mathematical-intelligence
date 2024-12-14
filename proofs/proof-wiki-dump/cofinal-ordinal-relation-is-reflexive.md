theorem Cofinal_Ordinal_Relation_Reflexive() {
  assert(
    ∀x ∈ Ord ⇒ cof(x, x)
  )
} ↔

proof Cofinal_Ordinal_Relation_Reflexive() {
  setVar(x: Ord) →
  
  lemma Identity_Map() {
    define(Ix: x → x) ∧
    assert(∀a ∈ x: Ix(a) = a)
  } →
  
  assert(x ≤ x) by(Set_Is_Subset_Of_Itself) →
  
  lemma Strictly_Increasing() {
    assert(
      ∀a,b ∈ x: (a < b → Ix(a) < Ix(b))
    ) by(Identity_Map_Definition)
  } →
  
  lemma Order_Preservation() {
    assert(
      ∀a ∈ x: Ix(a) ≥ a
    ) by(Identity_Map_Definition)
  } →
  
  apply(Order_Preservation) →
  assert(
    ∀a ∈ x: ∃b ∈ x: Ix(b) ≥ a
  ) by(Existential_Generalisation) →
  
  assert(
    cof(x, x)
  ) by(
    x ≤ x ∧
    Strictly_Increasing() ∧
    Order_Preservation()
  )
}