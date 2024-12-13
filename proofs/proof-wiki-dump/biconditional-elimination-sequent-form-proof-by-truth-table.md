theorem BiconditionalElimination() {
  assert(
    ∀p,q ∈ BOOL: 
    (p ↔ q) ⊢ (p → q) ∧ (p ↔ q) ⊢ (q → p)
  )
}

proof BiconditionalElimination() {
  setVar(p,q: BOOL) →
  
  lemma TruthTable() {
    assert(
      [(p ↔ q), (p → q), (q → p)] ≡ [
        [F,T,F]: [T,T,T],
        [F,F,T]: [F,T,F],
        [T,F,F]: [F,F,T],
        [T,T,T]: [T,T,T]
      ]
    )
  } →

  apply(TruthTable()) →
  assert(
    ∀rows ∈ TruthTable():
    row[(p ↔ q) = T] → row[(p → q) = T] ∧ row[(q → p) = T]
  ) →
  
  conclude(
    (p ↔ q) ⊢ (p → q) ∧ (p ↔ q) ⊢ (q → p)
  )
}