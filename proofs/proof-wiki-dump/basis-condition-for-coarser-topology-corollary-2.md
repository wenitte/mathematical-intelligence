theorem BasesCoarserTopology() {
  setVar(S: Set) ∧
  setVar(BB₁, BB₂: Base(S)) ∧
  setVar(τ₁: Topology(BB₁)) ∧
  setVar(τ₂: Topology(BB₂)) ∧
  assert(
    BB₁ ⊆ BB₂ → IsCoarser(τ₁, τ₂)
  )
} ↔

proof BasesCoarserTopology() {
  assume(BB₁ ⊆ BB₂) →
  
  lemma SingleSetSubset() {
    setVar(U ∈ BB₁) →
    setVar(A = {U}) →
    assert(A ⊆ BB₂) ∧
    assert(U = ∪A)
  } →
  
  apply(SingleSetSubset()) →
  assert(∀U ∈ BB₁ ∃A ⊆ BB₂: U = ∪A) →
  
  lemma BasisCondition() {
    reference("Basis Condition for Coarser Topology") →
    assert(
      [∀U ∈ BB₁ ∃A ⊆ BB₂: U = ∪A] → IsCoarser(τ₁, τ₂)
    )
  } →
  
  apply(BasisCondition()) →
  conclude(IsCoarser(τ₁, τ₂))
}