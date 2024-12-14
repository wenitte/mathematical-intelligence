theorem Continuous_Sum_Rule_TopDivisionRing() {
  assume(
    S: TopologicalSpace(τ_S) ∧
    R: TopologicalDivisionRing(+, *, τ_R) ∧
    f: ContinuousMapping(S → R) ∧
    g: ContinuousMapping(S → R) ∧
    ∀x ∈ S: (f + g)(x) = f(x) + g(x)
  )
  assert(
    (f + g): ContinuousMapping(S → R)
  )
} ↔

proof Continuous_Sum_Rule_TopDivisionRing() {
  assert(
    R: TopologicalRing(+, *, τ_R)
  ) →
  
  lemma TopRing_Sum_Rule() {
    assert(
      ∀h,k: ContinuousMapping(S → R) →
      (h + k): ContinuousMapping(S → R)
    )
  } →
  
  apply(TopRing_Sum_Rule(), {h → f, k → g}) →
  
  conclude(
    (f + g): ContinuousMapping(S → R)
  )
}