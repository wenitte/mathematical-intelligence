theorem ClosurePointCondition_TVS() {
  let(K: TopologicalField) ∧
  let(X: TopologicalVectorSpace[K]) ∧
  let(A ⊆ X) ∧
  let(A⁻: Closure[A, X]) ∧
  let(x ∈ X) →
  assert(
    x ∈ A⁻ ↔ ∀V[V ∈ OpenNeighborhoods(𝟎_X) → (x + V) ∩ A ≠ ∅]
  )
}

proof ClosurePointCondition_TVS() {
  lemma ClosureDefinition() {
    assert(x ∈ A⁻ ↔ x ∈ AdherentPoints(A))
  } →
  
  lemma AdherentPointDefinition() {
    assert(
      x ∈ AdherentPoints(A) ↔ 
      ∀U[U ∈ OpenNeighborhoods(x) → U ∩ A ≠ ∅]
    )
  } →
  
  lemma OpenNeighborhoodClassification() {
    assert(
      ∀U[U ∈ OpenNeighborhoods(x) ↔ 
      ∃V(V ∈ OpenNeighborhoods(𝟎_X) ∧ U = x + V)]
    )
  } →
  
  apply(ClosureDefinition()) →
  apply(AdherentPointDefinition()) →
  apply(OpenNeighborhoodClassification()) →
  
  assert(
    x ∈ A⁻ ↔ 
    ∀V[V ∈ OpenNeighborhoods(𝟎_X) → (x + V) ∩ A ≠ ∅]
  )
}