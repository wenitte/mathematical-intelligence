theorem Combination_Continuous_Functions_Negation() {
  let(S: TopologicalSpace, τ: Topology) →
  let(ℝ: RealNumberLine) →
  let(f: S → ℝ, g: S → ℝ) →
  assume(continuous(f) ∧ continuous(g)) →
  let(-f: S → ℝ) →
  assert(
    ∀s ∈ S: (-f)(s) = -(f(s))
  ) →
  assert(
    continuous(-f)
  )
} ↔

proof Combination_Continuous_Functions_Negation() {
  lemma RealNumbers_ValuedField() {
    assert(ℝ.isValuedField())
  } →
  
  lemma ValuedField_NormedDivisionRing() {
    assert(
      ∀F: ValuedField ⇒ F.isNormedDivisionRing()
    )
  } →
  
  lemma Continuous_Negation_NormedRing() {
    assert(
      ∀X: TopologicalSpace, 
      ∀R: NormedDivisionRing,
      ∀f: X → R,
      continuous(f) ⇒ continuous(-f)
    )
  } →
  
  apply(RealNumbers_ValuedField()) →
  apply(ValuedField_NormedDivisionRing()) →
  apply(Continuous_Negation_NormedRing()) →
  conclude(continuous(-f))
}