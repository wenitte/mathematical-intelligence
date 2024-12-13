theorem WFF_Example_1() {
  assert(
    isWFF(p ∧ q → ¬(q ∨ r))
  )
} ↔

proof WFF_Example_1() {
  // Initial assumption
  assert(isWFF(p) ∧ isWFF(q) ∧ isWFF(r)) by Rule(W:P₀) →
  
  // Build up compound expressions
  lemma Compound_1() {
    assert(isWFF(p ∧ q)) by Rule(W:OP)
  } →
  
  lemma Compound_2() {
    assert(isWFF(q ∨ r)) by Rule(W:OP)
  } →
  
  lemma Negation() {
    apply(Compound_2()) →
    assert(isWFF(¬(q ∨ r))) by Rule(W:¬)
  } →
  
  // Final implication
  apply(Compound_1()) →
  apply(Negation()) →
  assert(isWFF(p ∧ q → ¬(q ∨ r))) by Rule(W:OP)
}