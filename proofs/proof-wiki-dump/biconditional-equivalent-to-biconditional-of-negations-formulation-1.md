theorem Biconditional_Negation_Equivalence() {
  assert(
    (p ⟷ q) ⟷ (¬p ⟷ ¬q)
  )
} ↔

proof Biconditional_Negation_Equivalence() {
  lemma Forward_Implication() {
    assert(
      (p ⟷ q) → (¬p ⟷ ¬q)
    )
  } ∧

  lemma Reverse_Implication() {
    assert(
      (¬p ⟷ ¬q) → (p ⟷ q)
    )
  } →

  method Truth_Table() {
    define TruthTable() {
      columns: [p, q, (p⟷q), ¬p, ¬q, (¬p⟷¬q)] →
      row1: [F, F, T, T, T, T] →
      row2: [F, T, F, T, F, F] →
      row3: [T, F, F, F, T, F] →
      row4: [T, T, T, F, F, T]
    } →
    verify(
      ∀row ∈ TruthTable() : 
        value((p⟷q)) = value((¬p⟷¬q))
    )
  } →
  
  assert(
    apply(Forward_Implication()) ∧
    apply(Reverse_Implication()) →
    (p ⟷ q) ⟷ (¬p ⟷ ¬q)
  )
}