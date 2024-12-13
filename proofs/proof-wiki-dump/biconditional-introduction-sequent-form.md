theorem Biconditional_Introduction() {
  assert(
    ∀p,q ∈ Prop ⇒ [(p → q) ∧ (q → p) ⊢ (p ↔ q)]
  )
} ↔

proof Biconditional_Introduction_Tableau() {
  setVar(p,q: Prop) →
  premise1(p → q) →
  premise2(q → p) →
  apply(BiconditionalIntro: (p → q) ∧ (q → p) ⊢ (p ↔ q)) →
  assert(p ↔ q)
} ↔

proof Biconditional_Introduction_TruthTable() {
  setVar(p,q: Prop) →
  construct(TruthTable: [(p → q) ∧ (q → p), (p ↔ q)]) →
  lemma TruthTableAnalysis() {
    assert(
      ∀row ∈ TruthTable ⇒
      [(p → q) ∧ (q → p) = T ↔ (p ↔ q) = T]
    )
  } →
  apply(TruthTableAnalysis()) →
  assert([(p → q) ∧ (q → p)] ⊢ (p ↔ q))
}