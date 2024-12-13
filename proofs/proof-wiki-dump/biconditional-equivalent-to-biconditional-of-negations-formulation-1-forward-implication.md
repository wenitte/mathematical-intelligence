theorem BiconditionalNegationsEquivalence() {
  assert(
    ∀p,q ∈ PROP: (p ↔ q) → (¬p ↔ ¬q)
  )
} ↔

proof BiconditionalNegationsEquivalence() {
  setVar(p,q: PROP) →
  assume(p ↔ q) →
  
  lemma BiconditionalElim1() {
    assert((p ↔ q) → (p → q))
  } →
  apply(BiconditionalElim1()) →
  assert(p → q) →
  
  lemma Transposition1() {
    assert((p → q) → (¬q → ¬p))
  } →
  apply(Transposition1()) →
  assert(¬q → ¬p) →
  
  lemma BiconditionalElim2() {
    assert((p ↔ q) → (q → p))
  } →
  apply(BiconditionalElim2()) →
  assert(q → p) →
  
  lemma Transposition2() {
    assert((q → p) → (¬p → ¬q))
  } →
  apply(Transposition2()) →
  assert(¬p → ¬q) →
  
  lemma BiconditionalIntro() {
    assert(((¬p → ¬q) ∧ (¬q → ¬p)) → (¬p ↔ ¬q))
  } →
  apply(BiconditionalIntro()) →
  assert(¬p ↔ ¬q)
}