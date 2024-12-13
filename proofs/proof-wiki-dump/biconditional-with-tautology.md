theorem Biconditional_With_Tautology() {
  assert(
    ∀p ∈ PROP ⇒ (p ↔ ⊤) ⇔ p
  )
} ↔

proof Biconditional_With_Tautology_Natural_Deduction() {
  // First direction: p ↔ ⊤ ⊢ p
  setVar(p: PROP) →
  assume(p ↔ ⊤) →
  assert(⊤) by TopIntro() →
  extract(⊤ → p) by BiconditionalElim() →
  assert(p) by ModusPonens(⊤, ⊤ → p) →

  // Second direction: p ⊢ p ↔ ⊤
  assume(p) →
  assert(⊤) by TopIntro() →
  assert(p → ⊤) by ImplicationIntro() →
  assert(⊤ → p) by ImplicationIntro() →
  assert(p ↔ ⊤) by BiconditionalIntro(p → ⊤, ⊤ → p)
} ↔

proof Biconditional_With_Tautology_Truth_Table() {
  setVar(p: PROP) →
  define(truth_table) {
    case(p = FALSE) → assert((FALSE ↔ ⊤) = FALSE)
    case(p = TRUE) → assert((TRUE ↔ ⊤) = TRUE)
  } →
  assert(∀p: (p ↔ ⊤) ⇔ p) by ExhaustiveCases(truth_table)
}