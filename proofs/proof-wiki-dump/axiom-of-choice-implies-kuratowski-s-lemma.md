theorem Kuratowski_From_Choice() {
  assert(
    Axiom_of_Choice ⇒ Kuratowski_Lemma
  )
} ↔

proof Kuratowski_From_Choice() {
  // Proof 1 via Zorn's Lemma
  lemma Via_Zorn() {
    assert(Axiom_of_Choice ⇒ Zorn_Lemma) ∧
    assert(Zorn_Lemma ⇒ Kuratowski_Lemma) →
    assert(Axiom_of_Choice ⇒ Kuratowski_Lemma)
  }

  // Proof 2 via direct construction
  lemma Direct_Proof() {
    setVar(S: Set[Set]) →
    assert(
      ∀c ∈ Chains(S) ⇒ (∪c ∈ S)  // S closed under chain unions
    ) →
    apply(Axiom_of_Choice) →
    assert(∃f: Choice_Function(S)) →
    lemma Closed_Set_Chain_Union() {
      assert(
        (S closed under chain unions ∧ ∃f: Choice_Function(S)) ⇒
        ∀x ∈ S ∃m ∈ S(
          x ⊆ m ∧ 
          ∀y ∈ S(m ⊆ y ⇒ m = y)  // m is maximal
        )
      )
    } →
    apply(Closed_Set_Chain_Union()) →
    assert(Kuratowski_Lemma)
  }
}