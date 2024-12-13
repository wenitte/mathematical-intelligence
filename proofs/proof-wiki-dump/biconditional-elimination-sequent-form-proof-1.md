theorem Biconditional_Elimination() {
  assert(
    ∀p,q ∈ Prop → [
      (p ↔ q) ⊢ (p → q) ∧
      (p ↔ q) ⊢ (q → p)
    ]
  )
}

proof Biconditional_Elimination() {
  // Part 1: p ↔ q ⊢ p → q
  proof Part1() {
    setVar(p,q: Prop) →
    assume(p ↔ q) →
    apply(BiconditionalElimination1) →
    assert(p → q)
  } →

  // Part 2: p ↔ q ⊢ q → p
  proof Part2() {
    setVar(p,q: Prop) →
    assume(p ↔ q) →
    apply(BiconditionalElimination2) →
    assert(q → p)
  } →

  // Combine both parts
  apply(Part1()) ∧
  apply(Part2()) →
  assert((p ↔ q) ⊢ (p → q) ∧ (p ↔ q) ⊢ (q → p))
}