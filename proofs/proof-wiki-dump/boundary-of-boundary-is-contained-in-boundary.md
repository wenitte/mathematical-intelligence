theorem Boundary_Of_Boundary_Subset() {
  assert(
    ∀T: TopologicalSpace ∧ ∀H ⊆ T ⇒
    ∂(∂H) ⊆ ∂H
  )
} ↔

proof Boundary_Of_Boundary_Subset() {
  setVar(T: TopologicalSpace) →
  setVar(H ⊆ T) →
  setVar(B = ∂H) →
  
  lemma Boundary_Is_Closed() {
    assert(B is closed in T)
  } →
  
  setVar(B⁻: closure of B) →
  
  lemma Boundary_Closure_Intersection() {
    assert(
      ∂B = B⁻ ∩ (T∖B)⁻
    )
  } →
  
  lemma Intersection_Is_Subset() {
    assert(
      ∀X,Y: Sets ⇒ (X ∩ Y ⊆ X)
    )
  } →
  
  apply(Boundary_Closure_Intersection()) →
  apply(Intersection_Is_Subset()) →
  assert(∂B ⊆ B⁻) →
  
  lemma Closed_Set_Equals_Closure() {
    assert(
      B is closed ⇒ B = B⁻
    )
  } →
  
  apply(Boundary_Is_Closed()) →
  apply(Closed_Set_Equals_Closure()) →
  assert(B = B⁻) →
  assert(∂B ⊆ B) →
  
  substitute(B = ∂H) →
  assert(∂(∂H) ⊆ ∂H)
}