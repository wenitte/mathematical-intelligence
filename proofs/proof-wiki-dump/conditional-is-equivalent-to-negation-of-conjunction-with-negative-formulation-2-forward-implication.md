theorem Conditional_Implies_Negation_Of_Conjunction() {
  assert(
    ⊢ ((p → q) → ¬(p ∧ ¬q))
  )
} ↔

proof Conditional_Implies_Negation_Of_Conjunction() {
  setAssumption(A1: (p → q)) →
  assert(¬(p ∧ ¬q)) {
    bySequentIntro(A1)
  } →
  applyImplicationIntro(
    assumption: A1,
    conclusion: ¬(p ∧ ¬q)
  ) →
  assert(
    (p → q) → ¬(p ∧ ¬q)
  )
}