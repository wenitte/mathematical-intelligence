theorem Conditional_Left_Distributive_Over_Conjunction() {
  assert(
    p ⇒ (q ∧ r) ↔ (p ⇒ q) ∧ (p ⇒ r)
  )
}

proof Forward_Implication() {
  setVar(p ⇒ (q ∧ r): Premise) →
  setVar(p: Assumption) →
  assert(q ∧ r by ModusPonendoPonens(1,2)) →
  assert(q by SimplificationRule(3)) →
  assert(r by SimplificationRule(3)) →
  assert(p ⇒ q by ImplicationIntro(2,4)) →
  assert(p ⇒ r by ImplicationIntro(2,5)) →
  assert((p ⇒ q) ∧ (p ⇒ r) by ConjunctionIntro(6,7))
}

proof Reverse_Implication() {
  setVar((p ⇒ q) ∧ (p ⇒ r): Premise) →
  assert((p ∧ p) ⇒ (q ∧ r) by SequentIntro(1)) →
  setVar(p: Assumption) →
  assert(p ∧ p by IdempotenceConjunction(3)) →
  assert(q ∧ r by ModusPonendoPonens(2,4)) →
  assert(p ⇒ (q ∧ r) by ImplicationIntro(3,5))
}

proof Complete_Proof() {
  apply(Forward_Implication()) ∧
  apply(Reverse_Implication()) →
  assert(p ⇒ (q ∧ r) ↔ (p ⇒ q) ∧ (p ⇒ r))
}