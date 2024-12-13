theorem BoundaryIntersectionClosures() {
  assert(
    ∀T[TopologicalSpace] ∧ ∀X ⊆ T →
    let(∂X = X⁻ \ X°) ∧
    let(X̄ = T \ X) ∧
    let(X⁻: closure(X)) →
    ∂X = X⁻ ∩ (X̄)⁻
  )
}

proof BoundaryIntersectionClosures() {
  setVar(T: TopologicalSpace) →
  setVar(X: Subset(T)) →
  
  assert(∂X = X⁻ \ X°) →           // Definition of boundary
  
  lemma SetDifferenceIntersection() {
    assert(
      ∀A,B[Set] →
      A \ B = A ∩ B̄
    )
  } →
  
  apply(SetDifferenceIntersection()) →
  assert(∂X = X⁻ ∩ (X°)̄) →
  
  lemma ComplementInteriorClosureComplement() {
    assert(
      ∀S[Set] →
      (S°)̄ = (S̄)⁻
    )
  } →
  
  apply(ComplementInteriorClosureComplement()) →
  assert(∂X = X⁻ ∩ (X̄)⁻) →
  
  conclude(∂X = X⁻ ∩ (X̄)⁻)
}