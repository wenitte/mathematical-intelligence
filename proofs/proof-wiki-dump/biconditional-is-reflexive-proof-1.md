theorem BiconditionalReflexivity() {
  assert(
    ∀p ∈ PROP ⇒ (p ↔ p)  
  )
} ↔

proof BiconditionalReflexivity() {
  setVar(p: PROP) →
  lemma LawOfIdentity() {
    assert(p → p)
  } →
  apply(LawOfIdentity()) →
  assert((p → p) ∧ (p → p)) →
  apply(BiconditionalIntro) →
  assert(p ↔ p)
}