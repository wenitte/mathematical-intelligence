theorem Maximum_Bounded_Continuous() {
  let S: TopologicalSpace,
  let τ: Topology(S),
  let f,g: S → ℝ,
  assert(
    (Bounded(f) ∧ Continuous(f)) ∧ 
    (Bounded(g) ∧ Continuous(g)) →
    ∀s ∈ S: (f ∨ g)(s) = max{f(s), g(s)} →
    Bounded(f ∨ g) ∧ Continuous(f ∨ g)
  )
}

proof Maximum_Bounded_Continuous() {
  lemma Maximum_Bounded() {
    assert(
      Bounded(f) ∧ Bounded(g) →
      Bounded(f ∨ g)
    )
  } →
  
  lemma Maximum_Continuous() {
    assert(
      Continuous(f) ∧ Continuous(g) →
      Continuous(f ∨ g)
    )
  } →
  
  apply(Maximum_Bounded()) →
  apply(Maximum_Continuous()) →
  assert(
    Bounded(f ∨ g) ∧ Continuous(f ∨ g)
  )
}