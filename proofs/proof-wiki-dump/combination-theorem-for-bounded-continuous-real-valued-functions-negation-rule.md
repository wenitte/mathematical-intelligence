theorem Negation_Rule_For_Bounded_Continuous() {
  declare(S: TopologicalSpace, τ: Topology) →
  declare(f: Function[S → ℝ]) →
  declare(-f: Function[S → ℝ]) →
  
  assert(
    (isBounded(f) ∧ isContinuous(f)) ∧
    (∀s ∈ S: (-f)(s) = -(f(s))) →
    (isBounded(-f) ∧ isContinuous(-f))
  )
} ↔

proof Negation_Rule_For_Bounded_Continuous() {
  lemma Bounded_Negation() {
    assert(
      isBounded(f) →
      isBounded(-f)
    )
  } →
  
  lemma Continuous_Negation() {
    assert(
      isContinuous(f) →
      isContinuous(-f)
    )
  } →
  
  apply(Bounded_Negation()) →
  apply(Continuous_Negation()) →
  
  assert(
    (isBounded(-f) ∧ isContinuous(-f))
  )
}