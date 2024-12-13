theorem Biconditional_As_Disjunction() {
  assert(
    ∀p,q ∈ Bool ⇒ ((p ↔ q) ↔ ((p ∧ q) ∨ (¬p ∧ ¬q)))
  )
}

proof Biconditional_As_Disjunction_Tableau() {
  setVar(p,q: Bool) →
  
  lemma Forward_Direction() {
    assume(p ↔ q) →
    assert((p ∧ q) ∨ (¬p ∧ ¬q)) →
    conclude((p ↔ q) → ((p ∧ q) ∨ (¬p ∧ ¬q)))
  } →

  lemma Backward_Direction() {
    assume((p ∧ q) ∨ (¬p ∧ ¬q)) →
    assert(p ↔ q) →
    conclude(((p ∧ q) ∨ (¬p ∧ ¬q)) → (p ↔ q))
  } →

  apply(Forward_Direction()) →
  apply(Backward_Direction()) →
  conclude((p ↔ q) ↔ ((p ∧ q) ∨ (¬p ∧ ¬q)))
}

proof Biconditional_As_Disjunction_TruthTable() {
  setVar(p,q: Bool) →
  define(truthTable: {
    [F,F]: T,
    [F,T]: T,
    [T,F]: T,
    [T,T]: T
  }) →
  verify(truthTable, (p ↔ q) ↔ ((p ∧ q) ∨ (¬p ∧ ¬q))) →
  conclude((p ↔ q) ↔ ((p ∧ q) ∨ (¬p ∧ ¬q)))
}