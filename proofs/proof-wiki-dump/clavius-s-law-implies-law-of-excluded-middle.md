theorem ClaviusImpliesExcludedMiddle() {
  assert(
    (¬p → p) → (p ∨ ¬p)
  )
} ↔

proof ClaviusImpliesExcludedMiddle() {
  assume(¬(p ∨ ¬p)) →
  lemma Contradiction() {
    assert(¬(p ∨ ¬p) → ⊥)
  } →
  apply(Contradiction()) →
  assert(⊥) →
  apply(ExplosionRule(⊥)) →
  assert(p ∨ ¬p) →
  discharge(¬(p ∨ ¬p)) →
  assert(¬(p ∨ ¬p) → (p ∨ ¬p)) →
  apply(ClaviusLaw()) →
  assert(p ∨ ¬p)
}