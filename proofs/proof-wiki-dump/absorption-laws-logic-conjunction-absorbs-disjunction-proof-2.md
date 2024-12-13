theorem AbsorptionLawConjunction() {
  assert(
    ∀p,q ∈ BOOL ⇒ (p ∧ (p ∨ q)) ↔ p
  )
}

proof AbsorptionLawConjunction() {
  setVar(p,q: BOOL) →
  assert(p ∧ (p ∨ q)) →
  assert((p ∨ ⊥) ∧ (p ∨ q)) by DisjunctionContradiction →
  assert(p ∨ (⊥ ∧ q)) by DisjunctionLeftDistributive →
  assert(p ∨ ⊥) by ConjunctionContradiction →
  assert(p) by DisjunctionContradiction
}