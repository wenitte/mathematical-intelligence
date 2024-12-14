theorem MaximumRule_Continuity() {
  define(S: TopologicalSpace) ∧
  define(f,g: S → ℝ, continuous) ∧
  define(f∨g: S → ℝ) ∧
  assert(
    ∀s ∈ S: (f∨g)(s) = max{f(s), g(s)} →
    continuous(f∨g)
  )
}

proof MaximumRule_Continuity() {
  lemma CharacterizationMaximum() {
    assert(
      f∨g = (1/2)(f + g + |f - g|)
    )
  } →
  
  lemma DifferenceRule() {
    assert(
      continuous(f) ∧ continuous(g) →
      continuous(f - g)
    )
  } →
  
  lemma AbsoluteValueRule() {
    assert(
      continuous(f - g) →
      continuous(|f - g|)
    )
  } →
  
  lemma SumRule() {
    assert(
      continuous(f) ∧ continuous(g) ∧ continuous(|f - g|) →
      continuous(f + g + |f - g|)
    )
  } →
  
  lemma MultipleRule() {
    assert(
      continuous(f + g + |f - g|) →
      continuous((1/2)(f + g + |f - g|))
    )
  } →
  
  apply(CharacterizationMaximum()) →
  apply(DifferenceRule()) →
  apply(AbsoluteValueRule()) →
  apply(SumRule()) →
  apply(MultipleRule()) →
  assert(continuous(f∨g))
}