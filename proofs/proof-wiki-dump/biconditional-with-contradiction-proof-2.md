theorem Biconditional_Contradiction() {
  assert(
    p ↔ ⊥ ⟺ ¬p
  )
}

proof Biconditional_Contradiction() {
  lemma Truth_Table_Analysis() {
    define(truth_table: [
      row1: {p: F, p↔⊥: T, ¬p: T},
      row2: {p: T, p↔⊥: F, ¬p: F}
    ]) →
    assert(∀row ∈ truth_table: (p↔⊥) = ¬p)
  } →
  apply(Truth_Table_Analysis()) →
  conclude(p↔⊥ ⟺ ¬p)
}