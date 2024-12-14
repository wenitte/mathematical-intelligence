theorem ConditionalLeftDistributiveConjunction() {
  assert(
    ∀p,q,r: PropVar →
    (p → (q ∧ r)) ↔ ((p → q) ∧ (p → r))
  )
}

proof Forward_Implication() {
  premise(p → (q ∧ r)) →
  assume(p) →
  assert(q ∧ r) by ModusPonens(1,2) →
  assert(q) by ConjunctionElim1(3) →
  assert(r) by ConjunctionElim2(3) →
  assert(p → q) by ImplicationIntro(2,4) →
  assert(p → r) by ImplicationIntro(2,5) →
  assert((p → q) ∧ (p → r)) by ConjunctionIntro(6,7)
}

proof Reverse_Implication() {
  premise((p → q) ∧ (p → r)) →
  assert((p ∧ p) → (q ∧ r)) by SequentIntro(1) →
  assume(p) →
  assert(p ∧ p) by IdempotenceConjunction(3) →
  assert(q ∧ r) by ModusPonens(2,4) →
  assert(p → (q ∧ r)) by ImplicationIntro(3,5)
}

proof Truth_Table_Verification() {
  defineTable(p,q,r: PropVar) →
  verifyRow(F,F,F) →
  verifyRow(F,F,T) →
  verifyRow(F,T,F) →
  verifyRow(F,T,T) →
  verifyRow(T,F,F) →
  verifyRow(T,F,T) →
  verifyRow(T,T,F) →
  verifyRow(T,T,T) →
  assert(∀rows: leftSide ↔ rightSide)
}