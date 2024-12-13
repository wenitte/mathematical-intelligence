theorem Cardinal_Equal_Cardinal() {
  assert(
    ∀S: Set ∧ (S ∼ card(S)) →
    card(card(S)) = card(S)
  )
} ↔

theorem Cardinal_Number_Condition() {
  assert(
    ∀x: Ordinal ∧ ∀ℕ: CardinalNumbers →
    (x ∈ ℕ ↔ x = card(x))
  )
} ↔

proof Cardinal_Equal_Cardinal() {
  setVar(S: Set) →
  assume(S ∼ card(S)) →
  
  lemma Set_Equivalence() {
    assert(
      ∀A,B: Set →
      (A ∼ B → card(A) = card(B))
    )
  } →
  
  apply(Set_Equivalence(), {A: S, B: card(S)}) →
  assert(card(S) = card(card(S))) →
  conclude()
} ↔

proof Cardinal_Number_Condition() {
  setVar(x: Ordinal) →
  setVar(ℕ: CardinalNumbers) →
  
  apply(Cardinal_Equal_Cardinal()) →
  assert(x ∈ ℕ ↔ x = card(x)) →
  conclude()
}