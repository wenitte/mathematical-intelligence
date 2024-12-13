theorem DisjunctionAbsorptionLaw() {
  assert(
    ∀p,q ∈ BOOL ⇒ (p ∨ (p ∧ q)) ↔ p
  )
}

proof DisjunctionAbsorptionLaw() {
  setVar(p,q: BOOL) →
  assert(p ∨ (p ∧ q)) →
  assert(p ∨ (p ∧ q) = (p ∧ ⊤) ∨ (p ∧ q)) {
    by(ConjunctionWithTautology)
  } →
  assert((p ∧ ⊤) ∨ (p ∧ q) = p ∧ (⊤ ∨ q)) {
    by(ConjunctionLeftDistributive)
  } →
  assert(p ∧ (⊤ ∨ q) = p ∧ ⊤) {
    by(DisjunctionWithTautology)
  } →
  assert(p ∧ ⊤ = p) {
    by(ConjunctionWithTautology)
  } →
  conclude(p ∨ (p ∧ q) = p)
}