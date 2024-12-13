theorem BasisForElement() {
  assert(
    let M = (ℝ, d) ∧
    let a ∈ ℝ ∧
    let S = {I | I is open interval ∧ a ∈ I} ⇒
    isTopologicalBasis(S, neighborhoodSystem(a))
  )
} ↔

proof BasisForElement() {
  setVar(M: MetricSpace) →
  setVar(a: ℝ) →
  setVar(N: Neighborhood) →
  
  assert(N ∈ neighborhoodSystem(a)) →
  
  lemma NeighborhoodDefinition() {
    assert(
      ∃ε > 0: Bₑ(a) ⊆ N
    )
  } →
  
  lemma OpenBallIsInterval() {
    assert(
      ∀ε > 0: Bₑ(a) = (a - ε, a + ε)
    )
  } →
  
  apply(NeighborhoodDefinition()) →
  apply(OpenBallIsInterval()) →
  
  assert(
    ∀N ∈ neighborhoodSystem(a):
    ∃I ∈ S: I ⊆ N
  ) →
  
  conclude(isTopologicalBasis(S, neighborhoodSystem(a)))
}