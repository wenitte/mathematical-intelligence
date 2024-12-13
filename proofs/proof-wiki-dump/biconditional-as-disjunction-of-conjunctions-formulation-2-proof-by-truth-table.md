theorem Biconditional_As_Disjunction() {
  assert(
    ⊢ (p ↔ q) ↔ ((p ∧ q) ∨ (¬p ∧ ¬q))
  )
} ↔

proof Biconditional_As_Disjunction() {
  method(Truth_Table) →
  lemma Truth_Values() {
    assert(
      ∀interpretations[
        case1(p:F, q:F) → eval((p↔q):T) ∧ eval((p∧q)∨(¬p∧¬q):T),
        case2(p:F, q:T) → eval((p↔q):F) ∧ eval((p∧q)∨(¬p∧¬q):F),
        case3(p:T, q:F) → eval((p↔q):F) ∧ eval((p∧q)∨(¬p∧¬q):F),
        case4(p:T, q:T) → eval((p↔q):T) ∧ eval((p∧q)∨(¬p∧¬q):T)
      ]
    )
  } →
  apply(Truth_Values()) →
  assert(
    ∀interpretations[eval((p↔q) ↔ ((p∧q)∨(¬p∧¬q))):T]
  )
}