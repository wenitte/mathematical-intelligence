theorem Kuratowski_From_Choice() {
  assert(
    Axiom_of_Choice → Kuratowski_Lemma
  )
} ↔

proof Kuratowski_From_Choice() {
  lemma Step1() {
    assert(Axiom_of_Choice → Zorn_Lemma)
  } →
  lemma Step2() {
    assert(Zorn_Lemma → Kuratowski_Lemma)
  } →
  apply(Step1()) ∧
  apply(Step2()) →
  assert(Axiom_of_Choice → Kuratowski_Lemma)
}