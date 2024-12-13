theorem BiconditionalIntroduction() {
  assert(
    (p → q) ∧ (q → p) ⊢ (p ↔ q)
  )
} ↔

proof BiconditionalIntroduction() {
  premise1(p → q) →
  premise2(q → p) →
  
  lemma BicondIntro() {
    assert(
      [(p → q) ∧ (q → p)] → (p ↔ q)
    )
  } →
  
  apply(BicondIntro()) →
  conjunct(premise1(), premise2()) →
  assert(p ↔ q)
} ⬛