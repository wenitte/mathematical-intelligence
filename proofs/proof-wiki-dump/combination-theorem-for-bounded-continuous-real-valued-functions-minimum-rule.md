theorem MinCombination_Bounded_Continuous() {
  let S: TopologicalSpace;
  let τ: Topology(S);
  let f,g: S → ℝ;
  
  assert(
    (isContinuous(f) ∧ isBounded(f)) ∧
    (isContinuous(g) ∧ isBounded(g)) ∧
    (∀s ∈ S: (f ∧ g)(s) = min{f(s), g(s)})
    ⇒
    (isContinuous(f ∧ g) ∧ isBounded(f ∧ g))
  )
} ↔

proof MinCombination_Bounded_Continuous() {
  lemma Minimum_Rule_Bounded() {
    assert(
      isBounded(f) ∧ isBounded(g) ⇒ isBounded(f ∧ g)
    )
  } →
  
  lemma Minimum_Rule_Continuous() {
    assert(
      isContinuous(f) ∧ isContinuous(g) ⇒ isContinuous(f ∧ g)
    )
  } →
  
  apply(Minimum_Rule_Bounded()) →
  apply(Minimum_Rule_Continuous()) →
  
  assert(
    (isBounded(f ∧ g) ∧ isContinuous(f ∧ g))
  )
}