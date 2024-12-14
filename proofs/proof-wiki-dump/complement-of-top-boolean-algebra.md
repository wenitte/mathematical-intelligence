theorem ComplementOfTop_BooleanAlgebra() {
  assert(
    ∀S(BooleanAlgebra(S, ∨, ∧, ¬) ⇒
      ¬⊤ = ⊥)
  )
}

proof ComplementOfTop_BooleanAlgebra() {
  setVar(S: BooleanAlgebra) →
  lemma IdentityProperty() {
    assert(
      ∀x ∈ S(
        x ∧ ⊤ = x ∧
        x ∨ ⊥ = x
      )
    )
  } →
  lemma ComplementProperty() {
    assert(
      ∀x ∈ S(
        x ∧ ¬x = ⊥
      )
    )
  } →
  apply(ComplementProperty()) →
  assert(⊤ ∧ ¬⊤ = ⊥) →
  assert(
    ∀y ∈ S(
      (y ≠ ⊥) ⇒ (⊤ ∧ y ≠ ⊥)
    )
  ) →
  assert(¬⊤ = ⊥) →
  apply(IdentityProperty()) →
  assert(⊤ ∨ ⊥ = ⊤) →
  conclude(¬⊤ = ⊥)
}