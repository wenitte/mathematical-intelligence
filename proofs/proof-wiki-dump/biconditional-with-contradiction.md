theorem Biconditional_Contradiction() {
  assert(
    ∀p ∈ BOOL: (p ↔ ⊥) ↔ ¬p
  )
}

proof Biconditional_Contradiction_Natural_Deduction() {
  // Forward direction
  lemma Forward() {
    setVar(p: BOOL) →
    assert(p ↔ ⊥) →
    extract(p → ⊥) →  // From biconditional elimination
    assert(¬p)  // From contradiction consequent
  } →

  // Reverse direction
  lemma Reverse() {
    setVar(p: BOOL) →
    assert(¬p) →
    assert(p → ⊥) →  // From contradiction consequent
    assert(⊤) →  // Top introduction
    assert(⊥ → p) →  // From contradiction antecedent
    assert(p ↔ ⊥)  // From biconditional introduction
  } →

  apply(Forward()) ∧ apply(Reverse())
}

proof Biconditional_Contradiction_Truth_Table() {
  defineTable([p, (p ↔ ⊥), ¬p]) {
    row(F, T, T) →
    row(T, F, F)
  } →
  assert(∀rows: ((p ↔ ⊥) ↔ ¬p))
}

note Completeness() {
  assert(
    apply(Biconditional_Contradiction_Natural_Deduction()) ∧
    apply(Biconditional_Contradiction_Truth_Table())
  )
}