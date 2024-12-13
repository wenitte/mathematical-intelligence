theorem BoundedLinearTransformation_Isometry_Adjoint() {
  let(H: HilbertSpace, K: HilbertSpace) →
  let(A: BoundedLinearTransformation(H, K)) →
  assert(
    isIsometry(A) ↔ (A* ∘ A = I_H)
  )
} ↔

proof BoundedLinearTransformation_Isometry_Adjoint() {
  let(g: H, h: H) →
  
  lemma AdjointDefinition() {
    assert(
      ⟨Ag, Ah⟩_K = ⟨A*Ag, h⟩_H
    )
  } →
  
  lemma IsometryDefinition() {
    assert(
      isIsometry(A) ↔ 
      (∀x,y ∈ H: ⟨Ax, Ay⟩_K = ⟨x, y⟩_H)
    )
  } →

  lemma AdjointUniqueness() {
    assert(
      (∀g,h ∈ H: ⟨Ag, Ah⟩_K = ⟨g, h⟩_H) ↔
      (A*A = I_H)
    )
  } →

  apply(IsometryDefinition()) →
  apply(AdjointDefinition()) →
  apply(AdjointUniqueness()) →
  
  assert(
    isIsometry(A) ↔ (A*A = I_H)
  )
}