theorem ClaviusLawForm2() {
  assert(
    (¬p → p) → p
  )
} ↔

proof ClaviusLawForm2() {
  assume(premise1: ¬p → p) →
  lemma ClaviusLawForm1() {
    assert(
      (p ∨ ¬p) ∧
      (¬p → p) →
      p
    )
  } →
  apply(ClaviusLawForm1()) →
  assert(p) →
  ruleImplication(premise1: ¬p → p, conclusion: p) →
  assert((¬p → p) → p)
} ↔

notes() {
  dependsOn(LawOfExcludedMiddle) ∧
  validIn(ClassicalLogic) ∧
  invalidIn(IntuitionisticLogic)
}