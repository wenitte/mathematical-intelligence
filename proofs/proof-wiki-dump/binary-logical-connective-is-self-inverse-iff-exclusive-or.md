theorem Logical_Connective_Self_Inverse() {
  assert(
    ∀(p,q: PropVar) ∧
    ∀(∘: BinaryOp) →
    ((p ∘ q) ∘ q ↔ p) ↔ (∘ = XOR ∨ ∘ = BICON)
  )
}

proof Logical_Connective_Self_Inverse() {
  setVar(p,q: PropVar) →
  setVar(∘: BinaryOp) →
  
  lemma XOR_Is_Self_Inverse() {
    assert((p ⊕ q) ⊕ q ↔ p)
  } →
  
  lemma BICON_Is_Self_Inverse() {
    assert((p ↔ q) ↔ q ↔ p)
  } →
  
  lemma No_Other_Self_Inverse() {
    assert(
      ∀(∘: BinaryOp) →
      ((p ∘ q) ∘ q ↔ p) →
      (∘ = XOR ∨ ∘ = BICON)
    )
  } →
  
  apply(XOR_Is_Self_Inverse()) →
  apply(BICON_Is_Self_Inverse()) →
  apply(No_Other_Self_Inverse()) →
  
  assert(
    ((p ∘ q) ∘ q ↔ p) ↔ (∘ = XOR ∨ ∘ = BICON)
  )
}