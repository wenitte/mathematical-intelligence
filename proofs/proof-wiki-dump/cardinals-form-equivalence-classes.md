theorem Cardinals_Form_Equivalence_Classes() {
  assert(
    ∀S,T(Sets) ⇒ (Card(S) = Card(T) ↔ S ∼ T) ∧
    Card(S) induces_partition P ∧
    P contains_all {X | X ∼ S}
  )
}

proof Cardinals_Form_Equivalence_Classes() {
  lemma Cardinal_Definition() {
    assert(
      ∀S,T(Sets) ⇒ (S ∼ T ↔ Card(S) = Card(T))
    )
  } →
  
  lemma Set_Equivalence_Is_Equivalence() {
    assert(
      ∼ is_reflexive ∧
      ∼ is_symmetric ∧
      ∼ is_transitive
    )
  } →
  
  lemma Equivalence_Implies_Partition() {
    assert(
      R is_equivalence_relation →
      R partitions_set into_equivalence_classes
    )
  } →
  
  apply(Cardinal_Definition()) →
  apply(Set_Equivalence_Is_Equivalence()) →
  apply(Equivalence_Implies_Partition()) →
  
  assert(
    Card(S) defines_equivalence_class {X | X ∼ S}
  )
}