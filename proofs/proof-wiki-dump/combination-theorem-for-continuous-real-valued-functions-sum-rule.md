theorem Sum_Rule_Continuous_Functions() {
  assert(
    ∀S: TopologicalSpace,
    ∀f,g: S → ℝ,
    (Continuous(f) ∧ Continuous(g)) →
    Let((f + g)(s) ≔ f(s) + g(s)) →
    Continuous(f + g)
  )
} ↔

proof Sum_Rule_Continuous_Functions() {
  lemma Real_Field() {
    assert(ℝ: ValuedField)
  } →
  
  lemma Valued_Field_Props() {
    assert(ValuedField → NormedDivisionRing)
  } →
  
  lemma Continuous_Sum_Rule() {
    assert(
      ∀X: TopologicalSpace,
      ∀R: NormedDivisionRing,
      ∀f,g: X → R,
      (Continuous(f) ∧ Continuous(g)) →
      Continuous(f + g)
    )
  } →
  
  apply(Real_Field()) →
  apply(Valued_Field_Props()) →
  apply(Continuous_Sum_Rule()) →
  assert(Continuous(f + g))
}