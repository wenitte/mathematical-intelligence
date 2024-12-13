theorem Biconditional_Commutativity() {
  assert(
    ∀p,q ∈ PropositionalFormulas ⇒ ((p ↔ q) ↔ (q ↔ p))
  )
} ↔

proof Biconditional_Commutativity() {
  branch Pool_1() {
    assume((p ↔ q)) →
    apply(Biconditional_Commutativity_Form1()) →
    derive((q ↔ p)) →
    conclude((p ↔ q) → (q ↔ p))
  } →
  
  branch Pool_4() {
    assume((q ↔ p)) →
    apply(Biconditional_Commutativity_Form1()) →
    derive((p ↔ q)) →
    conclude((q ↔ p) → (p ↔ q))
  } →
  
  applyRule(BiconditionalIntroduction, {
    premise1: Pool_1,
    premise2: Pool_4
  }) →
  
  assert((p ↔ q) ↔ (q ↔ p))
}