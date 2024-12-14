theorem Conditional_Equivalent_Negated_Conjunction() {
  assert(
    ∀p,q: Proposition ⇒ (p → q) ↔ ¬(p ∧ ¬q)
  )
} ↔

proof Conditional_Equivalent_Negated_Conjunction() {
  // Forward direction: (p → q) ⇒ ¬(p ∧ ¬q)
  assume(p → q) →
  {
    assume(p ∧ ¬q) →
    assert(p) by AndElim1(p ∧ ¬q) →
    assert(q) by ModusPonens(p → q, p) →
    assert(¬q) by AndElim2(p ∧ ¬q) →
    assert(⊥) by Contradiction(q, ¬q) →
    discharge()
  } →
  assert(¬(p ∧ ¬q)) by ProofByContradiction() →

  // Reverse direction: ¬(p ∧ ¬q) ⇒ (p → q)
  assume(¬(p ∧ ¬q)) →
  {
    assume(p) →
    {
      assume(¬q) →
      assert(p ∧ ¬q) by AndIntro(p, ¬q) →
      assert(⊥) by Contradiction(p ∧ ¬q, ¬(p ∧ ¬q)) →
      discharge()
    } →
    assert(q) by ReductioAdAbsurdum() →
    discharge()
  } →
  assert(p → q) by ImplicationIntro() →

  // Combine both directions
  assert((p → q) ↔ ¬(p ∧ ¬q)) by BiconditionalIntro()
}