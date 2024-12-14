theorem Class_Set_Equality() {
  assert(
    ∀x,y ∈ Set ⇒ (x =_s y ↔ x =_c y)
  )
} ↔

proof Class_Set_Equality() {
  setVar(x,y: Set) →
  assert(
    x =_s y ↔ (∀z: z ∈ x ↔ z ∈ y)
  ) by(def_set_equality) →
  
  assert(
    (∀z: z ∈ x ↔ z ∈ y) ↔ x =_c y
  ) by(def_class_equality) →
  
  lemma Set_Class_Membership() {
    assert(
      ∀z,s ∈ Set ⇒ (z ∈ s as_set ↔ z ∈ s as_class)
    )
  } →
  
  apply(Set_Class_Membership()) →
  assert(
    x =_s y ↔ x =_c y
  ) by(transitive_equivalence)
}