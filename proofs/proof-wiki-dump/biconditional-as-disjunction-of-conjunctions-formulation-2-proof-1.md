theorem Biconditional_As_Disjunction() {
  assert(
    ⊢ (p ↔ q) ↔ ((p ∧ q) ∨ (¬p ∧ ¬q))
  )
}

proof Biconditional_As_Disjunction() {
  // Forward direction
  assumePool(1) {
    assume((p ↔ q)) →
    assert((p ∧ q) ∨ (¬p ∧ ¬q)) by(Biconditional_As_Disjunction_Form1)
  } →
  derive((p ↔ q) → ((p ∧ q) ∨ (¬p ∧ ¬q))) by(ImplicationIntro) →

  // Reverse direction
  assumePool(4) {
    assume((p ∧ q) ∨ (¬p ∧ ¬q)) →
    assert(p ↔ q) by(Biconditional_As_Disjunction_Form1)
  } →
  derive(((p ∧ q) ∨ (¬p ∧ ¬q)) → (p ↔ q)) by(ImplicationIntro) →

  // Combine both directions
  assert((p ↔ q) ↔ ((p ∧ q) ∨ (¬p ∧ ¬q))) by(BiconditionalIntro)
}