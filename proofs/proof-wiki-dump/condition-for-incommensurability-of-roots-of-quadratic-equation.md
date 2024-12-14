theorem Incommensurable_Quadratic_Roots() {
  assert(
    ∀a,b,x ∈ ℝ: ax - x² = b²/4 ⇒
    (x ⌣ (a-x) ⇔ a ⌣ √(a²-b²))
  )
} ↔

proof Incommensurable_Quadratic_Roots() {
  setVar(a,b,x: ℝ) →
  assert(ax - x² = b²/4) →
  
  lemma Algebraic_Manipulation() {
    assert(x(a-x) + (a/2-x)² = ax - x² + a²/4 - ax + x²) →
    assert(= a²/4) →
    assert(4x(a-x) + 4(a/2-x)² = a²) →
    assert(b² + (a-2x)² = a²) →
    assert(a² - b² = (a-2x)²) →
    assert(√(a²-b²) = a-2x)
  } →

  lemma Necessary_Condition() {
    assume((a-x) ⌣ x) →
    apply(Incommensurability_Sum_Rule) →
    assert(a ⌣ x) →
    apply(Rational_Ratio_Commensurable) →
    assert(x ⟂ 2x) →
    assert(a ⌣ 2x) →
    assert(⌣ (a-2x)) →
    apply(Algebraic_Manipulation()) →
    assert(⌣ √(a²-b²))
  } →

  lemma Sufficient_Condition() {
    assume(a ⌣ √(a²-b²)) →
    apply(Algebraic_Manipulation()) →
    assert(a ⌣ (a-2x)) →
    assert(⌣ 2x) →
    apply(Rational_Ratio_Commensurable) →
    assert(x ⟂ 2x) →
    apply(Commensurable_Same_Magnitude) →
    assert(a ⌣ x) →
    apply(Incommensurability_Sum_Rule) →
    assert((a-x) ⌣ x)
  } →

  apply(Necessary_Condition()) ∧
  apply(Sufficient_Condition()) →
  assert(x ⌣ (a-x) ⇔ a ⌣ √(a²-b²))
}

note {
  source: "Euclid's Elements, Book X, Proposition 18"
  where: 
    ⌣ denotes incommensurability
    ⟂ denotes commensurability
}