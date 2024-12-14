theorem CevasTheorem() {
  assert(
    ∀triangle(ABC) ∧ ∀points(L,M,N) ∈ sides(BC,AC,AB) ⇒
    concurrent(AL,BM,CN) ↔ (BL/LC × CM/MA × AN/NB = 1)
  )
}

proof CevasTheorem() {
  // Necessary Condition
  lemma NecessaryCondition() {
    assume(concurrent(AL,BM,CN) at P) →
    apply(MenelausTheorem, triangle(LAB)) →
    assert(LP/PA × AN/NB × BC/CL = -1) →
    apply(MenelausTheorem, triangle(LAC)) →
    assert(LP/PA × AM/MC × CB/BL = -1) →
    
    // Directed segments substitution
    setVar(AM = -MA, MC = -CM, CL = -LC, CB = -BC) →
    assert(AN/NB × BC/-LC = -MA/-CM × -BC/BL) →
    assert(AN/NB × BC/LC = MA/CM × BC/BL) →
    assert(CM/MA × AN/NB × BL/LC = 1)
  }

  // Sufficient Condition
  lemma SufficientCondition() {
    assume(CM/MA × AN/NB × BL/LC = 1) →
    assume(concurrent(BM,CN) at P) →
    let(AL' = line(AP) ∩ BC, L' ≠ L) →
    apply(NecessaryCondition) →
    assert(CM/MA × AN/NB × BL'/L'C = 1) →
    assert(BL'/L'C = BL/LC) →
    assert(BC/L'C = BC/LC) →
    assert(LC = L'C) →
    conclude(L = L') →
    contradiction() →
    assert(concurrent(AL,BM,CN) at P)
  }

  apply(NecessaryCondition) ∧ apply(SufficientCondition) →
  conclude(theorem)
}