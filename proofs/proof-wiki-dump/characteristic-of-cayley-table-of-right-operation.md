theorem Cayley_Table_Right_Operation_Characteristic() {
  let(S: finite_set) ∧
  let(→: right_operation(S)) →
  assert(
    ∀y ∈ S ⇒ (∀x ∈ S ⇒ (column(y) = {x → y} = {y}))
  )
} ↔

proof Cayley_Table_Right_Operation_Characteristic() {
  setVar(y: S) →
  lemma Column_Definition() {
    assert(
      column(y) = {x → y | x ∈ S}
    )
  } →
  lemma Right_Operation_Definition() {
    assert(
      ∀x ∈ S ⇒ (x → y = y)
    )
  } →
  apply(Column_Definition()) ∧
  apply(Right_Operation_Definition()) →
  assert(
    column(y) = {x → y | x ∈ S} = {y}
  ) →
  assert(
    ∀y ∈ S ⇒ (column(y) contains_exactly_one_element(y))
  )
}