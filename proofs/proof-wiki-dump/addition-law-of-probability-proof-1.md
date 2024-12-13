theorem Addition_Law_Of_Probability() {
  assert(
    ∀A,B ∈ S (where S is a sample space) ⇒
    Pr(A ∪ B) = Pr(A) + Pr(B) - Pr(A ∩ B)
  )
} ↔

proof Addition_Law_Of_Probability() {
  assert(Pr is_a ProbabilityMeasure) →
  lemma ProbabilityMeasure_Is_Measure() {
    assert(ProbabilityMeasure ⊆ Measure)
  } →
  apply(ProbabilityMeasure_Is_Measure()) →
  lemma Measure_Is_CountablyAdditive() {
    assert(∀M ∈ Measure ⇒ M is_countablyAdditive)
  } →
  apply(Measure_Is_CountablyAdditive()) →
  lemma Measure_Is_FinitelyAdditive() {
    assert(CountablyAdditive → FinitelyAdditive)
  } →
  apply(Measure_Is_FinitelyAdditive()) →
  lemma Additive_Is_StronglyAdditive() {
    assert(∀f ∈ AdditiveFunction ⇒
      f(A ∪ B) = f(A) + f(B) - f(A ∩ B))
  } →
  apply(Additive_Is_StronglyAdditive()) →
  assert(Pr(A ∪ B) = Pr(A) + Pr(B) - Pr(A ∩ B))
}