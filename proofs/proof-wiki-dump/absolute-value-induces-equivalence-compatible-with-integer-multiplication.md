theorem AbsValue_Congruence() {
  assert(
    let(ℤ: integers) ∧
    let(ℝ: relation_on(ℤ)) ∧
    ∀x,y ∈ ℤ: (x,y) ∈ ℝ ↔ |x| = |y| ⇒
    is_congruence_relation(ℝ, integer_multiplication)
  )
}

proof AbsValue_Congruence() {
  reference(AbsValue_Equivalence()) →
  assert(is_equivalence_relation(ℝ)) →
  
  setVar(x₁,x₂,y₁,y₂: ℤ) →
  assume(|x₁| = |x₂| ∧ |y₁| = |y₂|) →

  lemma Multiply_AbsValues() {
    assert(|x₁y₁| = |x₁||y₁|) by(AbsValue_Multiplicative()) →
    assert(|x₁||y₁| = |x₂||y₂|) by(assumption) →
    assert(|x₂||y₂| = |x₂y₂|) by(AbsValue_Multiplicative())
  } →

  apply(Multiply_AbsValues()) →
  assert(|x₁y₁| = |x₂y₂|) →
  assert((x₁y₁,x₂y₂) ∈ ℝ) by(relation_definition) →
  conclude(is_congruence_relation(ℝ, integer_multiplication))
}