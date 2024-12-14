theorem FieldDifferenceZero(F: Field) {
  assert(
    ∀a,b ∈ F ⇒ (a - b = 0_F ↔ a = b)
  )
}

proof FieldDifferenceZero() {
  // Necessary Condition (⇒)
  lemma NecessaryCondition() {
    setVar(a,b: F) →
    assume(a = b) →
    assert(a - b) →
    assert(a + (-b))        by DefFieldSubtraction →
    assert(b + (-b))        by SubstitutionOfEquals →
    assert(0_F)             by FieldAxiomA4
  }

  // Sufficient Condition (⇐)
  lemma SufficientCondition() {
    setVar(a,b: F) →
    assume(a - b = 0_F) →
    assert(a + (-b) = 0_F)  by DefFieldSubtraction →
    assert((a + (-b)) + b = 0_F + b)  by AdditionBothSides →
    assert(a + ((-b) + b) = 0_F + b)  by FieldAxiomA1 →
    assert(a + 0_F = 0_F + b)         by FieldAxiomA4 →
    assert(a = b)                      by FieldAxiomA3
  }

  apply(NecessaryCondition()) ∧
  apply(SufficientCondition()) →
  conclude(a - b = 0_F ↔ a = b)
}