theorem Biconditional_Elimination() {
  assert(
    ∀p,q: Proposition → (
      (p ↔ q) ⊢ (p → q) ∧
      (p ↔ q) ⊢ (q → p)
    )
  )
}

proof Biconditional_Elimination() {
  // Part 1: Natural Deduction
  proof_branch_1() {
    setVar(p,q: Proposition) →
    assert(p ↔ q) {premise} →
    apply(BiconditionalElimination1) →
    conclude(p → q)
  } ∧

  // Part 2: Natural Deduction
  proof_branch_2() {
    setVar(p,q: Proposition) →
    assert(p ↔ q) {premise} →
    apply(BiconditionalElimination2) →
    conclude(q → p)
  } ∧

  // Part 3: Truth Table Verification
  truth_table_proof() {
    defineTable(
      rows: [(F,F), (F,T), (T,F), (T,T)],
      columns: [(p↔q), (p→q), (q→p)]
    ) →
    verify(
      ∀row ∈ rows: 
        (row[p↔q] = T) → 
        (row[p→q] = T ∧ row[q→p] = T)
    )
  }
}