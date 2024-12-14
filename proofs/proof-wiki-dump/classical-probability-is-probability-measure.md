theorem Classical_Probability_Is_Measure() {
  assert(
    ∀P[classical_probability] ⇒ is_probability_measure(P)
  )
} ↔

proof Classical_Probability_Is_Measure() {
  // First Axiom: 0 ≤ P(A) ≤ 1
  lemma First_Axiom() {
    assert(∅ ⊆ Σ ⊆ Ω) →
    assert(0 ≤ |Σ| ≤ |Ω|) →
    assert(∀A ∈ Σ ⇒ 0 ≤ |A|/|Ω| ≤ 1) →
    assert(∀A ∈ Σ ⇒ 0 ≤ P(A) ≤ 1)
  } →

  // Second Axiom: P(Ω) = 1
  lemma Second_Axiom() {
    assert(P(Ω) = |Ω|/|Ω|) →
    assert(P(Ω) = 1)
  } →

  // Third Axiom: Countable Additivity
  lemma Third_Axiom() {
    assert(∀{Ai}[disjoint_sequence] ⊆ Σ ⇒
      P(∪Ai) = ∑P(Ai)) →
    apply(Cardinality_Additive_Function) →
    apply(Inclusion_Exclusion_Principle)
  } →

  // Combine all axioms
  apply(First_Axiom()) ∧
  apply(Second_Axiom()) ∧
  apply(Third_Axiom()) →
  assert(is_probability_measure(P))
}