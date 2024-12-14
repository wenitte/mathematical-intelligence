theorem Negation_Rule_Division_Ring() {
  assert(
    let S = TopologicalSpace(S, τ_S) ∧
    let R = TopologicalDivisionRing(R, +, *, τ_R) ∧
    let g: S → R be Continuous() ∧
    let (-g): S → R where ∀x ∈ S: (-g)(x) = -(g(x))
    ⇒ (-g): S → R is Continuous()
  )
} ↔

proof Negation_Rule_Division_Ring() {
  setVar(S: TopologicalSpace) →
  setVar(R: TopologicalDivisionRing) →
  
  lemma TopologicalDivisionRing_Properties() {
    assert(
      R is TopologicalDivisionRing() →
      R is TopologicalRing()
    )
  } →
  
  apply(TopologicalDivisionRing_Properties()) →
  
  lemma Negation_Rule_Topological_Ring() {
    assert(
      R is TopologicalRing() ∧
      g: S → R is Continuous()
      ⇒ (-g): S → R is Continuous()
    )
  } →
  
  apply(Negation_Rule_Topological_Ring()) →
  assert((-g): S → R is Continuous())
}