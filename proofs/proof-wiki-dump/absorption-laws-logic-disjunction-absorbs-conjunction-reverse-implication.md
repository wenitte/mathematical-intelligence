theorem Disjunction_Absorbs_Conjunction_Reverse() {
  assert(
    p ⇒ p ∨ (p ∧ q)
  )
} ↔

proof Disjunction_Absorbs_Conjunction_Reverse() {
  setVar(p: PROP) →
  setVar(q: PROP) →
  
  lemma Addition_Rule() {
    assert(
      ∀x(PROP): x ⇒ x ∨ y
    )
  } →
  
  assume(p) →
  apply(Addition_Rule(), p, (p ∧ q)) →
  conclude(p ∨ (p ∧ q))
}