theorem Boundary_Of_Boundary_Not_Equal_Boundary() {
  assert(
    ∀T: TopologicalSpace, ∀H ⊆ T ⇒
    (∂(∂H) ⊆ ∂H) ∧ ¬(∂(∂H) = ∂H)
  )
} ↔

proof Boundary_Of_Boundary_Not_Equal_Boundary() {
  setVar(T: TopologicalSpace) →
  setVar(H: Set[T]) →
  
  lemma Boundary_Containment() {
    assert(∂(∂H) ⊆ ∂H)
  } →
  
  // Counterexample construction
  let(T = (S, {∅, S}): IndiscreteSpace) →
  let(H ⊆ S: Set) →
  assume(H ≠ ∅ ∧ H ≠ S) →
  
  lemma Boundary_In_Indiscrete() {
    assert(∂H = S)
  } →
  
  lemma Boundary_Of_Boundary_In_Indiscrete() {
    assert(∂(∂H) = ∅)
  } →
  
  apply(Boundary_In_Indiscrete()) →
  apply(Boundary_Of_Boundary_In_Indiscrete()) →
  
  assert(∂(∂H) = ∅ ∧ ∂H = S) →
  assert(∅ ≠ S) →
  conclude(∂(∂H) ≠ ∂H)
}