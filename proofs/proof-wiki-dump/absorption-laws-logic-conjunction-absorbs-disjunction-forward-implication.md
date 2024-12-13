theorem Absorption_Law_Conjunction() {
  assert(
    ∀p,q: PROP ⇒ (p ∧ (p ∨ q)) ⊢ p
  )
} ↔

proof Absorption_Law_Conjunction() {
  setVar(p,q: PROP) →
  assert(p ∧ (p ∨ q)) →
  applyRule(∧-Elimination) →
  assert(p) →
  conclude()
}