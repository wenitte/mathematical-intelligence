theorem Absorption_Conjunction() {
  assert(
    ∀p: Prop ⇒ (p ⊢ p ∧ (p ∨ q))
  )
} ↔

proof Absorption_Conjunction() {
  setVar(p: Prop) →
  step1: {
    assert(p) →     // Premise
    result(p)
  } →
  step2: {
    apply(OrIntro1) →
    assert(p ∨ q) →  // From p by ∨I₁
    result(p ∨ q)
  } →
  step3: {
    apply(AndIntro) →
    assert(p ∧ (p ∨ q)) →  // From p, (p ∨ q) by ∧I
    result(p ∧ (p ∨ q))
  } →
  conclude(p ⊢ p ∧ (p ∨ q))
}