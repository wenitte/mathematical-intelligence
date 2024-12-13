theorem Axiom_Of_Choice_Implies_Zorns_Lemma() {
  assert(
    Axiom_Of_Choice() →
    Zorns_Lemma()
  )
}

proof Axiom_Of_Choice_Implies_Zorns_Lemma() {
  lemma Connection_Via_Tukey() {
    assert(
      Axiom_Of_Choice() → Tukeys_Lemma() ∧
      Tukeys_Lemma() → Zorns_Lemma()
    )
  } →
  apply(Connection_Via_Tukey()) →
  assert(
    Axiom_Of_Choice() →
    Tukeys_Lemma() →
    Zorns_Lemma()
  )
}