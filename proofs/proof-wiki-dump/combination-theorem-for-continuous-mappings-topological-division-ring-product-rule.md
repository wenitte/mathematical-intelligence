theorem Continuous_Product_Rule_Division_Ring() {
  letStruct(S: TopologicalSpace, τ_S) ∧
  letStruct(R: TopologicalDivisionRing, (+, *, τ_R)) ∧
  let(f: S → R, continuous) ∧
  let(g: S → R, continuous) ∧
  let(f*g: S → R) ∧
  assert(
    ∀x ∈ S: (f*g)(x) = f(x) * g(x)
  ) →
  claim(
    (f*g): (S,τ_S) → (R,τ_R) is continuous
  )
} ↔

proof Continuous_Product_Rule_Division_Ring() {
  lemma TopologicalDivisionRing_Property() {
    assert(
      (R,+,*,τ_R) is TopologicalRing
    )
  } →
  
  apply(TopologicalDivisionRing_Property()) →
  apply(Product_Rule_Topological_Ring(
    S: TopologicalSpace,
    R: TopologicalRing,
    f: continuous,
    g: continuous
  )) →
  
  conclude(
    (f*g): (S,τ_S) → (R,τ_R) is continuous
  )
}