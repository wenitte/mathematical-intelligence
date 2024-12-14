theorem Combination_Theorem_Continuous_Mappings() {
  let(S: TopologicalSpace, τ_S: Topology) ∧
  let(G: TopologicalSemigroup, *, τ_G: Topology) ∧
  let(λ: G) ∧
  let(f: ContinuousMapping(S → G)) →
  assert(
    ∀x ∈ S: (λ * f)(x) = λ * f(x) ∧
    ∀x ∈ S: (f * λ)(x) = f(x) * λ
  ) →
  claim(
    (λ * f): ContinuousMapping(S → G) ∧
    (f * λ): ContinuousMapping(S → G)
  )
} ↔

proof Combination_Theorem_Continuous_Mappings() {
  let(c_λ: Mapping(S → G)) →
  assert(∀x ∈ S: c_λ(x) = λ) →
  
  lemma Constant_Mapping_Continuous() {
    assert(c_λ: ContinuousMapping(S → G))
  } →
  
  lemma Product_Rule_Continuous() {
    assert(
      (c_λ * f): ContinuousMapping(S → G) ∧
      (f * c_λ): ContinuousMapping(S → G)
    )
  } →
  
  assert(∀x ∈ S: (c_λ * f)(x) = c_λ(x) * f(x)) →
  assert(∀x ∈ S: c_λ(x) * f(x) = λ * f(x)) →
  assert(∀x ∈ S: λ * f(x) = (λ * f)(x)) →
  
  lemma Equality_of_Mappings() {
    assert(c_λ * f = λ * f) ∧
    assert(f * c_λ = f * λ)
  } →
  
  conclude(
    (λ * f): ContinuousMapping(S → G) ∧
    (f * λ): ContinuousMapping(S → G)
  )
}