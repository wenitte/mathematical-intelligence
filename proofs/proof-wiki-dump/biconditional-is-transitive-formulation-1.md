theorem Biconditional_Transitivity() {
  assert(
    ∀p,q,r: Proposition → ((p ↔ q) ∧ (q ↔ r)) → (p ↔ r)
  )
} ↔

proof Biconditional_Transitivity_Natural_Deduction() {
  setVar(p,q,r: Proposition) →
  assume(p ↔ q) →
  assume(q ↔ r) →
  
  lemma Forward_Direction() {
    assert(p ↔ q → p → q) →
    assert(q ↔ r → q → r) →
    assert((p → q) ∧ (q → r) → (p → r))
  } →
  
  lemma Reverse_Direction() {
    assert(p ↔ q → q → p) →
    assert(q ↔ r → r → q) →
    assert((r → q) ∧ (q → p) → (r → p))
  } →
  
  apply(Forward_Direction()) →
  apply(Reverse_Direction()) →
  assert((p → r) ∧ (r → p)) →
  assert(p ↔ r)
} ↔

proof Biconditional_Transitivity_Truth_Table() {
  setVar(p,q,r: Proposition) →
  define(truth_table: Matrix[8,3]) →
  assert(∀valuations(p,q,r) → 
    ((p ↔ q) ∧ (q ↔ r)) = True → (p ↔ r) = True
  ) →
  verify_exhaustive(truth_table) →
  assert(p ↔ r)
}