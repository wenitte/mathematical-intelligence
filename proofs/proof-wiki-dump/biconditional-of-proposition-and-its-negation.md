theorem Biconditional_Negation_Proposition() {
  assert(
    ⊢ ¬(p ⟺ ¬p)
  )
} ↔

proof Biconditional_Negation_Proposition() {
  lemma Truth_Table() {
    assert(
      [p = F] ∧ [¬p = T] → [(p ⟺ ¬p) = F] → [¬(p ⟺ ¬p) = T] ∧
      [p = T] ∧ [¬p = F] → [(p ⟺ ¬p) = F] → [¬(p ⟺ ¬p) = T]
    )
  } →
  apply(Truth_Table()) →
  assert(
    ∀p ∈ {T,F} → ¬(p ⟺ ¬p) = T
  ) →
  assert(
    ⊢ ¬(p ⟺ ¬p)
  )
}