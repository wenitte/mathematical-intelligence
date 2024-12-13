theorem AC_Implies_Maximal_Principles() {
  assert(
    Axiom_of_Choice ⇒ Maximal_Principles
  )
} ↔

proof AC_Implies_Maximal_Principles() {
  lemma Maximal_Equivalence() {
    assert(
      ∀p,q ∈ Maximal_Principles: p ↔ q
    )
  } →
  
  assert(
    ∃p ∈ Maximal_Principles: (Axiom_of_Choice ⇒ p) →
    ∀q ∈ Maximal_Principles: (Axiom_of_Choice ⇒ q)
  ) →
  
  lemma Known_Implications() {
    assert(
      Axiom_of_Choice ⇒ Kuratowski_Lemma ∧
      Axiom_of_Choice ⇒ Tukey_Lemma ∧
      Axiom_of_Choice ⇒ Zorn_Lemma ∧
      Axiom_of_Choice ⇒ Hausdorff_Maximal_Principle ∧
      {Kuratowski_Lemma, Tukey_Lemma, Zorn_Lemma, Hausdorff_Maximal_Principle} ⊆ Maximal_Principles
    )
  } →
  
  apply(Maximal_Equivalence()) →
  apply(Known_Implications()) →
  assert(Axiom_of_Choice ⇒ Maximal_Principles)
}