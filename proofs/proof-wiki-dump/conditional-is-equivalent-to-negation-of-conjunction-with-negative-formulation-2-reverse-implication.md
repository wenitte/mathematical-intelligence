theorem Conditional_Negation_Conjunction() {
  assert(
    ∀p,q ∈ Prop ⇒ (¬(p ∧ ¬q) → (p → q))
  )
} ↔

proof Conditional_Negation_Conjunction() {
  setVar(p,q: Prop) →
  
  lemma Tableau_Step1() {
    assert(¬(p ∧ ¬q)) →
    setAssumption(1)
  } →
  
  lemma Tableau_Step2() {
    assert((p → q)) →
    applyRule(SequentIntro, 1) →
    useTheorem(Conditional_Negation_Conjunction_Form1)
  } →
  
  lemma Implication_Formation() {
    assert(¬(p ∧ ¬q) → (p → q)) →
    applyRule(ImplicationIntro) →
    discharge(Assumption(1))
  } →
  
  note LEM_Dependency() {
    assert(
      useAxiom(LawExcludedMiddle) ∧
      requiresClassicalLogic()
    )
  }
}