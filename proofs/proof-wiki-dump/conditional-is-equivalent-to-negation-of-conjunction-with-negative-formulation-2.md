theorem ConditionalEquivalence() {
  assert(
    ∀p,q: PropVar ⇒ ((p → q) ↔ ¬(p ∧ ¬q))
  )
} ↔

proof ConditionalEquivalence() {
  // Forward direction
  proof ForwardImplication() {
    setVar(p,q: PropVar) →
    assume(p → q) →
    assume(p ∧ ¬q) →
    assert(p) by and_elim_1(p ∧ ¬q) →
    assert(q) by modus_ponens(p → q, p) →
    assert(¬q) by and_elim_2(p ∧ ¬q) →
    assert(⊥) by contradiction(q, ¬q) →
    assert(¬(p ∧ ¬q)) by proof_by_contradiction()
  } →

  // Reverse direction
  proof ReverseImplication() {
    assume(¬(p ∧ ¬q)) →
    assume(p) →
    assume(¬q) →
    assert(p ∧ ¬q) by and_intro(p, ¬q) →
    assert(⊥) by contradiction(p ∧ ¬q, ¬(p ∧ ¬q)) →
    assert(q) by reductio_ad_absurdum() →
    assert(p → q) by implies_intro()
  } →

  // Truth table verification
  proof TruthTableVerification() {
    assert(
      evaluate((p → q) ↔ ¬(p ∧ ¬q), [
        [F,F] → T,
        [F,T] → T,
        [T,F] → T,
        [T,T] → T
      ])
    )
  } →
  
  assert((p → q) ↔ ¬(p ∧ ¬q)) by biconditional_intro(ForwardImplication(), ReverseImplication())
}