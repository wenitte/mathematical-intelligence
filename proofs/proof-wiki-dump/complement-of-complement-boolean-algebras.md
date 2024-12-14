theorem Complement_of_Complement() {
  assert(
    let BA = ⟨S, ∨, ∧, ¬⟩ be_a BooleanAlgebra →
    ∀a ∈ S ⇒ ¬(¬a) = a
  )
} ↔

proof Complement_of_Complement() {
  setVar(BA: BooleanAlgebra) →
  setVar(a: S) →
  reference(Complement_Uniqueness_Theorem) {
    assert(
      ∀x ∈ S ⇒ x has_unique_complement_in BA
    )
  } →
  apply(Complement_Uniqueness_Theorem) →
  assert(¬(¬a) = a)
}