theorem Biconditional_Negation_Equivalence() {
  assert(
    ∀p,q: Proposition ⇒ (¬p ↔ ¬q) ⊢ (p ↔ q)
  )
} ↔

proof Biconditional_Negation_Equivalence() {
  setVar(p,q: Proposition) →
  premise(¬p ↔ ¬q) →
  
  lemma Bicond_Elim_1() {
    assert((¬p ↔ ¬q) → (¬p → ¬q))
  } →
  apply(Bicond_Elim_1()) →
  
  lemma Transposition_1() {
    assert((¬p → ¬q) → (¬¬q → ¬¬p))
  } →
  apply(Transposition_1()) →
  
  lemma Double_Neg_Elim_1() {
    assert((¬¬q → ¬¬p) → (q → p))
  } →
  apply(Double_Neg_Elim_1()) →
  
  lemma Bicond_Elim_2() {
    assert((¬p ↔ ¬q) → (¬q → ¬p))
  } →
  apply(Bicond_Elim_2()) →
  
  lemma Transposition_2() {
    assert((¬q → ¬p) → (¬¬p → ¬¬q))
  } →
  apply(Transposition_2()) →
  
  lemma Double_Neg_Elim_2() {
    assert((¬¬p → ¬¬q) → (p → q))
  } →
  apply(Double_Neg_Elim_2()) →
  
  assert((p → q) ∧ (q → p)) →
  conclude(p ↔ q)
}