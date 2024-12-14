theorem CartesianProduct_Empty() {
  assert(
    ∀I(indexing_set) ∧
    ∀{S_i}_{i∈I}(family_of_sets) ∧
    let(S = ∏_{i∈I} S_i) ⇒
    (S = ∅ ↔ ∃i∈I: S_i = ∅)
  )
} ↔

proof CartesianProduct_Empty() {
  block NecessaryCondition() {
    apply(AxiomOfChoice) →
    assert(∀i∈I: S_i ≠ ∅ ⇒ S ≠ ∅) →
    apply(RuleOfTransposition) →
    assert(S = ∅ ⇒ ∃i∈I: S_i = ∅)
  } ∧

  block SufficientCondition() {
    setVar(j ∈ I: S_j = ∅) →
    define(CartesianProduct) {
      assert(∏_{i∈I} S_i := {f | (f: I → ⋃_{i∈I} S_i) ∧ (∀i∈I: f(i) ∈ S_i)})
    } →
    assert(∀f: I → ⋃_{i∈I} S_i) {
      assert(f(j) ∉ S_j) →
      assert(f ∉ ∏_{i∈I} S_i)
    } →
    conclude(∏_{i∈I} S_i = ∅)
  }
}