theorem Components_Open_Union_Connected() {
  let(T = ⟨S,τ⟩: TopologicalSpace) →
  assert(
    (1): Components(T).areOpen() ↔ 
    (2): ∃U ⊆ P(S) (S = ∪U ∧ ∀V∈U(V∈τ ∧ V.isConnected()))
  )
}

proof Components_Open_Union_Connected() {
  // Forward direction (1) → (2)
  assume((1): Components(T).areOpen()) →
  assert(Components(T).isPartition(S)) →
  assert(S = ∪Components(T)) →
  assert(∀C∈Components(T)(C.isConnected())) →
  conclude((2))

  // Reverse direction (2) → (1)
  assume((2)) →
  let(C: Component(T)) →
  
  lemma Connected_Component_Intersection() {
    assert(∀U(U.isConnected() → 
      (U∩C ≠ ∅ ↔ (U ≠ ∅ ∧ U ⊆ C))))
  }

  assert(C = C∩S) by(SubsetIntersection) →
  assert(C = C∩(∪{U ⊆ S: U∈τ ∧ U.isConnected()})) by(assumption(2)) →
  assert(C = ∪{C∩U: U∈τ ∧ U.isConnected()}) by(IntersectionDistributesOverUnion) →
  assert(C = ∪{C∩U: U∈τ ∧ U∩C≠∅ ∧ U.isConnected()}) by(EmptySetUnion) →
  assert(C = ∪{U: U⊆C ∧ U∈τ ∧ U.isConnected()}) by(Connected_Component_Intersection) →
  assert(C ∈ τ) by(TopologyDefinition) →
  conclude((1))
}