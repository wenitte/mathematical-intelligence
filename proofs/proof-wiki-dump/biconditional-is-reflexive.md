theorem Biconditional_Reflexivity() {
  assert(
    ∀p ∈ PROP ⇒ (p ↔ p)
  )
} ↔

proof Biconditional_Reflexivity_TruthTable() {
  lemma TruthTable_Construction() {
    assert(
      ∀p ∈ {T,F} ⇒
      [
        (p=T → ((p↔p)=T)) ∧
        (p=F → ((p↔p)=T))
      ]
    )
  } →
  apply(TruthTable_Construction()) →
  assert((p↔p)=T)
} ↔

proof Biconditional_Reflexivity_Natural() {
  lemma Identity_Law() {
    assert(p → p)
  } →
  apply(Identity_Law()) →
  setVar(antecedent: p→p) →
  setVar(consequent: p→p) →
  assert(
    (antecedent ∧ consequent) →
    (p ↔ p)
  ) →
  apply(Biconditional_Introduction) →
  assert(p ↔ p)
}