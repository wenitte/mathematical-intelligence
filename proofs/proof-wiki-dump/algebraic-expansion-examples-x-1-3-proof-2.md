theorem Algebraic_Expansion_Cube() {
  assert(
    ∀x ∈ ℝ ⇒ (x + 1)³ = x³ + 3x² + 3x + 1
  )
} ↔

proof Algebraic_Expansion_Cube() {
  setVar(x: ℝ) →
  
  lemma Square_Identity() {
    assert((x + 1)² = x² + 2x + 1)
  } →
  
  assert((x + 1)³) →
  assert((x + 1)(x² + 2x + 1)) ∧ {
    apply(Square_Identity())
  } →
  
  assert(x(x² + 2x + 1) + 1(x² + 2x + 1)) ∧ {
    apply(Distributive_Property)
  } →
  
  assert(x³ + 2x² + x + x² + 2x + 1) ∧ {
    apply(Distributive_Property)
  } →
  
  assert(x³ + 3x² + 3x + 1) ∧ {
    apply(Combine_Like_Terms)
  }
}