theorem Discrete_Topology_Basis() {
  assert(
    ∀S ∈ Set ∧
    ∀τ[DiscreteTopology(S)] ∧
    ℬ = {x: x ∈ S ∧ |x| = 1} ⇒
    IsBasis(ℬ, τ)
  )
} ↔

proof Discrete_Topology_Basis() {
  setVar(S: Set) →
  setVar(τ: Topology[S]) →
  setVar(T: TopologicalSpace(S,τ)) →
  setVar(U: Set[U ∈ τ]) →
  
  assert(
    U = ⋃{x: x ∈ U}
  ) →
  
  lemma SingletonContainment() {
    assert(
      ∀x[x ∈ U ⇒ ∃B[B ∈ ℬ ∧ B = {x} ∧ B ⊆ U]]
    )
  } →
  
  apply(SingletonContainment()) →
  
  assert(
    U = ⋃{B: B ∈ ℬ ∧ B ⊆ U}
  ) →
  
  assert(
    IsBasis(ℬ, τ)
  )
}