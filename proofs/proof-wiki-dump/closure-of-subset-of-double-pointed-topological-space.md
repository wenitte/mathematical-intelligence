theorem Closure_Double_Pointed_Space() {
  let(S: TopologicalSpace, τ_S: Topology(S)) →
  let(D: Doubleton, τ_D: IndiscreteTopology(D)) →
  let(τ: DoublePointedTopology(S × D)) →
  let(X: Subset(S × D)) →
  assert(
    cl(X) = cl(pr₁(X)) × D
  )
}

proof Closure_Double_Pointed_Space() {
  lemma Closed_Set_Property() {
    assert(cl(pr₁(X)) × D ∈ ClosedSets(τ))
  } →
  
  lemma Subset_Property() {
    ∀(s,d ∈ X) →
    assert(s ∈ pr₁(X)) →
    assert(s ∈ cl(pr₁(X))) ∧
    assert(d ∈ D) →
    conclude(X ⊆ cl(pr₁(X)) × D)
  } →

  lemma Minimal_Closed_Set() {
    ∀(C: ClosedSet(τ)) →
    assume(X ⊆ C) →
    assert(∃C'[C = C' × D ∧ C' = pr₁(C)]) →
    assert(pr₁(X) ⊆ C') →
    assert(cl(pr₁(X)) ⊆ C') →
    conclude(cl(pr₁(X)) × D ⊆ C' × D = C)
  } →

  apply(ClosureDefinition_3()) →
  apply(Closed_Set_Property()) →
  apply(Subset_Property()) →
  apply(Minimal_Closed_Set()) →
  conclude(cl(X) = cl(pr₁(X)) × D)
}