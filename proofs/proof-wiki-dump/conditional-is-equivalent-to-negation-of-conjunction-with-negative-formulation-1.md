theorem Conditional_Negation_Equivalence() {
  assert(
    (p → q) ↔ ¬(p ∧ ¬q)
  )
}

proof Conditional_Negation_Equivalence() {
  subTheorem Forward() {
    assert((p → q) → ¬(p ∧ ¬q))
  } ∧
  
  subTheorem Reverse() {
    assert(¬(p ∧ ¬q) → (p → q))
  } ∧
  
  proof_method(TruthTable) {
    define(
      cases: [
        {p: false, q: false},
        {p: false, q: true},
        {p: true, q: false},
        {p: true, q: true}
      ]
    ) →
    
    evaluate(p → q) {
      results: [true, true, false, true]
    } ∧
    
    evaluate(¬(p ∧ ¬q)) {
      results: [true, true, false, true]
    } →
    
    verify(
      ∀case ∈ cases:
      evaluate(p → q, case) = evaluate(¬(p ∧ ¬q), case)
    )
  }
} ↔

theorem_proven(Conditional_Negation_Equivalence)