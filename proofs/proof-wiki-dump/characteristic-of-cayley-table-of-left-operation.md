theorem Cayley_Table_Left_Operation_Characteristic() {
  let(S: finite_set) ∧
  let(←: operation_on(S)) →
  assert(
    ∀x ∈ S ⇒
    ∀y ∈ S ⇒
    (row_in_cayley_table(x) contains_only one_distinct_element)
  )
} ↔

proof Cayley_Table_Left_Operation_Characteristic() {
  setVar(x: S) →
  setVar(y: S) →
  
  lemma Row_Content() {
    assert(
      row_in_cayley_table(x) = {x ← y | y ∈ S}
    )
  } →
  
  lemma Left_Operation_Definition() {
    assert(
      ∀x,y ∈ S ⇒ (x ← y = x)
    )
  } →
  
  apply(Row_Content()) →
  apply(Left_Operation_Definition()) →
  
  assert(
    row_in_cayley_table(x) = {x}
  ) →
  
  conclude(
    row_in_cayley_table(x) contains_only one_distinct_element
  )
}