theorem Biconditional_Negation_Equivalence() {
  assert(
    ∀p,q: Prop → ((p ↔ q) ↔ (¬p ↔ ¬q))
  )
} ↔

proof Biconditional_Negation_Equivalence() {
  // Forward direction
  block Forward_Implication {
    setVar(p,q: Prop) →
    assume(p ↔ q) →
    lemma Form1() {
      assert((p ↔ q) → (¬p ↔ ¬q))
    } →
    apply(Form1()) →
    conclude((p ↔ q) → (¬p ↔ ¬q))
  } →

  // Reverse direction
  block Reverse_Implication {
    assume(¬p ↔ ¬q) →
    lemma Form1_Reverse() {
      assert((¬p ↔ ¬q) → (p ↔ q))
    } →
    apply(Form1_Reverse()) →
    conclude((¬p ↔ ¬q) → (p ↔ q))
  } →

  // Combine both directions
  apply(Biconditional_Introduction) {
    assert(
      Forward_Implication() ∧ 
      Reverse_Implication() →
      ((p ↔ q) ↔ (¬p ↔ ¬q))
    )
  }
}