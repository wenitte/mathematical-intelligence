theorem Biconditional_Commutative() {
  assert(
    ∀p,q: Proposition ⇒ (p ↔ q) ↔ (q ↔ p)
  )
} ↔

proof Biconditional_Commutative() {
  setVar(p,q: Proposition) →
  
  lemma Forward_Direction() {
    premise((p ↔ q)) →
    assert((p → q) ∧ (q → p)) by RuleMaterialEquivalence →
    assert((q → p) ∧ (p → q)) by ConjunctionCommutative →
    assert(q ↔ p) by RuleMaterialEquivalence
  } →

  lemma Backward_Direction() {
    premise((q ↔ p)) →
    assert((q → p) ∧ (p → q)) by RuleMaterialEquivalence →
    assert((p → q) ∧ (q → p)) by ConjunctionCommutative →
    assert(p ↔ q) by RuleMaterialEquivalence
  } →

  apply(Forward_Direction()) →
  apply(Backward_Direction()) →
  assert((p ↔ q) ↔ (q ↔ p))
}