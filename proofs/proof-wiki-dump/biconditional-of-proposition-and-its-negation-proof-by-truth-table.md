theorem Biconditional_Prop_And_Neg() {
  assert(
    ⊢ ¬(p ↔ ¬p)
  )
} ↔

proof Biconditional_Prop_And_Neg() {
  letVar(p: Boolean) →
  lemma Truth_Table() {
    assert(
      case(p = false) → [
        eval(p) = false ∧
        eval(¬p) = true ∧
        eval(p ↔ ¬p) = false ∧
        eval(¬(p ↔ ¬p)) = true
      ] ∧
      case(p = true) → [
        eval(p) = true ∧
        eval(¬p) = false ∧
        eval(p ↔ ¬p) = false ∧
        eval(¬(p ↔ ¬p)) = true
      ]
    )
  } →
  apply(Truth_Table()) →
  conclude(
    ∀p: Boolean → eval(¬(p ↔ ¬p)) = true →
    ⊢ ¬(p ↔ ¬p)
  )
}