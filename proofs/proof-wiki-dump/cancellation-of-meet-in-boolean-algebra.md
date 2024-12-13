theorem Cancellation_Meet_Boolean_Algebra() {
  assert(
    ∀S[BooleanAlgebra(S, ∨, ∧, ¬)] ∧
    ∀a,b,c ∈ S ∧
    (a ∧ c = b ∧ c) ∧
    (a ∧ ¬c = b ∧ ¬c)
    ⇒ a = b
  )
}

proof Cancellation_Meet_Boolean_Algebra() {
  setVar(S: BooleanAlgebra) →
  setVar(a,b,c: S) →
  lemma Duality_Principle() {
    assert(
      ∀x,y[x ∧ y = y ∧ x] ↔
      ∀x,y[x ∨ y = y ∨ x]
    )
  } →
  apply(Cancellation_Join_Boolean_Algebra()) →
  apply(Duality_Principle()) →
  assert(a = b)
}